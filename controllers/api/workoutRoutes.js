const router = require('express').Router();
const { Workout } = require('../../models');


router.get("/", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration :{
                    $sum: "$exercises.duration",
                },
            },
        },
    ])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.get("/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration :{
                    $sum: "$exercises.duration",
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
    Workout.findByIdAndUpdate(params.id, 
        {$push: {exercises: body}
    })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;
