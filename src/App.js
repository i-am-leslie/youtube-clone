import {BrowserRouter,Routes,Route} from 'react-router-dom';
import{Box} from '@mui/material';
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import SearchFeed from './components/SearchFeed'
import VideoDetails from './components/VideoDetails'
import ChannelDetail from './components/ChannelDetail'


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App