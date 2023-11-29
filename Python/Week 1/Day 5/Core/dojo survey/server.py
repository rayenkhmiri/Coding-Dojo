from flask import Flask ,render_template , redirect, session,request
app=Flask(__name__)
app.secret_key="ray,rayen,"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process',methods=['post'])
def process():
    session["name"]=request.form["name"]
    session["dojo_location"]=request.form["dojo_location"]
    session["Favorite_Language"]=request.form["Favorite_Language"]
    session["comment"]=request.form["Comment"]

    return redirect('/result')

@app.route('/result')
def result():
    return render_template('result.html')


if __name__=="__main__" :
    app.run(debug=True,port = 5500)