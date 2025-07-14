import { sequelize, UserActivity } from './db.js';

const names = ['Charlie', 'Dana', 'Eva', 'Frank'];
const activities = ['Comment', 'Like', 'Share', 'Logout'];
let counter = 0;

async function generateRandomDbData() {
    counter++;
    const name = names[Math.floor(Math.random() * names.length)];
    const activity = activities[Math.floor(Math.random() * activities.length)];
    const data = { name, activity };
    await UserActivity.create(data);
    if (counter % 3 === 0) {
        console.log((await UserActivity.findAll()).map(u => u.dataValues));
    }
}

setInterval(generateRandomDbData, 10000);