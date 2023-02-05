const { getUserById } = require('../../models/user.model')

async function httpGetCurrentUser(req, res) {
  const id = req.user?.id
  console.log(req.user)
  if (!id) {
    return res.status(200).json(null)
  }

  try {
    const user = await getUserById(id)
    return res.status(200).json(user.data())
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: 'Could not find user' })
  }
}

module.exports = { httpGetCurrentUser }
