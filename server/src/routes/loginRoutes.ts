import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send(`
  <div>
    <h1>Hello Routes</h1>
  </div>
  `)
})

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="em" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type password />
    </div>
    <button>Submit</button>
  </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body
  if (email) {
    res.send(email.toUpperCase())
  } else {
    res.send('Need Email')
  }
})

export { router }