from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import database
from flask_app.models import dojo

class Ninja:
    def __init__(self,data_dict):
        self.id=data_dict['id']
        self.first_name=data_dict['first_name']
        self.last_name=data_dict['last_name']
        self.age=data_dict['age']
        self.dojo_id=data_dict['dojo_id']
        self.created_at=data_dict['created_at']
        self.updated_at=data_dict['updated_at'] 
    @classmethod
    def get_all(cls):
        query="""SELECT * FROM ninja;"""
        ninjas=[]
        db_result=connectToMySQL(database).query_db(query) 
        for row in db_result:
            ninjas.append(cls(row))
        return ninjas
    @classmethod
    def create(cls,data):
        query="""INSERT INTO ninja (first_name,last_name,age,dojo_id)
        VALUES  (%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s) ;"""
        db_result=connectToMySQL(database).query_db(query,data)
        print(db_result, "**")
        return db_result
    @classmethod
    def get_one_by(cls,data):
        query="""SELECT * FROM ninja 
        JOIN dojo ON ninja.dojo_id=dojo.id
        WHERE ninja.dojo_id=%(id)s;"""
        db_result=connectToMySQL(database).query_db(query,data)
        result=[]
        print(db_result)
        for row in db_result:
            data={
                "id":row['id'],
                "first_name":row['first_name'],
                "last_name":row['last_name'],
                "age":row['age'],
                "dojo_id":row['dojo_id'],
                "created_at":row['created_at'],
                "updated_at":row['updated_at']
            }
            result.append(data)
        print(result)
        return result