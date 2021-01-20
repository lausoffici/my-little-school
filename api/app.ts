import express, { Express } from 'express';
import mongoose, { Connection } from 'mongoose';
const studentRoutes = require('./routes/students');
const userRoutes = require('./routes/users');
require('dotenv/config');

// Express server creation
const app: Express = express();
const port: number = parseInt(process.env.PORT!) || 4000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes Middlewares
app.use('/students', studentRoutes);
app.use('/users', userRoutes);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection: Connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Connection error:'));
connection.once('open', () => console.log('Connected to mongo'));

// Start server
app.listen(port, () => console.log(`Listening at port: ${port}`));
