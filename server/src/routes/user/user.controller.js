async function httpGetAuthUser(req, res) {
  const id = req.user?.id
  console.log('userController', req.session)

  if (!id) return res.status(200).json(null)

  return res.status(200).json(id)
}

module.exports = { httpGetAuthUser }
