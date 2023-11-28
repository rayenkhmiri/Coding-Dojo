from flask import falsh 
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL



class Party :
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
                            (user_id , title , location , all_pages , description )
                          VALUES (%(user_id)s , %(title)s ,%(location)s ,%(date)s ,%(all_ages)s ,%(description)s);
                          """   
    return connectToMySQL(DATABASE).query_db(query,data)
     


@classmethod
def get_all(cls):
       query = """SELECT *FROM parties where id =%(id)s;"""
       result =connectToMySQL(DATABASE).query_db(query_data)
       if result:
              return cls(result[0])
       return None 


@classmethod
def get_user_parties(cls,data):
    query="""SELECT * FROM parties WHERE user_id=%(user_id)s;"""
    result =connectToMySQL(DATABASE).query_db(query_data)
    user_parties = []
    for row in results : 
        user_parties.append(cls(row))
    return user_parties
        

@classmethod
def update(cls,data):
      query = """UPDATE parties SET title = %(titles)s ,location = %(location)s , date =%(date)s, all_ages = %(all_ages)s, description = %(description)s WHERE (id)s;"""
      return connectToMySQL(DATABASE)

    

