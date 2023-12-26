import { useState } from 'react'
import './App.css'
import PlansComponents from './components/ToDo'
import FromComponent from './components/List'


function App() {
  localStorage.setItem("plans",JSON.stringify({ content: " Build Your Car", status: false },
  { content: "PUT you color", status: true }))
  const savedPlans  = JSON.parse(localStorage.getItem("plans"))
  const [plans, setPlans] = useState([
    { content: "Build You Car", status: false },
    { content: "Put your color", status: true }])




  //  creation 
  const addPlan = (newPlan) => {
    setPlans([...plans, newPlan])
  }


  // UPDATE
  const updatePlan = (index) => {
    console.log("Index of Plan to update", index);

    // 1 * create a copy of plans
    const plansUpdated = [...plans]


    //2 * update the plan
    plansUpdated[index].status = !plans[index].status
    console.log(plansUpdated);
    setPlans(plansUpdated)
  }



  // DELETEEEEEEEEEEEEEEEE
  const deletePlan = (index) => {
    console.log("Plan To delete", index);
    const filtredPlans = plans.filter((plan, idx)=> idx != index)
    const filtredPlans2 = plans.filter((plan, idx)=> {
      if(idx != index){
        return plan
      }
    })
    console.log(filtredPlans);
    setPlans(filtredPlans)
  }
  return (
    <div className='container'>
      <h1>Add Your Plans for your Car</h1>
      <FromComponent addPlan={addPlan} />
      <PlansComponents plans={plans} updatePlan={updatePlan} deletePlan={deletePlan} />
    </div>
  )
}

export default App