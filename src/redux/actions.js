export const addCar = (newCar) => {
  return {
    type: "ADD_CAR",
    value: newCar,
  };
};

export const removeCar = (idx) => {
  console.log(idx);
  return {
    type: "DEL_CAR",
    value: idx,
  };
};
