const { buildSchema } = require('graphql');
exports.graphQLschema = buildSchema(`
  type Courses {
    getAllCourses: [Course]
    searchCourses(name: String!): [Course]
  }

  type Course {
    _id: ID!
    name: String,
    credits: Int,
    teacher: Teacher
  }

  type Teacher {
    _id: ID!,
    first_name: String!,
    last_name: String!,
    cedula: String!,
    age: Int
  }

  `);