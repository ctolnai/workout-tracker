const router = require('express').Router();
const { Workout } = require('../../models');
const path = require('path');


router.get("/", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration :{
                    $sum: "excercises.duration",
                },
            },
        },
    ])
        .then(dbWorkout => {
            console.log(dbWorkout[0])
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/:id", (req, res) => {
    Workout.findById({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post('/', (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/:id', ({body, params}, res) => {
    console.log(body)
    Workout.findByIdAndUpdate(params.id, 
        [{exercises: body}],)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;
