const express = require('express');
const app = express();
const cors = require('cors');
const uploadRoutes = require('./routes/uploadRoutes');
const morgan = require('morgan');
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use('/api/',uploadRoutes);


app.listen(5000, () => console.log('Server is running on port 5000'));

