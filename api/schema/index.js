const {buildSchema} = require('graphql');

module.exports = buildSchema(`
            type Booking {
                _id: ID!
                event: Event!
                user: User!
                createdAt: String!
                updatedAt: String!
            }
            
            type Event {
                _id: ID!
                title: String!
                description: String!
                price: Float!
                date: String!
                creator: User!
            }
            
            type User {
                _id: ID!
                username: String!
                password: String!
                first: String!
                last: String!
                role: String!
                email: String
                city: String!
                street: String!
                phone: Float
                date: String
                additionalData: String
            }
            
            type Class {
                _id: ID!
                class: String!
                year: Int!
                schedule: String!             
            }
            
            type Lecture {
                _id: ID!
                lecture: String!
            }
            
            type Homework {
                _id: ID!
                title: String!
                createdAt: String!
                finishAt: String!
                desc: String!
            }
            
            type Grade {
                _id: ID!
                grade: Int!
            }
            
            type AuthData {
                userId: ID!
                token: String!
                tokenExpiration: Int!
            }
            
            input EventInput {
                title: String!
                description: String!
                price: Float!
                date: String!
            }
            
            input UserInput {
                username: String!
                password: String!
                first: String!
                last: String!
                role: String!
                email: String
                city: String!
                street: String!
                phone: Float
                date: String
                additionalData: String 
            }
            
            input ClassInput {
                class: String!
                year: Int!
                schedule: String!
            }
            
            input HomeworkInput {
                title: String!
                createdAt: String!
                finishAt: String!
                desc: String!
            }
            
            input GradeInput {
                grade: Int!
            }
            
            input LectureInput {
                lecture: String!
            }
            
            input UserUpdate {
                username: String
                password: String
                first: String
                last: String
                role: String
                email: String
                city: String
                street: String
                phone: Float
                date: String
                additionalData: String 
            }
            
            input LectureUpdate {
                lecture: String
            }
            
            input GradeUpdate {
                grade: Int
            }
            
            input HomeworkUpdate {
                title: String
                createdAt: String
                finishAt: String
                desc: String
            }
            
            input ClassUpdate {
                class: String
                year: Int
                schedule: String
            }
                      
            type RootQuery {
                grades: [Grade!]!
                homeworks: [Homework!]!
                lectures: [Lecture!]!
                classes: [Class!]!
                events: [Event!]!
                bookings: [Booking!]!
                users: [User!]!
                login(username: String!, password: String!): AuthData!
            }
            
            type RootMutation {
                createGrade(gradeInput: GradeInput): Grade
                createHomework(homeworkInput: HomeworkInput): Homework
                createLecture(lectureInput: LectureInput): Lecture
                createClass(classInput: ClassInput): Class
                createEvent(eventInput: EventInput): Event
                createUser(userInput: UserInput): User
                bookEvent(eventId: ID!): Booking!
                cancelBooking(bookingId: ID!): Event!
                deleteUser(userId: ID!): User!
                deleteLecture(lectureId: ID!): Lecture!
                deleteHomework(homeworkId: ID!): Homework!
                deleteGrade(gradeId: ID!): Grade!
                deleteClass(classId: ID!): Class!
                updateLecture(_id: ID!, lectureInput: LectureUpdate): Lecture
                updateUser(_id: ID!, userInput: UserUpdate): User
                updateHomework(_id: ID!, homeworkInput: HomeworkUpdate): Homework
                updateGrade(_id: ID!, gradeInput: GradeUpdate): Grade
                updateClass(_id: ID!, classInput: ClassUpdate): Class
            }
            
            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `)