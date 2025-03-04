import jwt from 'jsonwebtoken'

export const authenticate = (handler) => async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded
    return handler(req, res)
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
}