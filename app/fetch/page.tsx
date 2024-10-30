import React, {use} from 'react'
async function dataFetch() {
    const res =await  fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json()
}
const FetchingData = () => {

    const data = use(dataFetch())
    console.log(data)
  return (
    <div>FetchingData</div>
  )
}

export default FetchingData