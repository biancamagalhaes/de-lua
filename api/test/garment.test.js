const app = require('../index'); 
const request = require('supertest');
const image = require('./imageTest.json');
const dotenv = require('dotenv');
dotenv.config();

test('Should insert a new garment', async function(){
    await request(app)
        .post('/garment')
        .send({
            "classe": "BLOUSE",
            "name": "Blusa Rosa Manga Longa",
            "season": "WINTER, FALL",
            "closetId": 1,
            "file": image,
        })
        .expect(200)
        .then(res => {
            const garment = res.body;
            expect(garment).toHaveProperty('classe', 'name', 'season', 'image_url', 'closet_id', 'garment_id');
        }).catch((e) => console.log(e))
     
});

test('Should update a especific garment', async function(){
    await request(app)
        .put('/garment/1')
        .send({
            "classe": "BLOUSE",
            "season": "WINTER, FALL",
            "name": "Blusa Rosa Manga Longa"
        })
        .expect(200)
        .then(res => {
            const garment = res.body;
            expect(garment).toHaveProperty('classe', 'name', 'season', 'image_url', 'closet_id', 'garment_id');
        }).catch((e) => console.log(e))
     
});

test('Should get a especific garment', async function(){
    await request(app)
        .get('/garment/1')
        .expect(200)
        .then(res => {
            const garment = res.body;
            expect(garment).toHaveProperty('classe', 'name', 'season', 'image_url', 'closet_id', 'garment_id');
        }).catch((e) => console.log(e))
     
});

test('Should get all garments from a especific closet', async function(){
    await request(app)
        .get('/garment/closet/1')
        .expect(200)
        .then(res => {
            const garment = res.body;
            expect(garment.length).toBeGreaterThanOrEqual(1);
        }).catch((e) => console.log(e))
     
});

test('Should link a place and a garment', async function(){
    const message = jest.fn(msg => msg.message);
    await request(app)
        .post('/garment/place')
        .send({
            "id": 1,
            "placeId": 1
        })
        .expect(200)
        .then(res => {
            message(res.body);
            expect(message).toHaveReturnedWith('Successful garment and place linked');
        }).catch((e) => console.log(e))
     
});

test('Should have deleted a especific garment', async function(){
    const message = jest.fn(msg => msg.message);
    await request(app)
        .delete('/garment/1')
        .expect(200)
        .then(res => {
            message(res.body);
            expect(message).toHaveReturnedWith('Successful garment deleted');
        }).catch((e) => console.log(e))
     
});
