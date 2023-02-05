async function httpGetAuthUser(req, res) {
  const id = req.user?.id

  if (!id) {
    return res.status(200).json(null)
  }

  try {
    return res.status(200).json(id)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: 'Could not find user' })
  }
}

module.exports = { httpGetAuthUser }
