from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user
from flask_app import DATABASE

class Book:
    def __init__(self,data):
        self.id=data["id"]
        self.title=data["title"]
        self.author=data["author"]
        self.my_thoughts=data["my_thoughts"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.user_id=data["user_id"]
        self.creater=None

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO books (title,author,my_thoughts,user_id)
                VALUES (%(title)s,%(author)s,%(my_thoughts)s,%(user_id)s);
                """

        return connectToMySQL(DATABASE).query_db(query, data)
    

    @classmethod
    def get_all_books(cls):
        query = """
                     
                     
                    select * from books join users on users.id=books.user_id
                    
                """
        result = connectToMySQL(DATABASE).query_db(query)
        books=[]
        for row in result:
            one_book= cls(row)
            books.append(one_book)

            data={
                
                **row,
                "id":row["users.id"],
                "created_at":row["users.created_at"],
                "updated_at":row["users.created_at"]}
            


            one_book.creater=user.User(data)
        return books
    
    @classmethod
    def get_book_id(cls,data):
        query = """
                     
                     
                    select * from books join users on users.id=books.user_id where books.id =%(id)s
                    
                """
        result = connectToMySQL(DATABASE).query_db(query,data)
        book_one=cls(result[0])
        this_user={ **result[0],
                   "id":result[0]["users.id"],
                   "created_at":result[0]["users.created_at"],
                   "updated_at":result[0]["users.updated_at"]
                   }
        book_one.creater=user.User(this_user)

        return book_one
        
    @classmethod
    def update(cls,data):
        query = """
                UPDATE books
                SET title = %(title)s, author = %(author)s, my_thoughts=%(my_thoughts)s 
                WHERE id=%(id)s;"""

        return connectToMySQL(DATABASE).query_db(query, data)

        





    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["title"]) < 1:
            is_valid = False
            flash("title must not be blank")
        if len(data["author"]) < 1:
            is_valid = False
            flash("Author must not be blank")

        if len(data["my_thoughts"]) < 1:
            is_valid = False
            flash("my_thoughts must not be blank")
        
        return is_valid
