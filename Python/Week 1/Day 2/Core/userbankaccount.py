from userbankaccount import BankAccount
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_list=[BankAccount(0.02, 0)]
    # other methods
    
    def make_deposit(self, amount):
    	# your code here
        if len(self.account_list)==1 :
            self.account_list[0].deposit(amount)
        else :
            print(f"You have {len(self.account_list)} Accounts")
            user_choice  = input(f"Choose an account number from (1-{len(self.account_list)})")
            print(user_choice, "//////////")
            self.account_list[int(user_choice)-1].deposit(amount)
        return self
    def make_withdraw(self,amount):
        if len(self.account_list)==1 :
            self.account_list[0].withdraw(amount)
        else :
            print(f"You have {len(self.account_list)} Accounts")
            user_choice  = input(f"Choose an account number from (1-{len(self.account_list)})")
            print(user_choice, "//////////")
            self.account_list[int(user_choice)-1].withdraw(amount)
        return self
    def display_user_balance(self) :
        for i in self.account_list :
            i.display_account_info()
        return self
    def add_account(self,int_rate,balance):
        self.account_list.append(BankAccount(int_rate,balance))
        return self
    def transfer_money(self, amount, other_user):
        
        if self.make_withdraw(amount)==False : return None
        else : other_user.make_deposit(amount)
        return self

if __name__ == '__main__':
    user1=User("rayen","khmirirayen@gmail.com")    
    user1.add_account(0.06,5000)
    user1.display_user_balance()
    user2=User("a","khmirirayen@gmail.com")    
    user2.display_user_balance()
    user1.transfer_money(200,user2)
    user1.display_user_balance()
    user2.display_user_balance()