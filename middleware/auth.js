import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from '../errors/index.js'
// const auth = async (req, res, next) => {
//   // const headers = req.headers
//   console.log(req.cookies)
//   const authHeader = req.headers.authorization
//   // console.log(headers)
//   // console.log(authHeader)
//   if (!authHeader || !authHeader.startsWith('Bearer')) {
//     throw new UnAuthenticatedError('Authentication invalid')
//   }
//   const token = authHeader.split(' ')[1]
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET)
//     // console.log(payload)
//     const testUser = payload.userId === '64a730218ab3f7a2d5ad1e50'
//     req.user = { userId: payload.userId, testUser }
//     next()
//   } catch (error) {
//     throw new UnAuthenticatedError('Authentication invalid')
//   }
// }

//with cookies
const auth = async (req, res, next) => {
  // const headers = req.headers
  //console.log(req.cookies)
  const token = req.cookies.token
  if (!token) {
    throw new UnAuthenticatedError('Authentication invalid')
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(payload)
    const testUser = payload.userId === '64a730218ab3f7a2d5ad1e50'
    req.user = { userId: payload.userId, testUser }
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication invalid')
  }
}

export default auth
