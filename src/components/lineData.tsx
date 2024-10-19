import Card from "./card";
import user from "../assets/images/user.png";
import TrueIcon from "../assets/icons/true";
import FalseIcon from "../assets/icons/false";
import { Link } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  startDate: string;
  active: boolean;
  image: File | null;
}

interface LineDataProps {
  employee: Employee;
}
function LineData({ employee }: LineDataProps) {
  console.log(employee);

  return (
    <Link
      to={`/employees/${employee.id}`}
      className=" border-gray/20 duration-300 hover:shadow-md hover:border-gray/50 shadow-sm border rounded-lg"
    >
      <Card title="">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[80px] mdl:min-w-[110px] text-xs mdl:text-sm text-gray">
              employee
            </h3>
            <div className="flex items-center gap-2">
              <img
                src={user}
                alt={employee?.name}
                className="w-8 h-8 rounded-full object-cover object-top"
              />
              <h4 className="text-xs mdl:text-sm font-medium">
                {employee?.name}
              </h4>
            </div>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[80px] mdl:min-w-[110px] text-xs mdl:text-sm text-gray">
              Role
            </h3>
            <h4 className="text-xs mdl:text-sm font-medium">
              {employee?.role}
            </h4>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[80px] mdl:min-w-[110px] text-xs mdl:text-sm text-gray">
              E-mail
            </h3>
            <h4 className="text-xs mdl:text-sm font-medium">
              {employee?.email}
            </h4>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[80px] mdl:min-w-[110px] text-xs mdl:text-sm text-gray">
              Phone
            </h3>
            <h4 className="text-xs mdl:text-sm font-medium">
              {employee?.phone}
            </h4>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[80px] mdl:min-w-[110px] text-xs mdl:text-sm text-gray">
              Start Date
            </h3>
            <h4 className="text-xs mdl:text-sm font-medium">
              {employee?.startDate}
            </h4>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[80px] mdl:min-w-[110px] text-xs mdl:text-sm text-gray">
              Active
            </h3>
            <h4 className="text-xs mdl:text-sm font-medium">
              {employee?.active ? <TrueIcon /> : <FalseIcon />}
            </h4>
          </li>
        </ul>
      </Card>
    </Link>
  );
}

export default LineData;
