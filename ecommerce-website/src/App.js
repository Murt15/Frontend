import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";

const router = createBrowserRouter([
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/home", element: <Home /> },
  { path: "/", element: <Store /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/product/:productId", element: <Products /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
