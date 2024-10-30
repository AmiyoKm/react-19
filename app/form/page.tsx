"use client"


import React, { useActionState, useEffect } from 'react'

  
  

const Form = () => {
  const [state, actionFunction  , isPending]=useActionState(actionState , {
    userName : "",
    error : null
  } )
  const [optimisticName , setOptimisticName] = React.useOptimistic(state.userName)
  async function actionState(state : any,formData : FormData) {
    const username = formData.get("username")
    
       
        try {
          if(typeof state.username === 'string') state.userName = username
         // setOptimisticName(formData.get("username"));
           setOptimisticName(username)
          return {...state ,userName : username};
        } catch (error) {
          return {...state ,error : error }
         }
  
        }
    
  return (
    <div>
        <p>Current user : {optimisticName}  </p>
        {isPending && <p>Loading...</p>}
        <form action={actionFunction}>
        <input type="text" name="username" />
        <button className='bg-black text-white' type='submit'>Submit</button>

        </form>
        {state.error && <p>{state.error}</p>}
    </div>
  )
}

export default Form