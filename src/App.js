import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Career from "./Pages/Career";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Root from "./Pages/root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "courses",
          children: [
            {
              path: ":id",
              element: <Courses />,
            },
            {
              path: ":id/:sid",
              element: <Courses />,
            },
          ],
        },

        {
          path: "career",
          element: <Career />,
        },
        {
          path: "aboutus",
          element: <Aboutus />,
        },
        {
          path: "contactus",
          element: <Contactus />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
