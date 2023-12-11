from flask_app import app
from flask import render_template,session,redirect,request
from flask_app.models.squatches_model import Squatche

@app.route('/squatches/new')
def new_squatche():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('new_squatche.html')   


@app.route('/squatches/<int:id>')
def one_squatche(id):
    if not 'user_id' in session:
        return redirect('/')
    squatche=Squatche.get_by_id({'id':id})
    return render_template('one_squatche.html',squatche=squatche)

@app.route('/squatches/<int:id>/edit')
def edit_sqautche(id):
    if not 'user_id' in session:
        return redirect('/')
    squatche=Squatche.get_by_id({'id':id})
    return render_template('edit_squatche.html',squatche=squatche)


@app.route('/squatches/create',methods=['post'])
def create_squatche():
    if Squatche.validate(request.form):
        data={**request.form,"user_id":int(session['user_id'])}
        print("🕸️🕸️🕸️🕸️🕸️🕸️🕸️🕸️",data,"🕸️🕸️🕸️🕸️🕸️🕸️🕸️🕸️")
        db_return=Squatche.create(data)
        print(db_return)
        return redirect('/dashboard')
    return redirect ('/squatches/new')

@app.route('/squatches/update',methods=['post'])
def update_squatche():
    if Squatche.validate(request.form):
        data={**request.form}
        print("👌👌👌👌👌👌👌",data,"👌👌👌👌👌👌👌")
        Squatche.update(data)
        # print(db_return)
        return redirect('/dashboard')
    return redirect (f'/squatches/{request.form["id"]}/edit')

@app.route('/squatches/<int:id>/destroy', methods=['post'])
def destroy_squatche(id):
    if not 'user_id' in session:
        return redirect('/')
    Squatche.destroy({'id':id})
    return redirect("/dashboard")