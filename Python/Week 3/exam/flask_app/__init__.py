from flask import Flask
app = Flask(__name__)


app.secret_key = "rayen"
DATABASE="squatches_schema"