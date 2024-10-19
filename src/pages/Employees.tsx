import { useEffect, useState } from "react";
import { DataTable } from "../components/data-table";
import { columns } from "../components/employees-columns";
import axios from "axios";
import SearchInput from "../components/search-input";
import ModalAdd from "../components/modalAdd";
import LineData from "../components/lineData";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees");
      setEmployees(response.data);
      setFilteredEmployees(response.data); // عرض كل البيانات في البداية
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // دالة الفلترة بناءً على الاسم
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // فلترة البيانات بناءً على النص المدخل في حقل البحث
    const filtered = employees.filter((employee: any) =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered); // تحديث البيانات المفلترة
  };
  const handleDelete = async (id: number) => {
    try {
      await axios
        .delete(`http://localhost:3000/employees/${id}`)
        .then((res) => {
          if (res.status === 200) {
            fetchEmployees();
          }
        });
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
  const columnsWithDelete = columns(handleDelete);
  return (
    <div className="bg-white mdl:me-16 mt-5  rounded-2xl py-5 px-2">
      <div className="flex gap-5 mb-8">
        <SearchInput
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ModalAdd />
      </div>
      <DataTable
        data={filteredEmployees}
        columns={columnsWithDelete}
        Component={LineData}
      />
    </div>
  );
}

export default Employees;
