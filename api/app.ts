import express, { Express } from 'express';
import mongoose, { Connection } from 'mongoose';
const studentRoutes = require('./routes/students');
const userRoutes = require('./routes/users');
const coursesRoutes = require('./routes/courses');
const cors = require('cors');
require('dotenv/config');

// Express server creation
const app: Express = express();
const port: number = parseInt(process.env.PORT!) || 4000;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes Middlewares
app.use('/students', studentRoutes);
app.use('/users', userRoutes);
app.use('/courses', coursesRoutes);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION_URI!, {
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
