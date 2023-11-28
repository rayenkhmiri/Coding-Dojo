import re	
from flask import flash 
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class User :
    def __init__(self,data_dict):
        self.id=data_dict["id"]
        self.first_name=data_dict["first_name"]
        self.last_name=data_dict["last_name"]
        self.email=data_dict["email"]
        self.password=data_dict["password"]

        # CRUD Queries ==classmethods


    @classmethod
    def create(cls,data):
        query = """INSERT INTO users
                            (first_name , last_name , email ,password)
                          VALUES (%(first_name)s , %(last_name)s ,%(email)s ,%(password)s);
                          """   
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_by_id(cls,data):
        query = """SELECT * FROM users WHERE id = %(id)s;"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        if result : 
            return cls(result[0])
        return None
    

    @classmethod
    def get_by_email(cls,data):
        query = """SELECT * FROM users WHERE email = %(email)s;"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        if result : 
            return cls(result[0])
        return False
    
    @staticmethod
    def validate(data):
        is_valid = True
        # first name 
        if len(data['first_name'])<2:
            is_valid = False
            flash("First Name must be greater than 2 characters", "resigter")
        
        # last name

        if len(data['first_name'])<2:
            is_valid = False
            flash("Last Name must be greater than 2 characters", "resigter") 

        # Email

        if not EMAIL_REGEX.match(data["email"]):
            flash("Invalid email adress !")
            is_valid = False
        #  2 email must be unique 

        if User.get_by_email({"email":data["email"]}):
            flash("Email already in user , hope by you ." , "resigter")

        # password : 
        #  1 password length

        if len(data['password'])<6:
            flash("password too short.","register")
            is_valid = False 

        # 2 compare password and confirm password 

        elif data["password"] != data["confirm_pw"]:
            flash("passwords must match.","register")
            is_valid =False
            return is_valid
            




    

    





