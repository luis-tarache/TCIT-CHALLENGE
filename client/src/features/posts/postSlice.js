import {createSlice} from '@reduxjs/toolkit'

const postSlice = createSlice({
    name: 'posts',
    initialState:[],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        },
        
        deletePost: (state, action) => {
            const postIndex = state.findIndex(post => post.id === action.payload)
            if (postIndex >= 0) {
                state.splice(postIndex, 1)
            } 
        },

        filterPosts: (state, action) => {
            console.log('FILTERPOTS-PAYLOAD', action.payload)
            state.splice(0)
            action.payload.map(filterpost => state.push(filterpost))
        },

        renderPosts: (state, action) => {
            console.log('RENDERPOSTS', action.payload)
            state.splice(0)
            state = [...state, action.payload]
        }

    }
})


export const {addPost, deletePost, filterPosts, renderPosts} = postSlice.actions
export default postSlice.reducer