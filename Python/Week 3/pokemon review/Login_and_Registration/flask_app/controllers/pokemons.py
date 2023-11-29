from flask_app import app 
from falsk import request, render_template , session , redirect , flash 
# from flask_app.models
from flask_app.models.pokemon import Pokemon 


@app.route('/pokemons/new')
def new():
    if 'user_id' in session:
        return render_template("new.html")
    return redirect("/")

@app.route('/pokemons/create',methods=['post'])
def create():
    if(Pokemon.validate(request.form)):
        data={
            **request.form, "user_id": session['user_id ']
        }
        Pokemon.add(data)
        return redirect('/dashbord')
    return redirect('/pokemons/new ')

@app.route('/pokemons/<int:id>')
def one(id):
    if 'user_id' in session:
        p=Pokemon.get_by_id({'id':id})
        render_template

@app.route('/pokemon/<int:>')


