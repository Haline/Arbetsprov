var CurrentTime = (function () {
    var self = this;


    CurrentTime.prototype.getTimeAndDate = function () {
    	var d = new Date();
    	var y = d.getFullYear();
    	var m = ('0'+(d.getMonth()+1)).slice(-2); 
    	var dt = ('0'+d.getDate()).slice(-2); 
    	var h = ('0'+d.getHours()).slice(-2); 
    	var min = ('0'+d.getMinutes()).slice(-2);


    	var td = y + '-' + m + '-' + dt + ' ' + h + ':' + min;

    	return td;
    };
});