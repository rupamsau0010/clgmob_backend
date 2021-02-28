const { json } = require('express');

// Import depandencies
var get_ip = require('ipware')().get_ip

// Import local depandencies

module.exports.getIPController_get = async(req, res) => {
    var ip = get_ip(req)
    console.log(ip);
    res.json({
        IPaddress: ip.clientIp
    })
}