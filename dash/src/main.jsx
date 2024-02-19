import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import Placements from './pages/Placements'
import Processing from './pages/Processing'
import EA from './pages/EA'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import EmailRestAPI from './pages/FormSubmit'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element = {<Home />} />
    <Route path="placements" element = {<Placements />}/>
    <Route path="processing" element = {<Processing />}/>
    <Route path="eventATMs" element = {<EA />}/>
    <Route path="about" element = {<About />}/>
    <Route path="blog" element = {<Blog />}/>
    <Route path="contact" element = {<Contact />}/>
    <Route path="contactForm" element = {<EmailRestAPI />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
