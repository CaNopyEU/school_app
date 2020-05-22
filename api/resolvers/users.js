const User = require('../../models/user');

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
    deleteUser: async (args, req) => {
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            await User.deleteOne({ _id: args.userId });
            return true;
        } catch (err) {
            throw err;
        }
    }
};