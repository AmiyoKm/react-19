"use client"
import React, { useActionState } from 'react'
async function increment (statePrev : any , formData : FormData){
    return statePrev +1;
}
const INC = () => {
   const [state , actionFunction ] = useActionState(increment , 0)
  return (
    <div>
        <form action={actionFunction}>
      {state}
      <button type='submit' >Increment</button>
    </form>
    </div>
  )
}


export default INC