import { Outlet, createBrowserRouter } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Authentication from "./pages/Authentication";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import path from "path/posix";

const App = () => {
  return (
  <>
    <div className="w-screen h-screen bg-red-200">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ],
  },
  {
    element: <Authentication />,
    children: [
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/signin",
        element: <SignupForm />,
      },
    ],
  },
]);

export default router;
