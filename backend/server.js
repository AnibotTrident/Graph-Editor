// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodeRoutes = require('./routes/nodeRoutes'); // Assuming you have a route for nodes
const edgeRoutes = require('./routes/edgeRoutes'); // Assuming you have a route for edges
const undoRedoRoutes = require('./routes/undoRedoRoutes'); // Assuming you have a route for undo/redo

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/graph-editor', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/nodes', nodeRoutes); // Handle node-related requests
app.use('/edges', edgeRoutes); // Handle edge-related requests
app.use('/actions', undoRedoRoutes); // Handle undo/redo actions

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
