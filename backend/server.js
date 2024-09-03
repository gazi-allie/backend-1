import express from 'express'

const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// get list of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id:1,
        title: 'A joke',
        content : 'This is  a joke  and will'
      },
      {
        id:2,
        title: '2 joke',
        content : 'This is  2 joke  and will'
      },
      {
        id:3,
        title: '3 joke',
        content : 'This is  a3j oke  and will'
      },
      {
        id:4,
        title: '4 joke',
        content : 'This is  4 joke  and will'
      },
      {
        id:5,
        title: '5 joke',
        content : 'This is  5 joke  and will'
      }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
