// middleware
function middleware(req, res, next) {
  startDate = new Intl.DateTimeFormat().format()
  startTime = new Date()
  startLocalTime = startTime.toLocaleTimeString()
  console.log(startDate, startLocalTime, '|', req.method, 'path from', req.url)

  res.on('finish', () => {
    const resTime = new Date()
    console.log('| total time:', (resTime - startTime).toLocaleString(), 'ms')
    console.log('')
  })

  next()
}

module.exports = middleware