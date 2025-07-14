import { sequelize, UserActivity } from './db.js';

const rows = (await UserActivity.findAll()).map(u => u.dataValues);
console.table(rows);