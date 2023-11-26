from flask import Flask , render_template , redirect ,request 
from user_name import user
app=Flask(__name__)

@app.route('/')
def dashboard():
    users=user.get_all()
    
    return render_template("index.html")

# @app.route('/another')

if __name__=='__main__':
    app.run(debug=True,port=1337)