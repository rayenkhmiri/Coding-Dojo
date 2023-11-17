from flask import Flask , render_template              
app = Flask(__name__)

 
# http://127.0.0.1/                    
@app.route('/')                         
def hello_world():
    return 'Hello World!'
# http://127.0.0.1/hello
@app.route('/hello')
def hello():
    return "hello from server🕸️🕸️🕸️ "


#http://127.0.0.1/hello/user

@app.route('/hello/user')
def say_hello():
    return"<h1>hello james😒😒😒</h1>"


#http://127.0.0.1/hello/user
@app.route('/hello/user/<username>')
def say_hello_username(username):
    return f"<h1>Hello {username} 😘😘😘</h1>"

#http://127.0.0.1/hello/user/<username>/<times>
@app.route('/hello/user/<username>/<int:times>')
def say_hello_username_n_times(username,times):
    return f"<h1>Hello {username} 😘😘😘</h1>" * times

    
         
#http://127.0.0.1/index/jhon/54
@app.route('/index/<username>/<int:age>')
def index(username , age ):
    users = [
        {'name':"ali",'age':85},
        {'name':"jen",'age':350},
        {'name':"hab",'age':30},
        {'name':"meo",'age':3},
        {'name':"jasser",'age':35},
        {'name':"israel",'age':0} 
    ]
    return render_template("index.html",user =username , number=age , users=users) 


    

if __name__=="__main__":  
    app.run(debug=True)    


