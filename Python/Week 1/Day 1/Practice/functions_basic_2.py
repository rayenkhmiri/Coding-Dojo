# function 1 
def Countdown (a) :
    list = [] 
    for i in range (a,-1,-1):
        list.append(i)
    return list    
print(Countdown (5))


# function 2
def print_and_return(li) :
    print ("print",li[0],"return",li[0])
print_and_return([5,8])

# function 3
def first_plus_length(li) :
    return li[0]+len(li)
print (first_plus_length([8,6,3,5,7]))

# function 4
def values_greater_than_second(li) :
    list=[]
    if (len(li)==1) : return False
    else :
        for i in li  :
            if (i>li[1]): list.append(i)
        return list    
print(values_greater_than_second([2,3,7,56,8,4,9,3]) )
print(values_greater_than_second([3,7]) )


# function 5
def  length_and_value(length,num)  :
    list =[]
    for i in range(length):list.append(num)   
    return list
print(length_and_value(8,5))