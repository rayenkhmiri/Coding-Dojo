from ninja import Ninja
from pet import Pet

gattous = Pet("gattous", "cat", "jumping")
sabrine = Ninja("sabrine", "boga", gattous, "agressive", "croquette")
sabrine.feed().walk().bathe()
           
   

#____________________ another methodd _____________
# gattous=pet("gattous","cat","jumping")
# sabrine=Ninja("sabrine","boga","agressive","croquette")
# sabrine.feed()
# sabrine.walk()
# sabrine.bathe() 




