const mongoose = require('mongoose');

const edgeSchema = new mongoose.Schema({
  startNodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Node', required: true },
  endNodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Node', required: true },
  start: { x: Number, y: Number },
  end: { x: Number, y: Number },
});

const Edge = mongoose.model('Edge', edgeSchema);

module.exports = Edge;
