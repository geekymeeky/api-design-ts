import prisma from '../config/db'
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password)
    }
  })

  const token = createJWT(user)
  res.json({ token })
}

export const signin = async (req, res) => {
    const { username, password } = req.body

  const user = await prisma.user.findUnique({
    where: {
      username: username
    }
  })

  const isValid = await comparePasswords(password, user.password)

  if (!isValid) {
    res.status(401)
    res.json({message: 'nope'})
    return
  }

  const token = createJWT(user)
  res.json({ token })
}