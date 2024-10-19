import Card from "./card";
import { Switch } from "@mantine/core";


interface StepThreeProps {
  setDataEmployee: React.Dispatch<any>;
  dataEmployee: any;
}
function StepThree({ setDataEmployee, dataEmployee }: StepThreeProps) {
 
  const handelActive = (e: boolean) => {
    setDataEmployee({ ...dataEmployee, active: e });
  };
  console.log(dataEmployee);
  
  return (
    <div className="pe-1 mdl:pe-9 flex flex-col gap-3 mdl:gap-5">
      <Card title="Summary">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[60px] mdl:min-w-[66px] text-xs  text-gray">
              employee
            </h3>
            <div className="flex items-center gap-2">
              <img
               src={URL.createObjectURL(dataEmployee?.image)}
                alt={dataEmployee?.name}
                className="w-8 h-8 rounded-full object-cover object-top"
              />
              <h4 className="text-xs  font-medium">{dataEmployee?.name}</h4>
            </div>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[60px] mdl:min-w-[66px] text-xs  text-gray">
              Role
            </h3>
            <h4 className="text-xs  font-medium">{dataEmployee?.role}</h4>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[60px] mdl:min-w-[66px] text-xs  text-gray">
              E-mail
            </h3>
            <h4 className="text-xs  font-medium">{dataEmployee?.email}</h4>
          </li>
          <li className="flex items-center gap-8 mdl:gap-[170px]">
            <h3 className=" min-w-[60px] mdl:min-w-[66px] text-xs  text-gray">
              Phone
            </h3>
            <h4 className="text-xs  font-medium">{dataEmployee?.phone}</h4>
          </li>
        </ul>
      </Card>
      <div className="flex flex-col mdl:flex-row gap-3 ">
        <Card title="Date">
          <div className="flex items-center gap-8 mt-7 mb-4">
            <h3 className="text-xs mdl:text-base font-medium text-gray">
              start date
            </h3>
            <h4 className="text-xs mdl:text-base font-medium">
              {dataEmployee?.startDate}
            </h4>
          </div>
        </Card>
        <Card title="Active">
          <div className="flex items-center gap-8 mt-7 mb-4">
            <h3 className="text-xs mdl:text-base font-medium text-gray">
              status
            </h3>
            <Switch
              onChange={(e) => {
               
                handelActive(e.target.checked);
              }}
              color="green"
              size="md"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default StepThree;
