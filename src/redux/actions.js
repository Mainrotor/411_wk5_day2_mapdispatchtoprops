export const addCar = (newCar) => {
  return {
    type: "ADD_CAR",
    value: newCar,
  };
};

export const removeCar = (index) => {
  return {
    type: "DEL_CAR",
    value: index,
  };
};
