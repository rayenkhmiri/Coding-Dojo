# from ninja import Ninja
# from pet import Pet

# gattous = Pet("gattous", "cat", "jumping")
# sabrine = Ninja("sabrine", "boga", gattous, "agressive", "croquette")
# sabrine.feed().walk().bathe()
           
class Ninja:
    def __init__(self, first_name, last_name, pet, treats, pet_food ):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = pet
        self.treats = treats
        self.pet_food = pet_food
    def walk(self):
        self.pet.play()
        return self
    def feed(self):
        self.pet.eat()
        return self
    def bathe(self):
        self.pet.noise()
   

#____________________ another methodd _____________
# gattous=pet("gattous","cat","jumping")
# sabrine=Ninja("sabrine","boga","agressive","croquette")
# sabrine.feed()
# sabrine.walk()
# sabrine.bathe() 




