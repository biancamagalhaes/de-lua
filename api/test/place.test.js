const app = require('../index'); 
const request = require('supertest');
const dotenv = require('dotenv');
dotenv.config();

test('Should create a new place', async function(){
    await request(app)
        .post('/place')
        .send({
            "closetId": 1,
            "name": "Esccola"
        })
        .expect(200)
        .then(res => {
            const place = res.body;
            expect(place).toHaveProperty('place_id', 'name', 'closet_id');
        }).catch((e) => console.log(e))
     
});

test('Should get a especific place', async function(){
    await request(app)
        .get('/place/1')
        .expect(200)
        .then(res => {
            const place = res.body;
            expect(place).toHaveProperty('place_id', 'name', 'closet_id');
        }).catch((e) => console.log(e))
     
});

test('Should get all places from a especific closet', async function(){
    await request(app)
        .get('/place/closet/1')
        .expect(200)
        .then(res => {
            const place = res.body;
            expect(place.length).toBeGreaterThanOrEqual(1);
        }).catch((e) => console.log(e))
     
});

test('Should have deleted a especific place', async function(){
    const message = jest.fn(msg => msg.message);
    await request(app)
        .delete('/place/1')
        .expect(200)
        .then(res => {
            message(res.body);
            expect(message).toHaveReturnedWith('Successful place deleted');
        }).catch((e) => console.log(e))
     
});
