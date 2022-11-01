import React from 'react'
import {Container} from '@mui/material'
import FilterPosts from './components/FilterPosts'
import PostsForm from './components/PostsForm'
import PostsList from './components/PostsList'

export default function App() {
  return (
    <Container>
        <FilterPosts/>
        <PostsList/>
        <PostsForm/>
    </Container>
  )
}


