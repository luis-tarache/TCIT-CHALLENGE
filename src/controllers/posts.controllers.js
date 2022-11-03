const pool = require('../db')

const getAllPosts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts')
        console.log('hola')
        res.status(200).json(result.rows)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getPost = async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id])
        if (result.rows.length > 0) return res.status(200).json(result.rows[0])
    
        res.status(404).json({
            message: 'post not found'
        })   
    } catch (error) {
        res.status(500).json(error.message)
    }   
}

const createPost = async (req, res) => {
    const { name, description, id } = req.body
    
    try {
        const result = await pool.query("INSERT INTO posts (name, description, id) VALUES ($1, $2, $3) RETURNING *", [name, description, id])
        res.json(result.rows[0])
    } catch (err) {
        res.json({error: err.message})
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query(
            'DELETE FROM posts WHERE id = $1 RETURNING *', 
            [id]
            )
        if (result.rows.length) return res.status(200).json(result.rows[0])
    
        res.status(404).json({
            message: 'post did not exist, nothing was deleted'
        })   
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    
    try {
        const result = await pool.query(
            'UPDATE posts SET name = $1, description = $2 WHERE id = $3 RETURNING *', 
            [name, description, id]
            )
            if (result.rows.length) return res.json(result.rows[0])

            res.status(404).json({
                message: 'post does not exist, nothing was updated'
            })
    } catch (error) {
        res.json({error: err.message})
    }
}

module.exports = {
    getAllPosts,
    getPost, 
    createPost,
    deletePost,
    updatePost
}