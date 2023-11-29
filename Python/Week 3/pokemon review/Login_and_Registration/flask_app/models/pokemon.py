from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash 

class Pokemon :
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.type = data['type']
        self.power = data['power']
        self.hp = data['hp']
        self.image = data['image']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def add(cls,data):
        query=""" INSRT INTO pokemon (name ,type , power , hp,image, user_id)
        VALUES(%(name)s,%(type)s,%(power)s,%(hp)s,%(image)s,%(user_id)s) ;     """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_pokemon_by_user(cls,data):
        query="""
                    SELECT * FROM pokemons 
                    JOIN users on users.id = pokemon.user_id 
                      WHERE users.id=%(user_id)s ;
                          """
        
        results = connectToMySQL(DATABASE).query_db(query,data)
        pokemons =[]
        for row in results :
            pokemons.append(cls(row))
        return pokemons


    @classmethod
    def get_by_id(cls, data):
        query = """
        SELECT * FROM users WHERE id = %(id)s;
        """
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    def edit(cls,data):
        query=""" UPDATE pokemons SET name = %(name)s , type = %(type)s, power = %(power)s, hp = %(hp)s , image = %(image)s,
         WHERE id = %(id)s;
           """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query="delete from pokemons where id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['first_name'])< 2:
            flash("First Name must be at least 3 ")
            is_valid = False

        if data['power']< 1:
            flash("power must be positive ")
            is_valid = False
 
        if data['hp']< 1:
            flash("hp is not valid ")
            is_valid = False

        elif data['image '] = "":
            flash("you have to put  an image  ")
            is_valid = False
        return is_valid

    
