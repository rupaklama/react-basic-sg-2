const Table = ({ data, config, keyFn }) => {
  const renderHeaders = config.map(header => <th key={header.label}>{header.label}</th>);

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
