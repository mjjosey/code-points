let initialState = {
  users: [],
};

const userReducer = (initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...initialState,
        users: action.data,
      };
  }
};

export default userReducer;
