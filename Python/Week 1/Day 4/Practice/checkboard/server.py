from flask import Flask,render_template
app=Flask(__name__)

@app.route('/')
def check():
    n1=4
    n2=4
    return render_template('index.html',n1=n1,n2=n2 )

@app.route('/<int:n1>')
def check1(n1):
    n1=int(n1/2)
    return render_template('index.html', n1=n1, n2=4)

@app.route('/<int:n1>/<int:n2>')
def check2(n1,n2):
    return render_template('index.html',n1=int(n1/2),n2=int(n2/2))
@app.route('/<int:n1>/<string:color1>/<int:n2>')
def check4(n1,n2,color1):
    return render_template('index.html',n1=int(n1/2),n2=int(n2/2),color1=color1)

@app.route('/<int:n1>/<string:color1>/<int:n2>/<string:color2>')
def check3(n1,n2,color1,color2):
    return render_template('index.html',n1=int(n1/2),n2=int(n2/2),color1=color1,color2=color2)

if __name__=='__main__':
    app.run(debug=True,port=5000)