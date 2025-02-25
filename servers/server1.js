import express from 'express';
// import cors from 'cors';

const app = express();
const port = 3000

// app.use(cors());

// app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log('app get root /')
    res.send('Hello World!')
})

// app get root
// app.get('/', (req, res) => {

// })

app.get('/newRoute', (req, res) => {
    console.log('app get /newRoute')
    let greetings = [
        'hello there!',
        'hi there!',
        'welcome there!'
    ];

    const randomNum = Math.floor(Math.random() * greetings.length);
    console.log({randomNum})

    const randomGreeting = greetings[randomNum];
    console.log('Your random greeting is: ', randomGreeting)
    
    res.send(randomGreeting);
})


app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})