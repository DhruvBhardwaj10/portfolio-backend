const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package
const contactRoutes = require('./routes/contactRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Apply CORS middleware
app.use(cors({
  origin: 'https://portfolio-frontend-tau-six.vercel.app',  // Replace with your frontend URL
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type'
}));

app.use(bodyParser.json());

app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/",(req,res)=>{
    res.send('<h1>This is HomePage</h1>')
})
