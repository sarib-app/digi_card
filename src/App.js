import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import WrokingVideo from './Components/WrokingVideo';
import Form from './Components/From';
import Shope from './Components/Shope';
import Cardinfo from './Components/Cardinfo';
import Profile from './Components/Profile';
import Updateprofile from './Components/Updateprofile';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className=''>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shope' element={<Shope />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Portfolio' element={<Portfolio />}></Route>
          <Route path='/Cardinfo' element={<Cardinfo />}></Route>
          <Route path='/WorkingVideo' element={<WrokingVideo />}></Route>
          <Route path='/Updateprofile' element={<Updateprofile/>}/>
        </Routes>
        <Footer />
      </Router>
      {/* <Demo /> */}
    </div>
  );
}

export default App;
