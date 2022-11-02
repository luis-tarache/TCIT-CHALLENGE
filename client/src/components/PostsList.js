import React from 'react'
import {Table} from '@mui/material'
import {TableHead} from '@mui/material'
//import {TableBody} from '@mui/material'
import {TableCell} from '@mui/material'
import {TableRow} from '@mui/material'
import Post from './Post'


export default function PostsList() {
  return (
    <Table>
      <TableHead>
          <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Accion</TableCell>
          </TableRow>
      </TableHead>

      <Post></Post>
    </Table>
  )
}
