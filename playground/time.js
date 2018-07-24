var moment= require('moment');

var someTimestamp=moment().valueOf();
console.log(someTimestamp);

var createdAt= 1532452912710;
var date=moment(createdAt);
console.log(date.format('h:mm a'))