const db = require('../config/connection');
const { TeamMember, Project } = require('../models');
const teamMemberSeeds = require('./teamMemberSeeds.json');
const projectSeeds = require('./projectSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Project', 'projects');
    await cleanDB('TeamMember', 'teammembers');
    await cleanDB('Task', 'tasks');

    await TeamMember.create(teamMemberSeeds);
    await Project.create(projectSeeds);
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
