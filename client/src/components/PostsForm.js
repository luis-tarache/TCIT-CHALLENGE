import React from 'react'
import {useState} from 'react'
import {Box} from '@mui/material'
import {Container} from '@mui/material'
import {Toolbar} from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {useDispatch} from 'react-redux'
import {addPost} from '../features/posts/postSlice'
import {v4 as uuid} from 'uuid'

export default function PostsForm() {

  const dispatch = useDispatch()

  const [post, setPost] = useState({
    name: '',
    description: '',
    id: ''
  })

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const fetchPost = async (postData) => {
    const res = await fetch("http://localhost:4000/posts", {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {"Content-Type": "application/json"}
            })

            const data = await res.json()

    dispatch(addPost({
      data      
    }))
  }

  const submitForm = () => {

      let postData = {
        ...post,
        id: uuid()
      }

      fetchPost(postData)
  }

  return (
    <Box sx={{my: 10}}>
        <Container>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <TextField label= "Nombre" name='name' onChange={handleChange}/>

                <TextField sx={{flexGrow: 1, mx: 2}} onChange={handleChange} label= "Descripcion" name='description'/>

                <Button sx={{p:2}} variant='contained' color='success' onClick={submitForm}>
                  Crear
                </Button>
            </Toolbar>
        </Container>
    </Box>
  )
}
