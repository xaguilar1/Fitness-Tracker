const Workout = require("../models/schema");
module.exports = function (app) {
    app.get("/api/workouts/range", function (req, res) {
        Workout.find({}).then(function (data) {
            console.log(data)
            res.json(data)
        }).catch(err => {
            res.json(err);
        });
    });
    
    app.get("/api/workouts", function (req, res) {
        Workout.find({}).then(function (data) {
            console.log(data[0].toObject())
            console.log(typeof(data))
            let sum = 0;
            data[0].exercises.forEach((item) => {
                sum += item.duration
            })
            data.totalDuration = sum
            console.log(data)
            res.json(data)
        }).catch(err => {
            res.json(err);
        });
    });
      
    app.post("/api/workouts", function (req, res) {
        Workout.create({
            day: new Date().setDate(new Date().getDate()),
            exercises: []
          })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });
    
    app.put("/api/workouts/:id", function (req, res) {
        console.log(req.body)
        Workout.update({_id: req.params.id},{$push: { exercises: req.body }})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });

})
};
