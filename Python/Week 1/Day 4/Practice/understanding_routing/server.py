from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)

    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'


@app.route('/dojo')
def dojo():
    return 'dojo!'

@app.route('/say/name')
def name():
    return 'hi name'

@app.route('/repeat/<int:counter>/word')
def say_something(word,counter):
    return (word + " ")* counter




  # Return the string 'Hello World!' as a response
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)   