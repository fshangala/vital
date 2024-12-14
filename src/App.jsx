import { Menubar } from 'primereact/menubar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
        
export default function App() {
  return (
    <div>
      <Menubar model={[
        {
          label:"Home",
        },
        {
          label:"Services",
        },
        {
          label:"Portfolio",
        },
        {
          label:"About Us"
        },
        {
          label:"Contact Us"
        }
      ]} />
      <div className='p-4'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}