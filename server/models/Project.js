const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  client: {
    type: String,
  },
  budget: {
    type: Number,
    required: true,
  },
  sow_title:{
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  sow_detail:{
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  backgroud_color:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  teamMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TeamMember',
    },
  ],
});

const Project = model('Project', projectSchema);

module.exports = Project;
