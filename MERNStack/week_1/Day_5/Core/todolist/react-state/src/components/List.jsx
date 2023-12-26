import React, { useState } from 'react'

const FromComponent = ({ addPlan }) => {
    const [plan, setPlan] = useState({content:"", status:false})
    const formHandler = (e) =>{
        e.preventDefault()
        console.log("Event : ", e);
        console.log("Event Target : ", e.target.value);
        addPlan(plan)
        setPlan({content:"", status:false})
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" onChange={(e) => setPlan({...plan, content:e.target.value})} 
                value={plan.content} />
                <button className='btnn'>ADD LIST</button>
            </form>
        </div>
    )
}

export default FromComponent
