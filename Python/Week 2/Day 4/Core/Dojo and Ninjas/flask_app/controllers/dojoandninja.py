from flask_app import app
from flask import render_template,redirect,request,session
from flask_app.models.dojo import Dojo
from flask_app.models.ninjas import Ninja


@app.route('/')
def index():
  
    return render_template('index.html')
@app.route('/create/dojo',methods=['POST'])
def create():
    data={
        **request.form
    }
    # Dojo.create(data)
    return redirect('/')
@app.route('/ninja')
def create_ninja():
    return render_template('create_ninja.html')
@app.route('/ninja/create',methods=['POST'])
def add_ninja():
    data={
        **request.form
    }
    print(data, "_")
    return redirect('/')
@app.route('/ninja/<int:id>')
def show(id):
    data={"id":id}
    ninja=Ninja.get_one_by(data)
    return render_template('show.html',ninja=ninja)