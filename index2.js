var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 26228;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  switch(path){
    case  '/':
      var htmlString = fs.readFileSync('./BEich.html')
      response.setHeader('Content-Type','text/html;charset=utf-8')
      response.end(htmlString)		
      break
    case '/style.css':
      var cssString = fs.readFileSync('./style.css')
      response.setHeader('Content-Type','text/css')
      response.end(cssString)
      break
	case '/print-style.css':
      var cssString = fs.readFileSync('./print-style.css')
      response.setHeader('Content-Type','text/css')
      response.end(cssString)
      break
    case '/main.js':
      var jsString = fs.readFileSync('./main.js')
      response.setHeader('Content-Type','application/javascript')
      response.end(jsString)
      break
    case '/data.json':
      response.setHeader('Content-Type','application/json')
      response.end('{"name":"frank","age":18}')
    default:
      response.end('404')
      break
  }

  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 26228 成功')
