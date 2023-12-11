from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.book import Book
from flask_app.models import user




@app.route("/create",methods=["POST"])
def book_form():

    if not Book.validate(request.form):
        return redirect("/books/new")
    data={**request.form,"user_id":session["user_id"]}
    Book.create(data)
    return redirect("/books")

@app.route("/books/new")
def diply_books():
   
    return render_template("create_books.html")


@app.route("/books/<int:id>")
def display_book_one(id):
   data={"id":id}
   one_book=Book.get_book_id(data)
   return render_template("view.html",one_book=one_book)

@app.route("/books/<int:id>/edit")
def book_render(id):
   data={"id":id}
   one_book=Book.get_book_id(data)
   return render_template("update_books.html",one_book=one_book)

@app.route("/books/<int:id>",methods=['POST'])
def display_books(id):
   data={ "id":id,
         
         **request.form}
   Book.update(data)

   return redirect('/books')