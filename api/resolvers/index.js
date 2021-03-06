const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const userResolver = require('./users');
const classResolver = require('./classes');
const lectureResolver = require('./lectures');
const homeworkResolver = require('./homeworks');
const gradeResolver = require('./grades');

const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...bookingResolver,
    ...userResolver,
    ...classResolver,
    ...lectureResolver,
    ...homeworkResolver,
    ...gradeResolver
};

module.exports = rootResolver;