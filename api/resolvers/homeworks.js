const Homework = require('../../models/homework');
const {transformHomework} = require('./merge');

module.exports = {
    createHomework: async (args) => {
        const homework = new Homework({
            title: args.homeworkInput.title,
            createdAt: new Date(args.homeworkInput.createdAt),
            finishAt: new Date(args.homeworkInput.finishAt),
            desc: args.homeworkInput.desc
        });
        let createdHomework;
        try {
            const result = await homework.save();
            createdHomework = transformHomework(result);
            return createdHomework;
        } catch (err) {
            throw err;
        }
    },
    updateHomework: async (args, req) => {
        try {
            return await Homework.findOneAndUpdate({
                _id: args._id
            }, JSON.parse(JSON.stringify(args.homeworkInput)),{
                new: true
            })
        } catch (err) {
            throw err;
        }
    },
    homeworks: async (args, req) => {
        /*
        TODO: uncomment when done / conditions etc.
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            const homeworks = await Homework.find();
            return homeworks.map(homework => {
                return transformHomework(homework);
            })
        } catch (err) {
            throw err;
        }
    },
    deleteHomework: async (args, req) => {
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            await Homework.deleteOne({ _id: args.homeworkId });
            return true;
        } catch (err) {
            throw err;
        }
    }
}