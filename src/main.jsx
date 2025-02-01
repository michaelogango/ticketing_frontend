import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MyList from './pages/MyList.jsx'
import Contact from './pages/Contact.jsx'
import PageEvents from './pages/PageEvents.jsx'
import './index.css'
import App from './pages/App.jsx'
import Navigation from './components/Nav'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route index element ={<App/>}/>
    <Route path ="/home" element= {<App/>}/>
    <Route path ="/events" element= {<PageEvents/>}/>
    <Route path ="/tickets" element= {<MyList/>}/> 
    <Route path ="/contact" element= {<Contact/>}/>


   </Routes>
   
   </BrowserRouter> 
    {/* <Navigation /> */}
    
  </StrictMode>,
)
