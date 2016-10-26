import express from 'express'
import forceSSL from 'express-force-ssl'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import csrf from 'csurf'
import path from 'path'
import compression from 'compression'
import { env, ip, port, root } from 'config'

const app = express()

if (env === 'production') {
  app.set('forceSSLOptions', {
    enable301Redirects: true,
    trustXFPHeader: true
  })
  app.use(forceSSL)
}

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(csrf({ cookie: true }))
app.use(compression())
app.use(express.static(path.join(root, 'dist')))

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on http://${ip}:${port}`)
  }
})

export default app
