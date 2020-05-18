const Event = require('../../models/event');
const User = require('../../models/user');
const { transformUser } = require('./merge');


module.exports = {
    users: async (args, req) => {
        /*
        TODO: uncomment when done / conditions etc.
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            const users = await User.find();
            return users.map(user => {
                return user;
            })
        } catch (err) {
            throw err;
        }
    },
    /*deleteUser: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
        try {
            const booking = await Booking.findById(args.bookingId).populate('event');
            const  event = transformEvent(booking.event);
            await User.deleteOne({ _id: args.userId });
            return event;
        } catch (err) {
            throw err;
        }
    }*/
};