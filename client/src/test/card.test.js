import React from "react"
import {render, screen, fireEvent}  from "@testing-library/react"
import Card from "../components/Card/Card"
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./../App"
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

const country = {
  "id":"1",
  "name":"Argentina",
  "continent":"Sud America",
  "image":"imagen"
}
describe("<Card/>", ()=>{
  render( <Router>
      <App />
  </Router>
  )
  const card =shallow( <Card country={country}/>)
  it("tiene que tener una etiqueta h2", ()=>{
  expect(card.find("h2")).toHaveLength(1);
  })
  it("tiene que tener una etiqueta img para la bandera", ()=>{
  expect(card.find("img")).toHaveLength(1);
  })
  it("tiene que tener una etiqueta h1 para el nombre", ()=>{
  expect(card.find("h1")).toHaveLength(1);
  })

  it("Debería renderizar un h2 para el continente con el texto 'Sud America'", () => {
    expect(card.find("h2").at(0).text()).toEqual("Sud America");
  });
  it("Debería renderizar un h1 para el nombre del pais con el texto 'Argentina'", () => {
    expect(card.find("h1").at(0).text()).toEqual("Argentina");
  });

  it("Debería renderizar un img para la bandera del pais con el link 'imagen'", () => {
    const img = card.find("img").at(0);
    expect(img.props()).toEqual({
      ...img.props(),
     src:"imagen"
    });
  });


  it("Debería renderizar un <LINK> el atributos to y country ", () => {
    const LinkTo = card.find("Link").at(0);

    expect(LinkTo.props()).toEqual({
      ...LinkTo.props(),
      to: "/detail/1",
      country:{"id":"1",
        "name":"Argentina",
        "continent":"Sud America",
        "image":"imagen"}
    });
  });
})