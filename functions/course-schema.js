const ExerciseSchema = require('./exercise-schema');

module.exports = {
  name: String,
  title: String,
  text: String,
  dependentOn: String,
  exercises: [ExerciseSchema]
};