const { conn, Country, Activity} = require("../src/db");

describe("Modelos", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  describe("Country", () => {
    test("Debe existir Country", () => {
   
      expect(Country).toBeDefined();
    });
    test("Debe existir Activity", () => {
   
      expect(Activity).toBeDefined();
    });

    test("Country Debe tener las propiedades correctas", async () => {
      const country = await Country.build({
        id: "ARG",
        name: "Argentina",
        image: "imagen.com",
        continent: "South America",
        capital: "Buenos Aires",
        subregion: "South America",
        area: 3232,
        population: 15000
      });
      const keys = ['id', 'name', 'image', 'continent', 'capital', 'subregion', 'area', 'population'];
      expect(Object.keys(country.toJSON())).toEqual(keys);
    });

    test("La propiedad name no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Country.create({
          id: "ARG",
        name: null,
        image: "imagen.com",
        continent: "South America",
       
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad continent no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Country.create({
          id: "ARG",
          name: "argentina",
          image: "imagen.com",
          continent: null,
        
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad id no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Country.create({
          id: null,
          continente: "Africa",
          name: "Croacia",
          population: 112,
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad capital no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Country.create({
          Name: "china",
          continent: "Asia",
          Capital: null,
          area: 222,
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("No debe contener los timestamps automáticos: createdAt y updatedAt", async () => {
      const country = await Country.create({
        id: "ARG",
        name: "Argentina",
        image: "imagen.com",
        continent: "South America",
        capital: "Buenos Aires",
        subregion: "South America",
        area: 3232,
        population: 15000
      });
      const timestamps = ['createdAt', 'updatedAt'];
      expect(Object.keys(country.toJSON())).not.toEqual(expect.arrayContaining(timestamps));
    })
  })

  describe("Activity", () => {
    test("Activity debe existir", () => {
      expect(Activity).toBeDefined();
    });

    test("Debe tener las propiedades correctas", async () => {
      const activity = await Activity.build({
      id:1,
      name:"Pesca",
      difficulty:4,
      duration:"03:33",
      season:"Winter",
      })
      const keys = ['id', 'name', 'difficulty', 'duration', 'season'];
      
      expect(Object.keys(activity.toJSON())).toEqual(keys);
    });

    test("La propiedad name no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Activity.create({
          id:1,
          name:null,
          difficulty:4,
          duration:"03:33",
          season:"Winter",
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad id no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Activity.create({
          name:"Pesca",
         id:"null",
          
          difficulty:4,
          duration:"03:33",
          season:"Winter",
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad difficulty no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Activity.create({
          id:1,
          name:"Pesca",
          difficulty:"null",
          duration:"03:33",
          season:"Winter",
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });


    test("La propiedad season no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Activity.create({
          id:1,
          name:"Pesca",
          difficulty:4,
          duration:"03:33",
          season:null,
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

   
   
    test("No debe contener los timestamps automáticos: createdAt y updatedAt", async () => {
      const activity = await Activity.create({
           id:1,
          name:"Pesca",
          difficulty:2,
          duration:"03:33",
          season:"Winter",
      });
      const timestamps = ['createdAt', 'updatedAt'];
      expect(Object.keys(activity.toJSON())).not.toEqual(expect.arrayContaining(timestamps));
    })



  })

  
  afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  });
  })

