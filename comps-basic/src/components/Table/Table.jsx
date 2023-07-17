import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const renderHeaders = config.map(column => {
    // custom header
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    // regular header
    return <th key={column.label}>{column.label}</th>;
  });

  const renderRows = data.map(rowData => {
    const renderedCells = config.map(column => (
      <td key={column.label} className="p-2">
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>

      <tbody>{renderRows}</tbody>
    </table>
  );
};
export default Table;
