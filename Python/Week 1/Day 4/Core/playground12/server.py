# from flask import Flask,render_template
# app = Flask(__name__)



# @app.route('/')
# def name():
#     return 'Welcome!'


# @app.route('/square/<color>/<int:number>')
# def circles(color, number):
#     return render_template("index.html", color=color, number=number)



# if __name__ == "__main__":
#     app.run(debug=True, port=5001)


from flask import Flask,render_template
app = Flask(__name__)

@app.route('/sqauare/<color>/<int:number>')
def index(color,number):
    return render_template("index.html",color=color , number=number)

if __name__ == '__main__':
    app.run(debug=True,port=5001)

