import expect from "expect";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import Component from "src/";

describe("Component", () => {
  let node;

  beforeEach(() => {
    node = shallow(<Component />);
  });

  it("displays a welcome message", () => {
    const message = node.find("h2");
    expect(message.text()).toBe("Welcome to the Wonderful World of npm");
  });
});
