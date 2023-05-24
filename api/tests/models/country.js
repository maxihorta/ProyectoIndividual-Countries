const { Country, conn } = require('../../src/db');
const { expect } = require('chai');

describe('Country model', () => {


  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });

    describe('population', () => {
      it('Deberia arrojar error si population es un STRING', (done) => {
        Country.create({
          population: 'cincuenta'
        })
          .then(() => done('No deberia crearse'))
          .catch(() => done())
      })
    })

    describe('id', () => {
      it('Deberia arrojar error si el id no es un STRING', (done) => {
        Country.create({
          id: "ARM",
          image:"http://www.google.com",
          continent:"africa",
          capital:"hola",
          population:12

        
        })
          .then(() => done('No deberia crearse'))
          .catch(() => done())
      })
    });
  });
});