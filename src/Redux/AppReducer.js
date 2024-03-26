const init_state = {
  is_loading: false,
  is_error: false,
  card_data: [56.945, 76.8, 116, 12.67],
};

export const appReducer = (state = init_state, action) => {
  const { payload, type } = action;

  switch (type) {
    // ... other cases

    case "GET_POWERSCREENS_SUCCESS": {
      return { ...state, power_screens: payload };
    }

    default:
      return state;
  }
};
