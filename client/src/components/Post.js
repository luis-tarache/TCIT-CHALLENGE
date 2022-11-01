import React from 'react'
import {TableBody} from '@mui/material'
import {TableRow} from '@mui/material'
import {TableCell} from '@mui/material'
import {Button} from '@mui/material'

export default function Post() {
  return (
    <TableBody>
        <TableRow>
            <TableCell>PEDRO JAVIER</TableCell>
            <TableCell>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</TableCell>
            <TableCell>
                <Button>Eliminar</Button>
            </TableCell>
        </TableRow>
    </TableBody>
  )
}
