import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Filter from "../components/Filter/Filter";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import * as actions from "../Redux/Actions/index";
import reducer from "../Redux/Reducer/index"

import thunk from 'redux-thunk'

const middlewares = [thunk]

configure({ adapter: new Adapter() });

describe("<Filter/>", ()=>{
  let filter, useState, useStateSpy;
  const mockStore = configureStore(middlewares);
  beforeEach(() => {
   
    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
        useDispatch: () => mockDispatch,
    }));

    useState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [
      {
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      },
      useState,
    ]);
    const store = mockStore({})
    filter = mount(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    
    expect(filter).toBeTruthy();

  }); 
 
  it("tiene que tener 4 select (uno por cada filtro/ordenamiento)", ()=>{
  expect(filter.find("select")).toHaveLength(4);
  })

  it("Debería renderizar un select  para el ordenamiento de a-z y z-a con el name 'order'", () => {
    const order = filter.find("select").at(0);
    expect(order.props()).toEqual({
      ...order.props(),
     name:"order",
    
    });
  });

  it("Debería renderizar un select  para el filtro de continentes con el name 'filterContinent'", () => {
    const continent = filter.find("select").at(1);
    expect(continent.props()).toEqual({
      ...continent.props(),
     name:"filterContinent"
    });
  });

  it("Debería renderizar un select  para el ordenamiento de mayor y menor poblacion con el name 'orderPopulation'", () => {
    const population = filter.find("select").at(2);
    expect(population.props()).toEqual({
      ...population.props(),
     name:"orderPopulation"
    });
  });

  it("Debería renderizar un select  para el filtrado por actividades con el name 'filterActivity'", () => {
    const activity = filter.find("select").at(3);
    expect(activity.props()).toEqual({
      ...activity.props(),
     name:"filterActivity"
    });
  });

  
  




  describe("Actions", () => {
    it("La action orderCards  debería retornar un objeto con el type y payload de la action", () => {
      expect(actions.orderCards(undefined)).toEqual({
        type: "ORDER",
        payload: undefined,
      });
      expect(
        actions.orderCards("A")
      ).toEqual({
        type: "ORDER",
        payload: "A",
      });
      expect(
        actions.orderCards("Z")
      ).toEqual({
        type: "ORDER",
        payload: "Z",
      });
    });


    it("La action filterContinent  debería retornar un objeto con el type y payload de la action", () => {
      expect(actions.filterContinent(undefined)).toEqual({
        type: "FILTER_CONTINENT",
        payload: undefined,
      });
      expect(
        actions.filterContinent("Africa")
      ).toEqual({
        type: "FILTER_CONTINENT",
        payload: "Africa",
      });
      expect(
        actions.filterContinent("Asia")
      ).toEqual({
        type: "FILTER_CONTINENT",
        payload: "Asia",
      });
      expect(
        actions.filterContinent("Europa")
      ).toEqual({
        type: "FILTER_CONTINENT",
        payload: "Europa",
      });
      expect(
        actions.filterContinent("South america")
      ).toEqual({
        type: "FILTER_CONTINENT",
        payload: "South america",
      });
      expect(
        actions.filterContinent("North america")
      ).toEqual({
        type: "FILTER_CONTINENT",
        payload: "North america",
      });
      expect(
        actions.filterContinent("Oceania")
      ).toEqual({
        type: "FILTER_CONTINENT",
        payload: "Oceania",
      });
    });

    it("La action filterActivity  debería retornar un objeto con el type y payload de la action", () => {
      expect(actions.filterActivity(undefined)).toEqual({
        type: "FILTER_ACTIVITY",
        payload: undefined,
      });
      expect(
        actions.filterActivity("Pesca deportiva")
      ).toEqual({
        type: "FILTER_ACTIVITY",
        payload: "Pesca deportiva",
      });
      expect(
        actions.filterActivity("Recitales")
      ).toEqual({
        type: "FILTER_ACTIVITY",
        payload: "Recitales",
      });
      expect(
        actions.filterActivity("Ferias culturales")
      ).toEqual({
        type: "FILTER_ACTIVITY",
        payload: "Ferias culturales",
      });
    });

    it("La action orderPopulationCards  debería retornar un objeto con el type y payload de la action", () => {
      expect(actions.orderPopulationCards(undefined)).toEqual({
        type: "ORDER_POPULATION",
        payload: undefined,
      });
      expect(
        actions.orderPopulationCards("min")
      ).toEqual({
        type: "ORDER_POPULATION",
        payload: "min",
      });
      expect(
        actions.orderPopulationCards("max")
      ).toEqual({
        type: "ORDER_POPULATION",
        payload: "max",
      });
    });

  });


  describe("Reducer", () => {
    it("Debería retornar el estado global de menor a mayor cuando el caso es ORDER", () => {
      const state = {
        allCountry: [{name:"argentina"}, {name:"chile"}, {name:"brasil"}]
      };
      const payload = "A";
      const orderAZ = reducer(state , actions.orderCards(payload));
     
      
      expect(orderAZ).toEqual({
        allCountry: [{name:"argentina"}, {name: "brasil"}, {name:"chile"}]
      });
    });
  
       it("Debería retornar el estado global de mayor a menor cuando el caso es ORDER", () => {
      const state = {
        allCountry: [{name:"belgica"}, {name:"mexico"}, {name:"brasil"}]
      };
      const payload = "Z";
      const orderZA = reducer(state , actions.orderCards(payload));
     
      
      expect(orderZA).toEqual({
        allCountry: [{name:"mexico"}, {name: "brasil"}, {name:"belgica"}]
      });
    });

    it("Debería retornar el estado global de menor a mayor poblacion cuando el caso es ORDER_POPULATION", () => {
      const state = {
        allCountry: [{population:15000}, {population:5000}, {population:10000}]
      };
      const payload = "min";
      const orderMin = reducer(state , actions.orderPopulationCards(payload));
     
      
      expect(orderMin).toEqual({
        allCountry: [{population:5000}, {population: 10000}, {population:15000}]
      });
    });
  
       it("Debería retornar el estado global de mayor a menor cuando el caso es ORDER_POPULATION", () => {
      const state = {
        allCountry: [{population:15000}, {population:5000}, {population:10000}]
      };
      const payload = "max";
      const orderMax = reducer(state , actions.orderPopulationCards(payload));
     
      
      expect(orderMax).toEqual({
        allCountry: [{population:15000}, {population: 10000}, {population:5000}]
      });
    });


    it("Debería retornar el estado global filtrando --Africa--  cuando el caso es FILTER_CONTINENT", () => {
      const state = {
        allCountryFilter: [{name:"Sudafrica", continent:"Africa"}, {name:"Marruecos", continent:"Africa"}, {name:"China", continent:"Asia"},{name:"Francia", continent:"Europa"}],
         
      };
      const payload = "Africa";
      const filterContinentAfrica = reducer(state , actions.filterContinent(payload));
     
      
      expect(filterContinentAfrica).toEqual({
        allCountry: [{name:"Sudafrica", continent:"Africa"}, {name:"Marruecos", continent:"Africa"}],
        allActivity: [{name:"Sudafrica", continent:"Africa"}, {name:"Marruecos", continent:"Africa"}],
        allCountryFilter: [{name:"Sudafrica", continent:"Africa"}, {name:"Marruecos", continent:"Africa"}, {name:"China", continent:"Asia"},{name:"Francia", continent:"Europa"}],
        numPage:1
        
      });
    });
    it("Debería retornar el estado global filtrando --Asia--  cuando el caso es FILTER_CONTINENT", () => {
      const state = {
        allCountryFilter: [{name:"sudafrica", continent:"africa"}, {name:"marruecos", continent:"africa"}, {name:"china", continent:"asia"},{name:"europa", continent:"francia"}]
      };
      const payload = "asia";
      const filterContinentAsia = reducer(state , actions.filterContinent(payload));
     
      
      expect(filterContinentAsia).toEqual({
        allCountry: [{name:"china", continent:"asia"},],
        allActivity: [{name:"china", continent:"asia"},],
        allCountryFilter:[{name:"sudafrica", continent:"africa"}, {name:"marruecos", continent:"africa"}, {name:"china", continent:"asia"},{name:"europa", continent:"francia"}],
        numPage:1
      });
    });
  });

  
})