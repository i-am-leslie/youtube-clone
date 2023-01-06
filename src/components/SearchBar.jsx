import { IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton as Button } from '@mui/material';
import {Paper} from '@mui/material';
import { SearchIcon } from '@mui/icons-material'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <Paper className='Searchbar'component="form"
    onSubmit={() => {}}>
        <input className='search' placeholder='Search'
        onChange={()=> {}}
        />
       
        
    </Paper>
  )
}

export default SearchBar