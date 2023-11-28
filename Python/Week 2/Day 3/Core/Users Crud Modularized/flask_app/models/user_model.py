from flask_app.config.mysqlconnection import connectToMySQL


class User :
    def __init__(self,data) :
        self.id=data['Id']
        self.first_name=data['First_name']
        self.last_name=data['Last_name']
        self.email=data['email']
        self.created_at=data['Created_at']
        self.updated_at=data['Updated_at']

    @classmethod
    def get_all(cls):
        query=''' SELECT *FROM users '''
        results=connectToMySQL("users").query_db(query)
        all_users=[]
        for user in results:
            all_users.append(cls(user))
        return all_users
    
    @classmethod
    def save(cls,data):
        query='''
                INSERT INTO users (First_name,Last_name,email)
                VALUES (%(first_name)s,%(last_name)s,%(email)s)'''
        results=connectToMySQL("users").query_db(query,data)
        return results

    @classmethod 
    def get_last_user (cls):
        query='''

            SELECT *FROM users 
            ORDER BY Id DESC
            LIMIT 1
                '''
        results=connectToMySQL("users").query_db(query)
        return cls(results[0])
    
    @classmethod 
    def get_by_id (cls,data):
        query='''SELECT *FROM users 
            WHERE Id =%(id)s
                '''
        results=connectToMySQL("users").query_db(query,data)
        return cls(results[0])
    
    @classmethod
    def delete_by_id(cls,data):
        query='''DELETE FROM users WHERE Id=%(id)s
            '''
        return connectToMySQL("users").query_db(query,data)

    @classmethod
    def update(cls,data):
        query='''update users 
                SET First_name=%(first_name)s,email=%(email)s,Last_name=%(last_name)s
                WHERE Id=%(id)s
                '''
        return connectToMySQL("users").query_db(query,data)