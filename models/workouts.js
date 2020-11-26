const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: [true, "Enter an exercise type!"]
        },
        name: {
            type: String,
            trim: true,
            required: [true, "Enter an exercise name!"]
        },
        duration: {
            type: Number,
            trim: true,
            required: [true, "Enter duration of exercise!"]
        },
        weight: {
            type: Number,
            trim: true,
            required: [true, "Enter weight #!"]
        },
        reps: {
            type: Number,
            trim: true,
            required: [true, "Enter # of reps!"]
        },
        sets: {
            type: Number,
            trim: true,
            required: [true, "Enter # of sets!"]
        },
        distance: {
            type: Number,
            trim: true,
            required: [true, "Enter # of miles!"]
        },
    }],
}, {
    toJSON: {
        virtuals: true
    }
});
            workoutSchema.virtual("totalDuration").get(function () {
            return this.exercises.reduce((total, exercise) => {
                     return total + exercise.duration;
                      }, 0);
                      });
                    const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
