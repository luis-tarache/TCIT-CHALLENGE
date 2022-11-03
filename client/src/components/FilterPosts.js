import React from 'react'
import {Box} from '@mui/material'
import {Container} from '@mui/material'
import {Toolbar} from '@mui/material'
import {Button} from '@mui/material'
import { TextField } from '@mui/material'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filterPosts} from '../features/posts/postSlice'

export default function FilterPosts() {

  const [name, setName] = useState('')  

  const postsState = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const handleChange = e => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    })
  }

  let disabled = true

  if (name) {
    disabled= false
  } else {disabled = true}
  

  const handleClick = () => {
    const filterByName = postsState.filter(post => post.name === name.name)
    console.log('FILTERBYNAME', filterByName)
    dispatch(filterPosts(filterByName))
  }


  return (
    <Box sx={{my: 5}}>
        <Container>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <TextField label= "Filtrar por Nombre" name='name' onChange={handleChange}/>

                <Button disabled= {disabled} sx={{p: 2}} variant='contained' color='primary' onClick={handleClick}>
                  Buscar
                </Button>
            </Toolbar>
        </Container>
    </Box>
  )
}
