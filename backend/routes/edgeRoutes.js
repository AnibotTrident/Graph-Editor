const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Edge = require('../models/Edge'); // Assuming you have an Edge model
const Node = require('../models/Node'); // Assuming you have a Node model

// POST a new edge
router.post('/', async (req, res) => {
  try {
    const { startNodeId, endNodeId, start, end } = req.body;

    // Validate input
    if (!startNodeId || !endNodeId || !start || !end) {
      return res.status(400).json({ error: 'Missing required fields: startNodeId, endNodeId, start, end' });
    }

    // Check if the startNodeId and endNodeId are valid ObjectIds
    if (!mongoose.Types.ObjectId.isValid(startNodeId) || !mongoose.Types.ObjectId.isValid(endNodeId)) {
      return res.status(400).json({ error: 'Invalid ObjectId for startNodeId or endNodeId' });
    }

    // Check if the nodes exist in the database
    const startNode = await Node.findById(startNodeId);
    const endNode = await Node.findById(endNodeId);

    if (!startNode || !endNode) {
      return res.status(404).json({ error: 'Start or End node not found' });
    }

    // Create a new edge
    const newEdge = new Edge({
      startNodeId,
      endNodeId,
      start,
      end,
    });

    // Save the edge to the database
    await newEdge.save();
    res.status(201).json(newEdge);
  } catch (error) {
    console.error('Error creating edge:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all edges
router.get('/', async (req, res) => {
  try {
    const edges = await Edge.find();
    res.status(200).json(edges);
  } catch (error) {
    console.error('Error fetching edges:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a single edge by ID
router.get('/:id', async (req, res) => {
  try {
    const edge = await Edge.findById(req.params.id);
    if (!edge) {
      return res.status(404).json({ error: 'Edge not found' });
    }
    res.status(200).json(edge);
  } catch (error) {
    console.error('Error fetching edge:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE an edge by ID
router.delete('/:id', async (req, res) => {
  try {
    const edge = await Edge.findByIdAndDelete(req.params.id);
    if (!edge) {
      return res.status(404).json({ error: 'Edge not found' });
    }
    res.status(200).json({ message: 'Edge deleted successfully' });
  } catch (error) {
    console.error('Error deleting edge:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
