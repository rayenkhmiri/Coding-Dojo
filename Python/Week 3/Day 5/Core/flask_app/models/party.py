from flask import flash 
from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL

class party:
    def __init__(self,data_dict):
        self.id = data_dict["id"]
        self.user_id = data_dict["user_id"]
        self.title = data_dict["title"]
        self.location = data_dict["location"]
        self.date = data_dict["date"]
        self.all_ages = data_dict["all_ages"]
        self.description = data_dict["description"]

    #  CRUD Queries = class-methods 

    #  1 -creat 
    @classmethod 
    def create(cls,data):
        query="""INSERT INTOP parties 
                                  (user_id, title ,location , date ,all_ages ,description)
                        VALUES
                             (%(user_id)s, %(title)s ,%(location)s , %(date)s ,%(all_ages)s ,%(description)s);
                     """
        
        return connectToMySQL(DATABASE).query_db(query,data)
    
    # 2 -read 
    # 2-1 get all parties

    @classmethod
    def get_all(cls):
        query = "SELECT *FROM parties;"
        results = connectToMySQL(DATABASE).quey_db(query)
        all_parties = []
        for row in results:
            all_parties.append(cls(row))
        return all_parties
    
    # 2-2get one party  by ID

    @classmethod
    def get_by_id(cls,data):
        query = """SELECT * FROM parties WHERE id=%(id)s;"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        if result :
            return cls(result[0])
        return None
    
       # 2-2get all userby ID

    @classmethod
    def get_user_parties(cls,data):
        query = """SELECT * FROM parties WHERE user_id=%(user_id)s;"""
        results = connectToMySQL(DATABASE).query_db(query,data)
        user_parties = []
        for row in results :
            return user_parties.append(cls(row))
        return user_parties 
    
    # 3-UPDATE
    @classmethod
    def update(cls,data):
        query=""" UPDATE parties SET title = %(title)s, location=%(location)s , date=%(date)s ,all_ages=%(all_ages)s ,description %(description)s
                    WHERE id =%(id)s ; """
        return connectToMySQL(DATABASE);query_db(query,data)
    
    # 4_ DESTROY
    @classmethod
    def destroy(cls,data):
        query = """DELETE FROM parties WHEREid = %(id)s; """
        return connectToMySQL(DATABASE).query_db(query ,data)
    
    





       

    





  