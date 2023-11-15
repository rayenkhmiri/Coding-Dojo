class user: 
        def __init__(self,first_name,last_name,email,age,is_rewards_member=false,gold_card_points = 0 ):
                self.first_name=first_name
                self.last_name=last_name
                self.email=email
                self.age=age
                self.is_reward_member=is_rewards_member
                self.gold_card_points=gold_card_points

        def display_info(self):
            print(f"first name is{self.first_name}\n last name is{self.last_name}\n email is{self.email}\n age{self.age}\n is reward member{self.is_reward_member}\n gold card points{self.gold_card_points}")
            return self
        def enroll(self):
            self.is_reward_member=True
            self.gold_card_points=200
            return self  
        def spend_points(self,amount):
            if(amount<=self.gold_card_points):
                    self.gold_card_points-=amount
            else :
                    print("you can amount just this val ",self.gold_card_points)
                    self.gold_card_points=0
            return self

user1=User("rayen","khemiri","rayenkhmiri772@gmail.com",20)
user1.display_info()
user1.enroll()
user1.display_info()
user1.spend_points(50)
user1.display_info()


user2=user("wael","ajimi","waelajimi@gmail.com",28)
user2.display_info()
user2.enroll()
user2.display_info()
user2.spend_points(80)
user2.display_info()


      

                    

                
           
           

          
          
          


