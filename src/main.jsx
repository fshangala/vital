import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "primereact/resources/themes/arya-orange/theme.css"
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

const router = createHashRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"services",
        element: <ServicesPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
