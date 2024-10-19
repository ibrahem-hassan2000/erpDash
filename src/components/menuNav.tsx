import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../assets/icons/Dashboard";
import SettingsIcons from "../assets/icons/Settings";
import TeamsIcons from "../assets/icons/teams";
import EmployeesIcon from "../assets/icons/employees";
import Logo from "../assets/icons/logo";

function MenuNav() {
  const location = useLocation();
  console.log(location);

  const LinksNav = useMemo(
    () => [
      {
        id: 1,
        name: "Dashboard",
        url: "/",
        active: location.pathname === "/",
        icon: (
          <DashboardIcon
            className=" w-5 mdl:w-6 h-auto duration-200 "
            fill={`${location.pathname === "/" ? "#026980" : "white"}`}
          />
        ),
      },
      {
        id: 3,
        name: "Teams",
        url: "/teams",
        active: location.pathname === "/teams",
        icon: (
          <TeamsIcons
            className=" w-5 mdl:w-6 h-auto duration-200 "
            fill={`${location.pathname === "/teams" ? "#026980" : "white"}`}
          />
        ),
      },
      {
        id: 2,
        name: "Employees",
        url: "/employees",
        active: location.pathname === "/employees",
        icon: (
          <EmployeesIcon
            className=" w-5 mdl:w-6 h-auto duration-200 "
            fill={`${location.pathname === "/employees" ? "#026980" : "white"}`}
          />
        ),
      },

      {
        id: 4,
        name: "Settings",
        url: "/settings",
        active: location.pathname === "/settings",
        icon: (
          <SettingsIcons
            className=" w-5 mdl:w-6 h-auto duration-200 "
            fill={`${location.pathname === "/settings" ? "#026980" : "white"}`}
          />
        ),
      },
    ],
    [location.pathname]
  );

  return (
    <div className="bg-main h-auto min-w-10 w-14 mdl:w-[246px] rounded-lg mdl:rounded-none">
      <div className="bg-main pt-2 mdl:pt-16 sticky top-0 rounded-e-lg mdl:rounded-none h-screen min-w-10 w-14 mdl:w-[246px] gap-11 p-1 mdl:p-2 flex flex-col justify-start  ">
        <div className="flex items-center justify-center">
          <Logo className="max-w-[80%] mx-auto h-auto" />
        </div>
        <div className=" flex items-center justify-center flex-col gap-4 mdl:gap-5 w-full">
          {LinksNav.map((link) => {
            return (
              <div
                key={link.id}
                className={` duration-200 rounded-xl w-full hover:bg-white/10  ${
                  link.active
                    ? "bg-white hover:!bg-white font-medium text-main"
                    : " font-normal bg-transparent text-white"
                }`}
              >
                <Link
                  to={link.url}
                  className="flex px-2 mdl:px-0 mdl:ps-10 h-11 w-full items-center justify-center gap-5"
                >
                  {link.icon}
                  <p className=" flex-1 hidden mdl:block">{link.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuNav;
