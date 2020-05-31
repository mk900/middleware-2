// middleware
function middleware(req, res, next) {
  req.reqDate = new Intl.DateTimeFormat().format()
  req.reqTime = new Date()
  req.reqLocalTime = req.reqTime.toLocaleTimeString()
  console.log(req.reqDate, req.reqLocalTime, '|', req.method, 'path from', req.url)

  res.on('finish', () => {
    const resTime = new Date()
    console.log('| total time:', (resTime - req.reqTime).toLocaleString(), 'ms')
    console.log('')
  })

  next()
}

module.exports = middleware