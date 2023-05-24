import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes

import Landing from "./views/landing/Landing";

configure({ adapter: new Adapter() });


describe('renders learn react link', () => {
  const wrapperBienvenido = shallow(<Landing/>);
  const divBienvenido = wrapperBienvenido.find("div");
  it("Renderiza el componente ", () => {
    expect(wrapperBienvenido).toBeTruthy();
  });
});
