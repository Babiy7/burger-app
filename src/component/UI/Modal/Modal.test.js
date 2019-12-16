import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./Modal";

Enzyme.configure({ adapter: new Adapter() });

describe("<Modal /> container", () => {
  it("What are props there?", () => {
    const wrapper = mount(
      <Modal name="Owen" last="csc">
        <h1>Owen</h1>
      </Modal>
    );
    console.log(wrapper.props().name);
    expect(wrapper.props().name).toEqual("Owen");

    wrapper.setProps({ name: "Babiy" });
    console.log(wrapper.props().name);
    expect(wrapper.props().name).toEqual("Babiy");
  });
});
