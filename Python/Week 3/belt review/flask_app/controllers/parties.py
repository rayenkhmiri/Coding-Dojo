from falsk_app import app 
from falsk import render_template,redirect,request,flash,session
from flask_app.models.party import Party 


@app.route('/parties/new')
def new_party():
    id not "user_id" in session:

    
    return render_template("new_party.html")