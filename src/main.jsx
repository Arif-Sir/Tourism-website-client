import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Resister from './Components/Pages/Resister';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import ErrorPage from './Components/ErrorPage';
import Root from './Components/Root';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyList from './Components/Pages/MyList';
import AddSpots from './Components/Pages/AddSpots';
import AllSpots from './Components/Pages/AllSpots';
import ViewDetails from './Components/Pages/ViewDetails';
import Update from './Components/Pages/Update';
import About from './Components/Pages/About';
import TouristSpotsCard from './Components/Pages/TouristSpotsCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/spots')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/spots/:country",
        element: <TouristSpotsCard></TouristSpotsCard>,
      },
      
      {
        path: "/allspots",
        element: <AllSpots></AllSpots>,
        loader: () => fetch('http://localhost:3000/spots')
      },
      {
        path: "/viewdsetail/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
        loader: ({params})=>fetch(`http://localhost:3000/spots/${params.id}`)
 
      },
      {
        path: "/mylist",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
      {
        path: "/addsport",
        element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:3000/spots/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  
);

