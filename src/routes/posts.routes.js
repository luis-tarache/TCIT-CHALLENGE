const { Router } = require('express')
const pool = require('../db')
const { getAllPosts, getPost, createPost, deletePost, updatePost } = require('../controllers/posts.controllers')

const router = Router()

router.get('/posts', getAllPosts)

router.get('/posts/:id', getPost)

router.post('/posts', createPost)

router.delete('/posts/:id', deletePost)

router.put('/posts/:id', updatePost)

module.exports = router