import React, { useState}from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

export default function Form({create}) {
    const [post, setPost] = useState({ title:'',body:''});

//    const bodyInputRef=useRef()

const addNewPost=(e)=>{
    e.preventDefault()
    const newPost = {
        ...post,
        id:Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' });
    
//  setPosts([...posts,{...post,id:Date.now()}])
  // setPost([...posts,newPost])
    // console.log(bodyInputRef.current.value)   
    
}

  
    return (
        <div>
            <form >
                <MyInput
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder='Name post'
                    value={post.title} />
                <MyInput
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Description post"
                    value={post.body} />
                  {/* <MyInput ref={bodyInputRef} type="text" placeholder="Description post" /> */}
                <MyButton onClick={addNewPost} >Create Post</MyButton>
            </form>
        </div>
    )
}
