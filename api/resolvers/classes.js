const Class = require('../../models/class');

module.exports = {
    createClass: async (args) => {
        try {
            const singleClass = new Class({
                class: args.classInput.class,
                year: +args.classInput.year,
                schedule: args.classInput.schedule
            });
            const result = await singleClass.save();
            return {
                ...result._doc
            };
        } catch (err) {
            throw err;
        }
    },
    classes: async (args, req) => {
        /*
        TODO: uncomment when done / conditions etc.
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            const classes = await Class.find();
            return classes.map(oneClass => {
                return oneClass;
            })
        } catch (err) {
            throw err;
        }
    },
}