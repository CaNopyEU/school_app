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
}