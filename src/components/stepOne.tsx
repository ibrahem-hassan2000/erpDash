import { Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { format } from "date-fns";
interface Employee {
    id: number;
    name: string;
    role: string;
    email: string;
    phone: string;
    startDate: Date;
    active: boolean;
    image: File|null;
  }
interface StepOnePropd{
    dataEmployee:Employee,
    setDataEmployee: React.Dispatch<any>
}

function StepOne({dataEmployee,setDataEmployee}:StepOnePropd) {
  function handleChangeDate(field: string, value: Date | null) {
    if (value) {
      const formattedDate = format(value, 'dd/MM/yyyy'); // format the date
      setDataEmployee((prev:any) => ({
        ...prev,
        [field]: formattedDate, // store the formatted date
      }));
    }
  }

  const handleChange = (field: string, value: any) => {
    setDataEmployee((prevData:any) => ({
      ...prevData,
      [field]: value,
    }));
  };
console.log(dataEmployee);

  return (
    <form action="" className="flex flex-col gap-3 w-full">
      <TextInput
        label="Name"
        placeholder="Enter Employee Name"
        required
        value={dataEmployee.name}
        onChange={(e) => handleChange("name", e.target.value)}
        classNames={{
          input:
            "h-10 rounded-[50px] border-[#E8E8E8] placeholder:text-[#84818180] placeholder:text-xs focus:placeholder:text-[#2A2A2A]",
          label: "text-xs ps-1",
          required: "text-main",
        }}
      />

      <DatePickerInput
        label="Start Date"
        size="xs"
        valueFormat="DD/MM/YYYY"
        required
        placeholder="Start Date"
        value={dataEmployee.startDate ? new Date(dataEmployee.startDate) : null}
        onChange={(value) => handleChangeDate("startDate", value)}
        classNames={{
          input:
            "h-10 rounded-[50px] border-[#E8E8E8] placeholder:text-[#84818180] placeholder:text-xs focus:placeholder:text-[#2A2A2A]",
          label: "text-xs ps-1",
          required: "text-main",
        }}
      />

      <Select
        required
        label="Role"
        placeholder="select role"
        data={["IT", "Software", "Data Entry"]}
        value={dataEmployee.role}
        onChange={(value) => handleChange("role", value)}
        classNames={{
          input:
            "h-10 rounded-[50px] border-[#E8E8E8] placeholder:text-[#84818180] placeholder:text-xs focus:placeholder:text-[#2A2A2A]",
          label: "text-xs ps-1",
          required: "text-main",
        }}
      />

      <TextInput
        label="E-mail"
        value={dataEmployee.email}
        onChange={(e) => handleChange("email", e.target.value)}
        classNames={{
          input:
            "h-10 rounded-[50px] border-[#E8E8E8] placeholder:text-[#84818180] placeholder:text-xs focus:placeholder:text-[#2A2A2A]",
          label: "text-xs ps-1",
          required: "text-main",
        }}
        placeholder="Your email"
        required
      />

      <TextInput
        type="number"
        value={dataEmployee.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        classNames={{
          input:
            "h-10 rounded-[50px] border-[#E8E8E8] placeholder:text-[#84818180] placeholder:text-xs focus:placeholder:text-[#2A2A2A]",
          label: "text-xs ps-1",
          required: "text-main",
        }}
        label="Phone*"
        placeholder="Your phone"
        required
      />
    </form>
  );
}

export default StepOne;
