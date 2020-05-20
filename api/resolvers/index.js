const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const userResolver = require('./users');
const classResolver = require('./classes');
const lectureResolver = require('./lectures');

const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...bookingResolver,
    ...userResolver,
    ...classResolver,
    ...lectureResolver
};

module.exports = rootResolver;