import React from 'react'


const PlansComponents = ({plans, updatePlan, deletePlan}) => {
    return (
    <div>
        {plans.map((plan, idx)=> <div key={idx} style={{display:"flex"}}>
            <h2 style={plan.status?{textDecoration:"line-through", color:"green"}:{}}>{plan.content}</h2>
            <input type='checkbox' checked={plan.status} 
            onChange={(e)=> updatePlan(idx)}
            />
            <button onClick={()=> deletePlan(idx)} className='btn'>Delete</button>
            </div>)}
    </div>
    )
}

export default PlansComponents