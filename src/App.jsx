import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Charts from "./charts";
import MainPage from "./MainPage";
import Lists from "./lists";
import Forms from "./forms";
import { Horizontal } from "./wizartsHortizonal";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  {
    path: "/charts",
    element: <Charts />,
  },
  {
    path: "/lists",
    element: <Lists />,
  },
  {
    path: "/forms",
    element: <Forms />,
  },
  {
    path: "/wizard",
    element: <Horizontal />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
