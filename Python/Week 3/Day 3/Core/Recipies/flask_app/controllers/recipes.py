from flask_app import app
from flask import render_template,session,redirect,request
from flask_app.models.recipes_model import Recipe

@app.route('/recipes/new')
def new_recipe():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('new_recipe.html')

@app.route('/recipes/<int:id>')
def one_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    recipe=Recipe.get_by_id({'id':id})
    return render_template('one_recipe.html',recipe=recipe)

@app.route('/recipes/<int:id>/edit')
def edit_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    recipe=Recipe.get_by_id({'id':id})
    return render_template('edit_recipe.html',recipe=recipe)


@app.route('/recipes/create',methods=['post'])
def create_recipe():
    if Recipe.validate(request.form):
        data={**request.form,"user_id":int(session['user_id'])}
        print("🕸️🕸️🕸️🕸️🕸️🕸️🕸️🕸️",data,"🕸️🕸️🕸️🕸️🕸️🕸️🕸️🕸️")
        db_return=Recipe.create(data)
        print(db_return)
        return redirect('/dashboard')
    return redirect ('/recipes/new')

@app.route('/recipes/update',methods=['post'])
def update_recipe():
    if Recipe.validate(request.form):
        data={**request.form}
        print("🕸️🕸️🕸️🕸️🕸️🕸️🕸️🕸️",data,"🕸️🕸️🕸️🕸️🕸️🕸️🕸️🕸️")
        Recipe.update(data)
        # print(db_return)
        return redirect('/dashboard')
    return redirect (f'/recipes/{request.form["id"]}/edit')

@app.route('/recipes/<int:id>/destroy')
def destroy_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    Recipe.destroy({'id':id})
    return redirect("/dashboard")