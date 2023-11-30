from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user
from flask import flash

db = "shows_schema"
class Show:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.network = data['network']
        self.description = data['description']
        self.release_date = data['release_date']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.creator = None

    @staticmethod
    def validate_show(form_data):
        is_valid = True

        if len(form_data['name']) < 3:
            flash("Names need to be at least 3 characters long.")
            is_valid = False
        if len(form_data['network']) < 3:
            flash("Networks need to be at least 3 characters long.")
            is_valid = False
        if len(form_data['description']) < 3:
            flash("Descriptions need to be at least 3 characters long.")
            is_valid = False
        if form_data['release_date'] == '':
            flash("Please select a release date.")
            is_valid = False
        return is_valid

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM shows JOIN users on shows.user_id = users.id;"
                
        results = connectToMySQL(db).query_db(query)
        shows = []
        for result in results:
            this_show = cls(result)
            this_show.creator = user.User.get_by_id({'id': result['user_id']})
            shows.append(this_show)
            shows.sort(key=lambda show: show.release_date, reverse=True)
        return shows

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM shows JOIN users on shows.user_id = users.id WHERE shows.id = %(id)s;"

        result = connectToMySQL(db).query_db(query,data)
        if not result:
            return False
        this_show = cls(result[0])
        this_show.creator = user.User.get_by_id({'id': result[0]['user_id']})
        
        return this_show

    @classmethod
    def save_show(cls, form_data):
        query = "INSERT INTO shows (name,network,description,release_date,user_id) VALUES (%(name)s,%(network)s,%(description)s,%(release_date)s,%(user_id)s);" 
        
        return connectToMySQL(db).query_db(query,form_data)

    @classmethod
    def update_show(cls,form_data):
        query = "UPDATE shows SET name = %(name)s, network = %(network)s, description = %(description)s , release_date = %(release_date)s WHERE id = %(id)s;"
        
        return connectToMySQL(db).query_db(query,form_data)
    
    @classmethod
    def delete_show(cls,data):
        query = "DELETE FROM shows WHERE id = %(id)s"
        
        return connectToMySQL(db).query_db(query,data)