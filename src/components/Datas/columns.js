import { ColumnDef } from "@tanstack/react-table"

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <span>${row.getValue("amount")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
