const { Schema, model, Types } = require('mongoose');

const taskSchema= new Schema(
{
  taskId:{
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  taskBody:{
    type: String,
    maxlength: 280,
  },
  planned_duration:{
    type: Number,
  },
  acutal_duration:{
    type: Number,
  },
  date: {
    type: Date,
  },
}
)

module.exports = taskSchema