const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  label: { type: String, required: true },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
});

const Node = mongoose.model('Node', nodeSchema);

module.exports = Node;
