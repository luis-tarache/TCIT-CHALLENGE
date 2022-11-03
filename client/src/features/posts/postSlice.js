import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {

    const res = await fetch('http://localhost:4000/posts')
    const data = await res.json()
    console.log('data', data)
    return data
})

const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload.data)
        },
        
        deletePost: (state, action) => {
            console.log(action.payload)
            const postIndex = state.findIndex(post => post.id === action.payload)
            if (postIndex >= 0) {
                state.splice(postIndex, 1)
            } 
        },

        filterPosts: (state, action) => {
            console.log('FILTERPOTS-PAYLOAD', action.payload)
            state.splice(0)
            action.payload.map(filterpost => state.push(filterpost))
        }

    },
    extraReducers: {
        [getPosts.fulfilled]: (state, action) => {
            console.log('payload', action.payload)
            action.payload.forEach(element => {
                state.push(element)
            });
            //state = action.payload
            console.log('state', state)
        }
    }
})


export const {addPost, deletePost, filterPosts} = postSlice.actions
export default postSlice.reducer