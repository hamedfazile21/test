import React, {useState} from 'react'
import axios from 'axios'
const App = () => {
     const [data , setData] = useState([])
     const respons = axios.get((`https://reqres.in/api/users?page=1`)).then((res) =>{
          setData(res.data.data)
     })
  return (
    <div>
      {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item:any , index) =>{
               return(
                    <div className='flex flex-row items-center justify-between w-[20%]' key={index}>
                         <p>Name: <span>{item.first_name}</span></p>
                         <p>Last Name: <span>{item.last_name}</span></p>
                    </div>
               )
          })
      }
    </div>
  )
}

export default App
