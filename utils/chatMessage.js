const moment = require('moment');

const formatMessage = (data) => {
    msg = {
        from:data.fromUser,
        to:data.toUser,
        message:data.msg,
        date: moment().format("DD-MM-YYYY"),
        time: moment().format("hh:mm a")
    }
    return msg;
}
module.exports=formatMessage;