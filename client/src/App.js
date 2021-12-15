// import HomepageTemplate from './pages/HomepageTemplate';
// import AdminTemplate from './pages/AdminTemplate';
// import DriverTemplate from './pages/DriverTemplate';
import './App.css';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AdminLogIn from './pages/admin/AdminLogIn';
import CreateDriver from './pages/admin/CreateDriver';
import DriverLogin from './pages/driver/DriverLogin';
import Homepage from './components/Homepage';
import NavTemplate from './components/navbar/NavTemplate';

function App() {
  return (
    <div className="App">

      <NavTemplate />
      <Routes>
        <Route path='/admin/login' element={<AdminLogIn />}/>
        <Route path='/admin/driver/create' element={<CreateDriver />}/>
        
        <Route path='/driver/login' element={<DriverLogin />}/>
        
        <Route path='/' element={<Homepage />}/>
      </Routes>
      <Footer />
      {/* 
      <HomepageTemplate />
      <AdminTemplate />
      <DriverTemplate /> */}
    </div>
  );
}

export default App;
