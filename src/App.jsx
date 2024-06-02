import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"

function App() {

  const AppLayout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/projects",
          element: <Project/>
        }
      ]

    }
    
  ])

  return (
    <>
      <main className="bg-slate-300/20">
        <RouterProvider router={appRouter} />
      </main>
    </>
  )
}

export default App
