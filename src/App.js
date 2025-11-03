const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Ready 🚀' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

const productRoutes = require('./routes/products.routes');
app.use('/api/products', productRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

