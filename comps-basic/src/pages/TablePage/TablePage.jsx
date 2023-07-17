import SortableTable from "../../components/Table/SortableTable";

const TablePage = () => {
  // rows
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  // columns
  const config = [
    {
      label: "Name",
      render: item => item.name,
      getSortValue: item => item.name,
    },
    {
      label: "Color",
      render: item => <div className={`p-3 m-2 ${item.color}`} />,
    },
    {
      label: "Score",
      render: item => item.score,
      getSortValue: item => item.score,
      // inside sortable table component, add this custom header
      // header: () => <th onClick={sortOrder()}>Score</th>
    },
  ];

  const generateKey = item => {
    return item.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={generateKey} />
    </div>
  );
};
export default TablePage;
