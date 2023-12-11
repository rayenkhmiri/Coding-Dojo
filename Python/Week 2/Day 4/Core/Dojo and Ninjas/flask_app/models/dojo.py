from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import database

class Dojo:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.name=data_dict['name']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at'] 

    @classmethod
    def get_all(cls):
        query="""SELECT * FROM dojo;"""
        db_result=connectToMySQL(database).query_db(query)
        dojos=[]
        for row in db_result:
            dojo=cls(row)
            dojos.append(dojo)
        print(dojos)
        return dojos
    
    @classmethod
    def create(cls,data):
        query="""INSERT INTO dojo (name) VALUES  (%(name)s);"""
        db_result=connectToMySQL(database).query_db(query,data)
        return db_result
    