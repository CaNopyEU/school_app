const Lecture = require('../../models/lecture');

module.exports = {
    createLecture: async (args) => {
        try {
            const existingLecture = await Lecture.findOne({lecture: args.lectureInput.lecture})
            if (existingLecture) {
                throw new Error('Lecture exists already.');
            }
            const lecture = new Lecture({
                lecture: args.lectureInput.lecture
            });
            const result = await lecture.save();
            return {
                ...result._doc
            };
        } catch (err) {
            throw err;
        }
    },
    updateLecture: async (args, req) => {
        try {
            return await Lecture.findOneAndUpdate({
                _id: args._id
            }, JSON.parse(JSON.stringify(args.lectureInput)),{
                new: true
            })
        } catch (err) {
            throw err;
        }
    },
    lectures: async (args, req) => {
        /*
        TODO: uncomment when done / conditions etc.
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            const lectures = await Lecture.find();
            return lectures.map(lecture => {
                return lecture;
            })
        } catch (err) {
            throw err;
        }
    },
    deleteLecture: async (args, req) => {
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            console.log(args);
            await Lecture.deleteOne({_id: args.lectureId});
            return true;
        } catch (err) {
            throw err;
        }
    }
}