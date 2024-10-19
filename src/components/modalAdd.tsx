import { Modal, ScrollArea, Stepper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import StepperIcon from "../assets/icons/Stepper";
import StepperActive from "../assets/icons/StepperActive";
import Button from "./button";
import DropImg from "./DropImg";
import StepOne from "./stepOne";
import StepThree from "./stepThree";
import axios from "axios";
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

function ModalAdd() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const [dataEmployee, setDataEmployee] = useState<Employee>({
    id: Date.now(),
    name: "",
    startDate: new Date(),
    role: "",
    email: "",
    phone: "",
    active: false,
    image: null,
  });
  const handelPostData = () => {
    axios
      .post("http://localhost:3000/employees", dataEmployee)
      .then((res) => {
        console.log(res);

        setDataEmployee({
          id: Date.now(),
          name: "",
          startDate: new Date(),
          role: "",
          email: "",
          phone: "",
          active: false,
          image: null,
        });
        setActive(0);
        close();
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  const validateStepOne = () => {
    return (
      dataEmployee.name &&
      dataEmployee.startDate &&
      dataEmployee.role &&
      dataEmployee.email &&
      dataEmployee.phone
    );
  };
  const validateImage = () => {
    return dataEmployee.image !== null;
  };
  const handleNextStep = () => {
    if (active === 0 && !validateStepOne()) return;
    if (active === 1 && !validateImage()) return;
    if (active === 2) handelPostData();
    setActive((current) => (current < 2 ? current + 1 : current));
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  console.log(dataEmployee);

  return (
    <div>
      <Modal
        size="auto"
        scrollAreaComponent={ScrollArea.Autosize}
        classNames={{
          title: "text-base font-medium",
          header: " h-16 min-h-0 border-b border-[#EDEDED] ",
          body: "min-h-[300px] overflow-y-auto p-0 max-h-[90dvh]  max-w-full  w-full ",
          content:
            "rounded-3xl border-2 overflow-hidden w-full max-w-[630px]  shadow-md   border-[#F8F9FA]",
          overlay: "bg-black/20",
        }}
        centered
        opened={opened}
        onClose={close}
        title="Add New employees"
      >
        <div className="  justify-center items-center px-2 mdl:px-8 max-w-full w-full  mt-4 mb-6">
          <Stepper
            styles={{
              separator: {
                borderStyle: "dashed",
                borderWidth: "1px",
                borderColor: "#CACACA",
                background: "transparent",
                marginBottom: "20px",
              },
            }}
            active={active}
          >
            <Stepper.Step
              classNames={{
                stepIcon: "w-6 h-6 bg-transparent min-w-6 min-h-6 border-none",
                step: "flex flex-col gap-1 justify-center items-center",
                stepLabel: " text-[10px] md:text-xs text-center",
                stepWrapper: "w-6 h-6 border-none",
                stepBody: "m-0",
              }}
              icon={<StepperIcon />}
              completedIcon={<StepperActive />}
              label="Personal Data"
            >
              <StepOne
                dataEmployee={dataEmployee}
                setDataEmployee={setDataEmployee}
              />
            </Stepper.Step>

            <Stepper.Step
              classNames={{
                stepIcon: "w-6 h-6 bg-transparent min-w-6 min-h-6 border-none",
                step: "flex flex-col gap-1 justify-center items-center",
                stepLabel: " text-[10px] md:text-xs text-center",
                stepWrapper: "w-[26px] h-[26px]",
                stepBody: "m-0",
              }}
              icon={<StepperIcon />}
              completedIcon={<StepperActive />}
              label="Image"
            >
              <DropImg
                setDataEmployee={setDataEmployee}
                dataEmployee={dataEmployee}
              />
            </Stepper.Step>

            <Stepper.Step
              classNames={{
                stepIcon: "w-6 h-6 bg-transparent min-w-6 min-h-6 border-none",
                step: "flex flex-col gap-1 justify-center items-center",
                stepLabel: " text-[10px] md:text-xs text-center",
                stepWrapper: "w-[26px] h-[26px]",
                stepBody: "m-0",
              }}
              icon={<StepperIcon />}
              completedIcon={<StepperActive />}
              label="Preview"
            >
              <StepThree
                setDataEmployee={setDataEmployee}
                dataEmployee={dataEmployee}
              />
            </Stepper.Step>
          </Stepper>
          <div className="flex items-center justify-between gap-4 mt-6">
            {active > 0 && (
              <Button
                onClick={prevStep}
                className="!bg-transparent duration-200 min-w-[136px] hover:shadow-md !text-gray !border-gray border"
              >
                Back
              </Button>
            )}
            <Button
              onClick={handleNextStep}
              className="min-w-[136px] self-end ms-auto duration-200 hover:shadow-md"
            >
              {active === 2 ? "Apply" : "Next"}
            </Button>
          </div>
        </div>
      </Modal>
      <Button onClick={open}>
        <span className="font-bold  text-xl">+</span>
        New employees
      </Button>
    </div>
  );
}

export default ModalAdd;
