const testUser = require('../middleware/testUser');
const {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
  showStats,
} = require('../controllers/jobs');
const express = require('express');
const router = express.Router();

router.route('/').get(getAllJobs).post(testUser, createJob);
router.route('/stats').get(showStats);
router
  .route('/:id')
  .get(getJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob);

module.exports = router;
