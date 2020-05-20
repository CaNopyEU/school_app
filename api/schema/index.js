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
                privilege: String!
                email: String
                city: String!
                street: String!
                phone: String
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
                privilege: String!
                email: String
                city: String!
                street: String!
                phone: String
                date: String
                additionalData: String 
            }
            
            input ClassInput {
                class: String!
                year: Int!
                schedule: String!
            }
            
            input LectureInput {
                lecture: String!
            }
            
            type RootQuery {
                lectures: [Lecture!]!
                classes: [Class!]!
                events: [Event!]!
                bookings: [Booking!]!
                users: [User!]!
                login(username: String!, password: String!): AuthData!
            }
            
            type RootMutation {
                createLecture(lectureInput: LectureInput): Lecture
                createClass(classInput: ClassInput): Class
                createEvent(eventInput: EventInput): Event
                createUser(userInput: UserInput): User
                bookEvent(eventId: ID!): Booking!
                cancelBooking(bookingId: ID!): Event!
            }
            
            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `)