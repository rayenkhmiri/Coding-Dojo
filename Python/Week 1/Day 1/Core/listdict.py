
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15
students[0]['last_name'] ='Bryant'
sports_directory['soccer'] [0]='Andres'
z[0]['y']=30
print(x)
print(students)
print(sports_directory)
print(z)



def iterateDictionary(dict):
    for i in dict :
           for key in i.keys():
            print(f"{key} - {i[key]},") 

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
# print(students[0].keys())
iterateDictionary(students) 
# # should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

def iterateDictionary2(key_name, some_list) :
    list=[]
    for i in some_list :
        list.append(i[key_name])
    for j in list : print(j)
    return list    

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)


def printInfo(some_dict) :
    for key in some_dict.keys():
        print( len(some_dict[key]),key)
        for value in some_dict[key]:
            print(value)

    return None

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)

       