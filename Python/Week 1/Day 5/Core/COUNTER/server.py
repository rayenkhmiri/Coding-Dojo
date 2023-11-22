from flask import Flask , render_template , redirect, request , session

app=Flask(__name__)
app.secret_key="sava"
i=1
@app.route('/')
def index () :
    session["number"]=1
    return render_template('index.html',i=session["number"])


@app.route('/increase')
def process() :
    
    session["number"]=int(session["number"])+1
    return render_template('index.html',i=session["number"])


if __name__=="__main__":
    app.run(debug=True , port=5000)