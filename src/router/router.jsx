import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../Pages/homePage/HomePage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: (
             <HomePage/>
          ),
        } 
      ],
    },
  ]);
  