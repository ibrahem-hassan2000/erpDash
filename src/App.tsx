import { MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import MenuNav from "./components/menuNav";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";
import HeaderPage from "./components/headerPage";
import EmployeeDetails from "./pages/EmployeeDetails";
const Layout = () => (
  <div className="flex  justify-start">
    <MenuNav />
    <div className="flex-1 w-full bg-[#FAFBFC] max-w-[calc(100%-56px)] mdl:max-w-[calc(100%-246px)]">
      <HeaderPage />
      <div className="ps-1 mdl:ps-6 ">
        <Outlet />
      </div>
    </div>
  </div>
);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "teams",
          element: <Teams />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "employees/:id",
          element: <EmployeeDetails />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
