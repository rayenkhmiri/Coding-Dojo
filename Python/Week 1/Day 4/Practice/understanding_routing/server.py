from flask import Flask , render_template              
app = Flask(__name__)
      
#http://127.0.0.1/index/jhon/54
@app.route('/')                         
def hello_world():
    return 'Hello World!'


if __name__=="__main__":  
    app.run(debug=True)    


