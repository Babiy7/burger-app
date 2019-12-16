import reducer from "./auth";
import * as ActionType from "../actions/actionTypes";

describe(" auth reducer ", () => {
  it("should return the init state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      error: null,
      loading: false,
      userId: null
    });
  });

  it("should return the auth_success", () => {
    expect(
      reducer(undefined, {
        type: ActionType.AUTH_SUCCESS,
        token: "dsadsadsdd32e32ed2",
        userId: "dsdsdsdsd2swss2"
      })
    ).toEqual({
      token: "dsadsadsdd32e32ed2",
      error: null,
      loading: false,
      userId: "dsdsdsdsd2swss2"
    });
  });
});
