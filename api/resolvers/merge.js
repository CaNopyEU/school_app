const DataLoader = require('dataloader');

const Class = require('../../models/class');
const Event = require('../../models/event');
const User = require('../../models/user');
const Lecture = require('../../models/lecture');
const Homework = require('../../models/homework');
const Grade = require('../../models/grade');

const {dateToString} = require('../../helpers/date');

const eventLoader = new DataLoader((eventIds) => {
    return events(eventIds);
});

const userLoader = new DataLoader(userIds => {
    return User.find({_id: {$in: userIds}})
});

const classLoader = new DataLoader(classIds => {
    return Class.find({_id: {$in: classIds}})
});

const lectureLoader = new DataLoader(lectureIds => {
    return Lecture.find({_id: {$in: lectureIds}})
});

const homeworkLoader = new DataLoader(homeworkIds => {
    return Homework.find({_id: {$in: homeworkIds}})
});

const gradeLoader = new DataLoader(gradeIds => {
    return Grade.find({_id: {$in: gradeIds}})
});

const users = async userIds => {
    try {
        const users = await User.find({_id: {$in: userIds}})
        users.sort((a, b) => {
            return (
                userIds.indexOf(a._id.toString()) - userIds.index(b._id.toString())
            )
        })
    } catch (err) {
        throw err;
    }
}
const classes = async classIds => {
    try {
        const classes = await Class.find({_id: {$in: classIds}})
        classes.sort((a, b) => {
            return (
                classIds.indexOf(a._id.toString()) - classIds.index(b._id.toString())
            )
        })
    } catch (err) {
        throw err;
    }
}

const homeworks = async homeworkIds => {
    try {
        const homeworks = await Homework.find({_id: {$in: homeworkIds}})
        homeworks.sort((a, b) => {
            return (
                homeworkIds.indexOf(a._id.toString()) - homeworkIds.index(b._id.toString())
            )
        });
        return homeworks.map(homework => {
            return transformHomework(homework);
        });
    } catch (err) {
        throw err;
    }
}

const lectures = async lectureIds => {
    try {
        const lectures = await Lecture.find({_id: {$in: lectureIds}})
        lectures.sort((a, b) => {
            return (
                lectureIds.indexOf(a._id.toString()) - lectureIds.index(b._id.toString())
            )
        })
    } catch (err) {
        throw err;
    }
}

const grades = async gradeIds => {
    try {
        const grades = await Grade.find({_id: {$in: gradeIds}})
        grades.sort((a, b) => {
            return (
                gradeIds.indexOf(a._id.toString()) - gradeIds.index(b._id.toString())
            )
        })
    } catch (err) {
        throw err;
    }
}

const events = async eventIds => {
    try {
        const events = await Event.find({_id: {$in: eventIds}})
        events.sort((a, b) => {
            return (
                eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString())
            )
        });
        return events.map(event => {
            return transformEvent(event);
        });
    } catch (err) {
        throw err;
    }
};

const singleEvent = async eventId => {
    try {
        const event = await eventLoader.load(eventId.toString());
        return event;
    } catch (err) {
        throw err;
    }
}

const singleUser = async userId => {
    try {
        const user = await userLoader.load(userId.toString());
        return {
            ...user._doc,
            createdEvents: () => eventLoader.loadMany(user._doc.createdEvents)
        };
    } catch (err) {
        throw err;
    }
}
/*
const singleClass = async classId => {
    try {
        const singleClass = await classLoader.load(classId.toString());
        return {
            ...singleClass._doc,
            createdEvents: () => eventLoader.loadMany(user._doc.createdEvents)
        };
    } catch (err) {
        throw err;
    }
}
*/

const transformBooking = booking => {
    return {
        ...booking._doc,
        _id: booking.id,
        user: singleUser.bind(this, booking._doc.user),
        event: singleEvent.bind(this, booking._doc.event),
        createdAt: dateToString(booking._doc.createdAt),
        updatedAt: dateToString(booking._doc.updatedAt)
    };
};

const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        date: dateToString(event._doc.date),
        creator: singleUser.bind(this, event.creator)
    };
};

const transformHomework = homework => {
    return {
        ...homework._doc,
        _id: homework.id,
        title: homework.title,
        createdAt: dateToString(homework._doc.createdAt),
        finishAt: dateToString(homework._doc.finishAt),
        desc: homework.desc
    }
}

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
exports.transformHomework = transformHomework;

//exports.homeworks = homework;
//exports.lectures = lecture;
//exports.classes = class;
//exports.users = users;
//exports.singleUser = user;
//exports.events = events;
//exports.singleEvent = singleEvent;