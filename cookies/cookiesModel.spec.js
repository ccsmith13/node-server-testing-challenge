const db = require('../data/dbConfig.js');
const Cookies = require('./cookiesModel.js');

describe('cookies model', ()=>{

    // tests for CREATE function
    describe('insert()',()=>{
        it('should insert a cookie into the db', async ()=>{
            await Cookies.insert({name:"double chocolate"});
            await Cookies.insert({name:"mocha chip"});

            const addedCookies = await db('cookies');
            expect(addedCookies).toHaveLength(2);
        });

        it('should add a single cookie', async () =>{
            let newCookie = await Cookies.insert({name:"double chocolate"});
            expect(newCookie.name).toBe("double chocolate");

            newCookie = await Cookies.insert({name:"mocha chip"});
            expect(newCookie.name).toBe("mocha chip");
        } );

        beforeEach(async ()=>{
            await db('cookies').truncate();
        });
    });
    

    // tests for DELETE function
    describe('remove()', ()=>{
        it('should delete a cookie from the db', async ()=>{
            await Cookies.remove(2);
            const cookiesLeft = await db('cookies');
            expect(cookiesLeft).toHaveLength(1);
        }); 
        
    })


});