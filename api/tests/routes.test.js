const app = require ("../src/app")

const session =  require("supertest") // es una especie de session para levantar el test

const request = session(app) //conecto el supertest con el servidor  se guarda un objeto con un monton de metodos /herramientas no necesita levantarse

// const CountryARG = {
//     "id":"ARG",
//     "name":"Argentina",
//     "image":"https://flagcdn.com/w320/ar.png",
//     "continent":"South America",
//     "capital":"Buenos Aires",
//     "subregion":"South America",
//     "area":2780400,
//     "population":45376763,
//     "activities":[]}



describe("Test Routes", ()=>{
    describe("Test Countrys By ID", ()=>{
    // it("Response status:200 in route countries/ARG",async ()=>{  // 200 en mayuscula
    //     await request.get("/countries/ARG").then((res)=>{
    //         expect(res.statusCode).toBe(200)
    //     })
    // })
    // it("Response status:200 in route countries/bra",async ()=>{ 
    //     await request.get("/countries/bra").then((res)=>{
    //         expect(res.statusCode).toBe(200)
    //     })
    // })
    it("Response status:400 in route countries/ARGA",async ()=>{ //400
        await request.get("/countries/ARGA").then((res)=>{
            expect(res.statusCode).toBe(400)
        })
    })
    it("Response status:400 in route countries/BRI",async ()=>{ //400
        await request.get("/countries/BRI").then((res)=>{
            expect(res.statusCode).toBe(400)
        })
    })
    // it("Response Country Argentina  in route countries/ARG",async ()=>{ //200 ARGENTINA body obj
    //     await request.get("/countries/ARG").then((res)=>{
    //         expect(res.body).toEqual(CountryARG)
    //     })
    // })
     })



    describe("Test Countrys by Query", ()=>{
        // it("Response status:200 in route countries by query lower case",async ()=>{  // 200 minuscula
        //     await request.get("/countries/?name=brazil").then((res)=>{
        //         expect(res.statusCode).toBe(200)
        //     })
        // })
        // it("Response status:200 in route countries by query capital letter",async ()=>{ // 200 en mayuscula
        //     await request.get("/countries/?name=BRAZIL").then((res)=>{
        //         expect(res.statusCode).toBe(200)
        //     })
        // })
        it("Response status:400 in route countries/?=CARREFOUR",async ()=>{ // 400
            await request.get("/countries/?name=CARREFOUR").then((res)=>{
                expect(res.statusCode).toBe(400)
            })
        })
        it("Response status:400 in route countries ",async ()=>{ //400
            await request.get("/countries/?name=PINK").then((res)=>{
                expect(res.statusCode).toBe(400)
            })
        })
        
        })
   

})