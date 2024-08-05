import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";
function App() {
  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
      ]
    },
  ]); 

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
