import {Stack} from '@mui/material'
import { Link } from "react-router-dom";
import {logo} from "../assets/Constant"
import './Navbar.css'
import {BsYoutube} from 'react-icons/bs'
import SearchBar from './SearchBar';
const Navbar = () => {
  return(
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" className='links'>
      <a className='youtubeicon'><BsYoutube size={24}/><p className='Yotube'>&nbsp;Youtube</p></a>
    </Link>
    <SearchBar/>

  </Stack>
   
  )
}

export default Navbar