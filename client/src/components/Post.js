import React from 'react'
import {TableBody} from '@mui/material'
import {TableRow} from '@mui/material'
import {TableCell} from '@mui/material'
import {Button} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import {deletePost, renderPosts} from '../features/posts/postSlice'
//import {useEffect, useState } from 'react'


export default function Post() {

    const postsState = useSelector(state => state.posts)
    const dispatch = useDispatch()
    //const [posts, setPosts] = useState({})

    const handleDelete = (id) => {
        dispatch(deletePost(id))
    }

    /*const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:4000/posts/${id}`, {
            method: "DELETE"
        })

        const data = await res.json()
        dispatch(deletePost(data.id))
    }*/

    /*const loadPosts = async () => {
        const res = await fetch('http://localhost:4000/posts')
        const data = await res.json()
        setPosts(data)
    }

    useEffect(() => {
        loadPosts()
        dispatch(renderPosts(posts))
    })*/

  return (
    <TableBody>
        {postsState.map(post => (
        <TableRow key={post.id}>
            <TableCell>{post.name}</TableCell>
            <TableCell>{post.description}</TableCell>
            <TableCell>
                <Button variant='contained' color='warning' onClick={() => handleDelete(post.id)}>Eliminar</Button>
            </TableCell>
        </TableRow>
        ))}
    </TableBody>
  )
    
  
}
