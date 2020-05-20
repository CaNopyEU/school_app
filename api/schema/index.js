const { buildSchema } = require('graphql');

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
                email: String!
                createdEvents: [Event!]
            }
            
            type Class {
                _id: ID!
                class: String!
                year: Int!
                schedule: String!             
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
                email: String!             
            }
            
            input ClassInput {
                class: String!
                year: Int!
                schedule: String!
            }
            
            type RootQuery {
                classes: [Class!]!
                events: [Event!]!
                bookings: [Booking!]!
                users: [User!]!
                login(username: String!, password: String!): AuthData!
            }
            
            type RootMutation {
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