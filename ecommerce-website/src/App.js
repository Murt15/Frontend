import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Store from "./pages/Store";

const router = createBrowserRouter([
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/home", element: <Home /> },
  { path: "/", element: <Store /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
