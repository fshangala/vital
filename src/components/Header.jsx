import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export default function Header() {
  const navigate = useNavigate();

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
        },
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
    ]} end={<Button icon="pi pi-whatsapp" label="Get in Touch" />} />
    </div>
  )
}