from ..config.mysqlconnection import connectToMySQL

class Filmmaker:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']


    @classmethod
    def get_all(cls):
        query = 'select * FROM filmakers;'
        filmmakers = []
        results = connectToMySQL('filmmaker_db1').query_db(query)
        for row in results:
            filmmakers.append(cls(row))
            return filmmakers


    @classmethod
    def save(cls,data):
        query = "INSERT INTO filmakers (name) VALUES (%(name)s);"
        return connectToMySQL('filmmaker_db1').query_db(query,data)
    

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM filmakers WHERE id = %(id)s;"
        result = connectToMySQL('filmmaker_db1').query_db(query,data)
        return cls(result[0])
