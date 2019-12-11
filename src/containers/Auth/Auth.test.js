import React from "react";
import expect from "expect";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Auth from "";

configure({ adapter: new Adapter() });

describe("<MyComponent />", () => {
  it("renders children when passed in", () => {
    const wrapper = shallow(
      <div>
        <div className="unique" />
      </div>
    );
    expect(wrapper).toContain('<div className="unique" />');
  });
});
