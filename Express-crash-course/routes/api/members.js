const express = require('express');
const router = express.Router();
const members = require('../../members');

router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
  const member = members.filter((member) => member.id === parseInt(req.params.id));
  if (member.length != 0) {
    res.json(member);
  } else {
    res.status(400).json({ msg: `No member with the id of: ${req.params.id}` });
  }
});

module.exports = router;
