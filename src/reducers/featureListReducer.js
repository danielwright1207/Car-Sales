import { ADD, REMOVE, TOTAL } from "../actions/featureListActions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const featureListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalPrice: state.additionalPrice + action.payload.price,
      };

    case REMOVE:
      const removeFeature = state.car.features.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
      return {
        ...state,
        car: { ...state.car, features: removeFeature },
        additionalPrice: state.additionalPrice - action.payload.price,
      };
    // case TOTAL:
    //   return { ...state, additionalPrice: action.payload };
    // // const newPrice = state.additionalPrice
    default:
      return state;
  }
};
export default featureListReducer;
