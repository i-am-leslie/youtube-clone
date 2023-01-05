import {Stack} from '@mui/material'
import  {Link}  from 'react-router-dom'
import {logo} from '../assets/Constant'
import './Navbar.css'
import {BsYoutube} from 'react-icons/bs'

const Navbar = () => {
  <Stack direction="row" alignItems="center" p={2} sx={{position:'sticky',background:'black',top:0,justifyContent:'space-between'}}>
    <link  className='links'>
      <img src={logo} alt="logo" height={45}/>
      <h4 className='drag_quotes'>Click and drag quotes to the right for more <a href="#portfolio"><BsYoutube/></a></h4>
    </link>


  </Stack>
}

export default Navbar