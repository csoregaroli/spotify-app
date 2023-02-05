const { getUserById } = require('../../models/user.model')

async function httpGetCurrentUser(req, res) {
  const id = req.user?.id
  const user = await getUserById(id)
  return res.status(200).json(user.data())
}

module.exports = { httpGetCurrentUser }
