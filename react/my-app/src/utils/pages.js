export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = total => {
  let result = [];

  for (let i = 0; i < total; i++) {
    result.push(i + 1);
  }
  return result;
};
