import { useState } from "react";
import Table from "./Table";

const SortableTable = props => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = label => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map(column => {
    if (!column.getSortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th onClick={() => handleClick(column.label)}>{column.label} Sortable </th>,
    };
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { getSortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = getSortValue(a);
      const valueB = getSortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        // number
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};
export default SortableTable;
