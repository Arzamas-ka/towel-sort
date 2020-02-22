// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  }

  return matrix
    .map((elem, id) => {
      if (id === 0) {
        return elem;
      }
      if (id % 2 !== 0) {
        return elem.reverse();
      }
      return elem;
    })
    .flat();
};
