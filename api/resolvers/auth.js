const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

module.exports = {
    createUser: async (args) => {
        try {
            const existingUser = await User.findOne({username: args.userInput.username})
            if (existingUser) {
                throw new Error('User exists already.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                username: args.userInput.username,
                password: hashedPassword,
                first: args.userInput.first,
                last: args.userInput.last,
                role: args.userInput.role,
                email: args.userInput.email,
                city: args.userInput.city,
                street: args.userInput.street,
                phone: +args.userInput.phone,
                date: new Date(args.userInput.date),
                additionalData: args.userInput.additionalData
            });
            const result = await user.save();
            return {
                ...result._doc,
                password: null
            };
        } catch (err) {
            throw err;
        }
    },
    login: async ({username, password}) => {
        const user = await User.findOne({username: username});
        if (!user) {
            throw new Error('User does not exist!');
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect!');
        }
        const token = jwt.sign({
                userId: user.id,
                username: user.username,
                role: user.role
            },
            'somesupersecretkey',
            {
                expiresIn: '1h'
            }
        );
        return {userId: user.id, token: token, tokenExpiration: 1}
    }

};