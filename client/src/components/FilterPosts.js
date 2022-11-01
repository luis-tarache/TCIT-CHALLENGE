import React from 'react'
import {Box} from '@mui/material'
import {Container} from '@mui/material'
import {Toolbar} from '@mui/material'
//import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import { TextField } from '@mui/material'

export default function FilterPosts() {
  return (
    <Box sx={{my: 5}}>
        <Container>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <TextField label= "Filtrar por Nombre"/>

                <Button sx={{p: 2}}>
                  Buscar
                </Button>
            </Toolbar>
        </Container>
    </Box>
  )
}
