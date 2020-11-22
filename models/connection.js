const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date },
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
            required: [true, "Please give an exercise name"]
        },
        duration: {
            type: Number,
            trim: true,
            required: [true, "Please give an exercise duration"]
        },
        weight: {
            type: Number,
            trim: true,
            required: [true, "Please give a weight estimate"]
        },
        reps: {
            type: Number,
            trim: true,
            required: [true, "Please give a number of reps"]
        },
        sets: {
            type: Number,
            trim: true,
            required: [true, "Please give a number of sets"]
        },
        distance: {
            type: Number,
            trim: true,
            required: [true, "Please give a number of miles"]
        },
    }],
}, {
    toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
    }
});
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;