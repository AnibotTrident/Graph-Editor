const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Node = require('./models/Node');
const Edge = require('./models/Edge');
const History = require('./models/History');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/graph-editor';

mongoose
    .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Graph Editor Backend is Running!');
});

app.get('/test', async (req, res) => {
    try {
        const testNode = await Node.create({ label: 'Test Node', positionX: 100, positionY: 200 });
        res.json({ message: 'Test Node Created', node: testNode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
