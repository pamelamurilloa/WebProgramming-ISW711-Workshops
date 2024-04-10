const Course = require('../models/courseModel');
const Teacher = require('../models/teacherModel');

const resolvers = {
  Courses: {
    getAllCourses: async () => {
      try {
        const courses = await Course.find();
        return courses;
      } catch (error) {
        throw new Error('Could not fetch courses');
      }
    },
    searchCourses: async (_, { name }) => {
      try {
        const courses = await Course.find({ name: { $regex: name, $options: 'i' } });
        return courses;
      } catch (error) {
        throw new Error('Could not search courses');
      }
    },
  },
  Course: {
    teacher: async (courseParent) => {
      try {
        const teacher = await Teacher.findById(courseParent.teacher);
        return teacher;
      } catch (error) {
        throw new Error('Could not fetch teacher for this course');
      }
    }
  }
};

module.exports = resolvers;
