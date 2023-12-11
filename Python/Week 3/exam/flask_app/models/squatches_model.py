from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from flask_app.models import user_model

class Squatche:
    def __init__(self,data):
        self.id=data["id"]
        self.user_id=data["user_id"]
        self.name=data["name"]
        self.description=data["description"]
        self.date_made=data["date_made"]
        self.number=data["number"]
        self.poster=user_model.User.get_by_id({'id':self.user_id})
        
    
    @classmethod
    def create(cls,data):
        query="""INSERT INTO squatches 
                            (user_id,name,date_made,number,description)
                            VALUES (%(user_id)s,%(name)s,%(date_made)s,%(number)s,%(description)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query="""SELECT * FROM squatches;"""
        results=connectToMySQL(DATABASE).query_db(query)
        all_squatches=[]
        for row in results:
            all_squatches.append(cls(row))
        return all_squatches
    
    @classmethod
    def get_by_id(cls,data):
        query="""SELECT * FROM squatches WHERE id=%(id)s;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return None
    
    @classmethod
    def update(cls,data):
        print("🐝"*10, data,"🐝"*10)
        query=""" UPDATE squatches SET name=%(name)s,date_made=%(date_made)s,
                number=%(number)s,description=%(description)s WHERE id=%(id)s; """
        return connectToMySQL(DATABASE).query_db(query,data)
    @classmethod
    def destroy(cls,data):
        query="""DELETE FROM squatches WHERE id=%(id)s;"""
        return connectToMySQL(DATABASE).query_db(query,data)
            
    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['name'])<3:
            is_valid=False
            flash(" squatche name is required")
        # if len(data['instructions'])<3:
        #     is_valid=False
        #     flash("squatche instructions is required")
        if len(data['description'])<3:
            is_valid=False
            flash("squatche description must be at least 10")
        if (data['date_made'])=="":
            is_valid=False
            flash("squatche Date must be provided")
        return is_valid