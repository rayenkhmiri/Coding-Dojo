class bankAccount :   
    def __init__(self, int_rate, balance):
        self.int_rate=int_rate
        self.balance=balance



    def deposit(self, amount):
           
         self.balance+=amount
         return self

    def withdraw(self, amount): 
          if amount<=self.balance :

            self.balance-=amount
            return self
          else:
              print("insufficient funds:chaarging a $5 fee ")
              return self

    def display_account_info(self):
         print(F"balance:{self.balance}")
         return self 

    def yield_interst(self):  
         
         self.blanace=self.balance*self.int_rate / self.balance 
         return self






account1 =bankAccount(0.2,2000)
account2 =bankAccount(0.1,100)
account1.deposit(10000).deposit(5000).deposit(1000).withdraw(2000).yield_interst().display_account_info()
account2.deposit(4000).deposit(1000).withdraw(900).withdraw(100).withdraw(100).withdraw(1000).yield_interst().display_account_info()















          
  

  



        









