import React,{useState} from 'react'
import MyButton from '../UI/button/MyButton'


const Counter = function () {
    const [likes, setLikes] = useState(0)

  function increment() {
   setLikes(likes+1)
  }
  function decrement() {
    setLikes(likes-1)
  }
    return (
        <div>
      <h1>{likes}</h1>
      <MyButton onClick={increment}>Increment</MyButton>
      <MyButton onClick={decrement}>Decrement</MyButton>
        </div>
    )
  
}
export default Counter