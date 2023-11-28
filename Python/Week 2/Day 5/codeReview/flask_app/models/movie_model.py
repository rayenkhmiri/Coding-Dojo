from ..config.mysqlconnection import connectToMySQL
class Movie:
    def __init__(self,data):
        self.id=data['id']
        self.title=data['title']
        self.filmmaker_id=data['filmmaker_id']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        