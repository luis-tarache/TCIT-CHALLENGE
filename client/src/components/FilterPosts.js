import React from 'react'
import {Box} from '@mui/material'
import {Container} from '@mui/material'
import {Toolbar} from '@mui/material'
//import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import { TextField } from '@mui/material'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filterPosts, renderPosts} from '../features/posts/postSlice'

export default function FilterPosts() {

  const [name, setName] = useState('')  
  const [posts, setPosts] = useState([])

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

  /*useEffect(() => {
    document.addEventListener('keyup', handleChange, true)
  })*/
  

  const handleClick = () => {
    postsState.map(post => setPosts(post))
    console.log('SETPOSTS', posts)
    dispatch(renderPosts(posts))
    console.log('nameParam', name)
    console.log('HANDLECLICK', postsState)
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
