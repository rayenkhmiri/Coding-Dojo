from flask import Flask, render_template, redirect,request,session

app = Flask(__name__)
app.secret_key = 'we are not safe' # set a secret key for security purposes


# http://127.0.0.1/
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    print("*"*20, request.form,"*"*20)
    session["name"] = request.form["name"]
    session["age"] = request.form["age"]
    session["fav_food"] = request.form["fav_language"]
    session["fav_number"] = request.form["comments"]
  
    return redirect('/display')

@app.route('/display')
def display():
    return render_template("hello.html")

@app.route('/clear')
def clear():
    session.clear()
    return redirect ('/display')

if __name__ == "__main__":
    app.run(debug=True, port=5001)