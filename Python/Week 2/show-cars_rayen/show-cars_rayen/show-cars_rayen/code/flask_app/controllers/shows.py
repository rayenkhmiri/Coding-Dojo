from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.show import Show
from flask_app.models.user import User

def check_session():
    if 'user_id' not in session:
        return redirect('/user/login')
    user = User.get_by_id({"id":session['user_id']})
    if not user:
        return redirect('/user/logout')
    return user

def validate_show_form(form):
    if not Show.validate_show(form):
        return False
    return True

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect('/')
    user = check_session()
    return render_template('dashboard.html', user=user, shows=Show.get_all())

@app.route('/shows/new')
def create_show():
    if 'user_id' not in session:
        return redirect('/')
    user = check_session()
    return render_template('show_new.html', user=user)

@app.route('/shows/new/process', methods=['POST'])
def process_show():
    if 'user_id' not in session:
        return redirect('/')
    user = check_session()
    if not validate_show_form(request.form):
        return redirect('/shows/new')

    data = {
        'user_id': session['user_id'],
        'name': request.form['name'],
        'network': request.form['network'],
        'description': request.form['description'],
        'release_date': request.form['release_date'],
    }
    Show.save_show(data)
    return redirect('/dashboard')

@app.route('/shows/<int:id>')
def view_show(id):
    if 'user_id' not in session:
        return redirect('/')
    user = check_session()
    return render_template('show_view.html', user=user, show=Show.get_by_id({'id': id}))

@app.route('/shows/edit/<int:id>')
def edit_show(id):
    if 'user_id' not in session:
        return redirect('/')
    user = check_session()
    return render_template('show_edit.html', user=user, show=Show.get_by_id({'id': id}))

@app.route('/shows/edit/process/<int:id>', methods=['POST'])
def process_edit_show(id):
    if 'user_id' not in session:
        return redirect('/')
    user = check_session()
    if not validate_show_form(request.form):
        return redirect(f'/shows/edit/{id}')

    data = {
        'id': id,
        'name': request.form['name'],
        'network': request.form['network'],
        'description': request.form['description'],
        'release_date': request.form['release_date'],
    }
    Show.update_show(data)
    return redirect('/dashboard')

@app.route('/shows/delete/<int:id>')
def delete_show(id):
    if 'user_id' not in session:
        return redirect('/')
    check_session()
    Show.delete_show({'id':id})
    return redirect('/dashboard')