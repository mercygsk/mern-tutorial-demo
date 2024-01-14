const express = require('express');
const router = express.Router();
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware');

// you could update to 
// router.route('/').get(getGoals).post(setGoal)
// and 
// router.route('/:id).delete(deleteGoal).put(updateGoal)
// but the below code matches better with the coding style in class

router.get('/', protect, getGoals
// move this functionality to the controller
// (req, res) => {
//     res.status(200).json({message: 'get goals'});
// }
);

router.post('/', protect, setGoal);

router.put('/:id', protect, updateGoal);

router.delete('/:id', protect, deleteGoal);

module.exports = router;