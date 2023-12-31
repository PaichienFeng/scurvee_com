const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const teamMemberSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  rate:{
    type: Number,
    required: true,
  },
  background_color:{
    type: String,
    required: true,
  },
  image_link:{
    type: String,
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
});

teamMemberSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

teamMemberSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const TeamMember = model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
