import { ActionIcon } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import user from "../assets/images/user.png";
import { Link } from "react-router-dom";
import DeleteIcon from "../assets/icons/delete";
import TrueIcon from "../assets/icons/true";
import FalseIcon from "../assets/icons/false";

export type RequestsTableData = {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  startDate: string;
  active: boolean;
  image: File | null;
};

export const columns = (
  handleDelete: (id: number) => void
): ColumnDef<RequestsTableData>[] => [
  {
    accessorKey: "name",
    header: "Employee ",
    cell: ({ getValue, row }) => {
      const name = getValue<string>();
      const id = row.original.id;
      return (
        <Link to={`/employees/${id}`} className="flex items-center gap-1">
          <img
            src={user}
            alt={name}
            className=" w-7 h-7 rounded-full  object-contain "
          />
          <h2 className="text-xs font-normal">{name}</h2>
        </Link>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },

  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "startDate",
    header: "Start Date ",
  },
  {
    accessorKey: "active",
    header: "Active",
    cell: ({ getValue }) => {
      const active = getValue<number>();
      return (
        <>
          <p>{active ? <TrueIcon /> : <FalseIcon />}</p>
        </>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-3 w-fit">
          <ActionIcon
            variant="transparent"
            onClick={() => {
              handleDelete(id);
            }}
          >
            <DeleteIcon />
          </ActionIcon>
        </div>
      );
    },
  },
];
