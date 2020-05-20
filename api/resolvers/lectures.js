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
}