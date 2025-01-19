const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might fail
    await new Promise(resolve => setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Simulate a successful response
        resolve('Success!');
      } else {
        // Simulate an error
        resolve(Promise.reject(new Error('Something went wrong!')));
      }
    }, 1000));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
    return;
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));