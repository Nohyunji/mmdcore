const initialState = {
  lan: localStorage.getItem("lan") || "kr",
};

const SETLANGUAGE = "APP/LANGUAGE";

export const setLanguage = (e) => (dispatch) => {
  const lan = e.currentTarget.dataset.lan;

  global.localStorage.setItem("lan", lan);

  dispatch({
    type: SETLANGUAGE,
    lan: lan,
  });
};

export const App = function (state = initialState, action) {
  switch (action.type) {
    case SETLANGUAGE:
      return {
        ...state,
        lan: action.lan,
      };

    default:
      return state;
  }
};
