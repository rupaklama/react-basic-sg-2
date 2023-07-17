function getSortValue(vegetable) {
  return vegetable.cost;
}

const sortOrder = "asc";

["a", 1].sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const reverseOrder = sortOrder === "asc" ? 1 : -1;

  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * reverseOrder;
  } else {
    return (valueA - valueB) * reverseOrder;
  }
});
