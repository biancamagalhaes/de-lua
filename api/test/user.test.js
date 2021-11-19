const app = require('../index'); 
const request = require('supertest');
const dotenv = require('dotenv');
dotenv.config();

test('Should create a user', async function(){
    await request(app)
    .post('/user')
    .send({
        "password": "test",
        "email": "bianca.magalhaes@hotmail.com"
    })
    .expect(200)
    .then(res => {
        const user = res.body;
        expect(user).toHaveProperty('user_id', 'name', 'password', 'email', 'plan', 'image_url', 'token');
    })
        
     
});

test('Should get a especific user', async function(){
    await request(app)
        .get('/user/2')
        .expect(200)
        .then(res => {
            const user = res.body;
            expect(user).toHaveProperty('user_id', 'name', 'password', 'email', 'plan', 'image_url', 'token', 'closet');
        })
     
});


test('Should have updated a especific user', async function(){
    await request(app)
        .put('/user/2')
        .send({
            "name": "Test",
            "imageUrl": "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
        })
        .expect(200)
        .then(res => {
            const user = res.body;
            expect(user).toHaveProperty('user_id', 'name', 'password', 'email', 'plan', 'image_url', 'token', 'closet');
        })
     
});

test('Should have updated the password of a especific user', async function(){
    const message = jest.fn(msg => msg.message);
    await request(app)
        .put('/user/password/2')
        .send({
            "password": "test"
        })
        .expect(200)
        .then(res => {
            message(res.body);
            expect(message).toHaveReturnedWith('Successful updated password');
        })
     
});

test('Should have updated the plan of a especific user', async function(){
    await request(app)
        .put('/user/plan/2')
        .send({
            "plan": "FREE"
        })
        .expect(200)
        .then(res => {
            const user = res.body;
            expect(user).toHaveProperty('user_id', 'name', 'password', 'email', 'plan', 'image_url', 'token', 'closet');
        })
     
});

test('Should have logeed in a user', async function(){
    const message = jest.fn(msg => msg.message);
    await request(app)
        .post('/user/login')
        .send({
            "email": "bianca.magalhaes@hotmail.com",
            "password": "test"
        })
        .expect(200)
        .then(res => {
            message(res.body);
            const user = res.body.user;
            expect(message).toHaveReturnedWith('Successful logged!');
            expect(user).toHaveProperty('user_id', 'name', 'email', 'plan');
        });
});

test('Should have deleted a especific user', async function(){
    const message = jest.fn(msg => msg.message);
    await request(app)
        .delete('/user/2')
        .expect(200)
        .then(res => {
            message(res.body);
            expect(message).toHaveReturnedWith('Successful user deleted');
        })
     
});

module.exports = request;
