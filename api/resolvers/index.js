const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const userResolver = require('./users');
const classResolver = require('./classes');

const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...bookingResolver,
    ...userResolver,
    ...classResolver
};

module.exports = rootResolver;