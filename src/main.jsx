import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Components/About/About.jsx'
import Root from './Components/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Users from './Components/Users.jsx'
import UserDetails from './Components/UserDetails.jsx'
import Posts from './Components/Posts.jsx'
import PostDetails from './Components/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path :"/",
    Component :Root,
  children:[
    {index:true,Component:Home},
    {path:'about',Component:About},
    {path:'mobiles',Component:Mobiles},
      {
    path:'users',
    loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
    Component:Users
  },
  {
    path:'users/:x',
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.x}`),
    Component:UserDetails
  },

  {
    path:'posts',
    loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
    Component:Posts
  },
  {
    path:'posts/:x',
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.x}`),
    Component:PostDetails,
  }
  ]
  },

   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
