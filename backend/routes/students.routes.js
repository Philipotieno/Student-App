let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Student Model
let studentSchema = require('../database/Models/Student');


// Create students
router.route('/').post((req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// Read Students
router.route('/').get((req, res) => {
    studentSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single Student
router.route('/:id').get((req, res) => {
    studentSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res. json(data)
        }
    })
})

// Update Students
router.route('/:id').put((req, res, next) => {
    studentSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            console.log('Student updated successfully')
            res.json(req.body)
        }
    })
})

router.route('/:id').delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;