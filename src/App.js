import Login from "./Components/login";
import Register from "./Components/register";
import Header from "./Components/header";
import Home from "./Components/home";
import About from "./Pages/About";

import { AuthProvider } from "./Components/authContext";
import { useRoutes } from "react-router-dom";
import Products from "./Pages/Products";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      
        <Header />
        <div className="w-full h-screen flex flex-col">
          {routesElement}
        </div>
      
    </AuthProvider>
  );
}

export default App;
