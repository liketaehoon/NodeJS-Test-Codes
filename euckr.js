var Iconv = require('iconv').Iconv;
var iconv = new Iconv('EUC-KR','UTF-8//TRANSLIT//IGNORE');

var text=unescape("%C1%A4%BB%F3%C3%B3%B8%AE+%B5%C7%BE%FA%BD%C0%B4%CF%B4%D9.");
var buf = new Buffer(text.length);
buf.write(text,0,text.length,'binary');
console.log(iconv.convert(buf).toString('UTF-8'));
