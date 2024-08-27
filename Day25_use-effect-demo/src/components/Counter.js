import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import axios from 'axios'

const Counter = () => {
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[num3, setNum3] = useState(0);
    const[post, setPost] = useState('');
    useEffect( () => {
                setTimeout(() => {
                    setNum1( (num1) => num1 + 1)
                    setNum2( (num2) => num2 + 1)
                }, 1000)
                

    }, [num1, num2] );

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then( (response) => setPost(response.data));
    })
  return (
    <div>
        <p>Value of Num1: {num1}</p>
        <p>Value of Num2: {num2}</p>

        <p>Value of Post: {post.id} {post.title} {post.body}</p>

    </div>
  )
}

export default Counter