const { Schema, model, Types } = require('mongoose');

const taskSchema = new Schema(
    {
        teamMember: {
            type: Schema.Types.ObjectId,
            ref: 'TeamMember',
          },
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project',
          },
        description: {
            type: String,
            maxlength: 50,
        },
        planned_duration: {
            type: Number,
        },
        actual_duration: {
            type: Number,
        },
        task_date: {
            type: Date,
            get: (timestamp) => dateFormat(timestamp),
          },
    }
)

const Task = model('Task', taskSchema);

module.exports = Task;