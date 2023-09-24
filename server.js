const express = require('express');
const app = express();
const port = 3000;

// This line use exoress engine to process the webpage, 
//  if you put 'pulbic' it will look for public folder to get index.html
app.use(express.static('public'));

// Set up a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});