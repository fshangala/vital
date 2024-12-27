import { Menubar } from 'primereact/menubar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
        
export default function App() {
  const navigate = useNavigate()
  return (
    <div>
      <Menubar start={(<img src="images/logo.png" alt="logo" className="w-4rem h-4rem"/>)} model={[
        {
          label:"Home",
          command: ()=>{
            navigate("/")
          }
        },
        {
          label:"Services",
          command: ()=>{
            navigate("/services")
          }
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