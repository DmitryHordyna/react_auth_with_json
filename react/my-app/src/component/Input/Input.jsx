import React ,{useState}from 'react'
import MyInput from '../UI/input/MyInput'

export default function Input() {
    const [value, setValue] = useState('')
      
  function change({target}) {
    setValue(target.value)
  }
    return (
        <div style={{textAlign:"center",margin:"20px"}}>
         <MyInput type="text" value={value} onChange={change} />
        </div>
    )
}
