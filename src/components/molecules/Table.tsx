import { useTable } from "react-table";

export type TableProps = {
  className?: string;
  columns: any[];
  data: any[];
  getRowProps?: (cell: any) => any;
  getCellProps?: (cell: any) => any;
  noDataMessage?: string;
};

export const Table = ({
  className = "",
  columns,
  data,
  getCellProps,
  getRowProps,
  noDataMessage,
}: TableProps) => {
  const { getTableProps, getTableBodyProps, flatHeaders, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className={`border ${className}`}>
      <thead>
        <tr>
          {flatHeaders
            .filter((header) => header.columns === undefined)
            .map((header) => (
              // eslint-disable-next-line react/jsx-key
              <th className="border-b p-4" {...header.getHeaderProps()}>
                {header.render("Header")}
              </th>
            ))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {!data.length ? (
          <tr>
            <td className="p-4" colSpan={flatHeaders.length}>
              {noDataMessage ?? "None"}
            </td>
          </tr>
        ) : (
          rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps(getRowProps && getRowProps(row))}>
                {row.cells.map((cell) => (
                  // eslint-disable-next-line react/jsx-key
                  <td
                    className="p-4"
                    {...cell.getCellProps(getCellProps && getCellProps(cell))}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};
