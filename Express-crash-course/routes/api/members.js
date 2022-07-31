const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');

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

// Create member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include name and email' });
  }
  members.push(newMember);
  res.json(members);
});

// Update member
router.patch('/:id', (req, res) => {
  let index;
  const found = members.find((mem, i) => {
    index = i;
    return mem.id === parseInt(req.params.id);
  });
  if (!found) {
    return res.status(400).json({ msg: `ID: ${req.params.id}, does not exist` });
  }
  members[index].name = req.body.name;
  members[index].email = req.body.email;
  members[index].status = req.body.status;
  res.json(members);
});

router.delete('/:id', (req, res) => {
  let index;
  const found = members.find((mem, i) => {
    index = i;
    return mem.id === parseInt(req.params.id);
  });
  if (!found) {
    return res.status(400).json({ msg: `ID: ${req.params.id}, does not exist` });
  }
  members.splice(index, 1);
  res.json(members);
});

module.exports = router;
