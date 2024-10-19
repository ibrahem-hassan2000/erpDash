import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowRight from "../assets/icons/ArrowRight";
import Card from "../components/card";
import user from "../assets/images/user.png";
import { Switch } from "@mantine/core";
import ModalEdit from "../components/modalEdit";

interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  startDate: Date;
  active: boolean;
  image: File | null;
}

function EmployeeDetails() {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
console.log(employee);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/employees/${id}`
        );
        setEmployee(response.data);
        setLoading(false);
      } catch {
        setError("Error fetching employee data");
        setLoading(false);
      }
    };

    if (id) {
      fetchEmployee(); // استدعاء الوظيفة إذا كان id موجود
    }
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="">
      <div className=" flex items-center justify-between my-5 pe-1 mdl:pe-11">
        <div className="flex items-center gap-2 mdl:gap-4">
          <Link
            to={"/employees"}
            className=" text-base mdl:text-[26px] font-medium "
          >
            employees
          </Link>
          <span>
            <ArrowRight className="h-2 w-auto" />
          </span>
          <h3 className="text-sm mdl:text-xl text-gray font-medium">
            {employee?.name}
          </h3>
        </div>
        {employee ? <ModalEdit id={id} dataEmployee={employee} setDataEmployee={setEmployee}/> : null}
      </div>
      <div className="pe-1 mdl:pe-9 flex flex-col gap-3 mdl:gap-5">
        <Card title="Summary">
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
          </ul>
        </Card>
        <div className="flex flex-col mdl:flex-row gap-3 ">
          <Card title="Date">
          dfcd
          </Card>
          <Card title="Active">
            <div className="flex items-center gap-8 mt-7 mb-4">
              <h3 className="text-xs mdl:text-base font-medium text-gray">
                status
              </h3>
              <Switch checked={employee?.active} color="green" size="md" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
