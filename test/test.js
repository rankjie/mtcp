var net = require('net');
var mtcp = require('../lib/mtcp');

var host="2620:107:300f::b8a9:b32f";
host="127.0.0.1";
host="www.wsmlby.info";


console.log("forward locathost 10029 to "+host+ "9999");
require('../lib/pipeserver')
    .startServer(net,mtcp,8003,host,10029);

