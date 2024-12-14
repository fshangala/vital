import { Menubar } from 'primereact/menubar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
        
export default function App() {
  return (
    <div>
      <Menubar start={(<img src="/images/logo.png" alt="logo" className="w-4rem h-4rem"/>)} model={[
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