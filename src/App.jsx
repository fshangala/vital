import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
        
export default function App() {
  return (
    <div>
      <Header />
      <div className='p-4'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}