const Grade = require('../../models/grade');

module.exports = {
    createGrade: async (args) => {
        try {
            const grade = new Grade({
                grade: +args.gradeInput.grade
            });
            const result = await grade.save();
            return {
                ...result._doc
            };
        } catch (err) {
            throw err;
        }
    },
    grades: async (args, req) => {
        /*
        TODO: uncomment when done / conditions etc.
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            const grades = await Grade.find();
            return grades.map(grade => {
                return grade;
            })
        } catch (err) {
            throw err;
        }
    },
    updateGrade: async (args, req) => {
        try {
            console.log(args)
            return await Grade.findOneAndUpdate({
                _id: args._id
            }, JSON.parse(JSON.stringify(args.gradeInput)),{
                new: true
            })
        } catch (err) {
            throw err;
        }
    },
    deleteGrade: async (args, req) => {
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }*/
        try {
            await Grade.deleteOne({ _id: args.gradeId });
            return true;
        } catch (err) {
            throw err;
        }
    }
}