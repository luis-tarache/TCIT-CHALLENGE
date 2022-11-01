import React from 'react'
import {Box} from '@mui/material'
import {Container} from '@mui/material'
import {Toolbar} from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'

export default function PostsForm() {
  return (
    <Box sx={{my: 10}}>
        <Container>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <TextField label= "Nombre"/>

                <TextField sx={{flexGrow: 1, mx: 2}} label= "Descripcion"/>

                <Button sx={{p:2}}>
                  Crear
                </Button>
            </Toolbar>
        </Container>
    </Box>
  )
}
