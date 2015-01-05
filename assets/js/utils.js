function flatten(nodes) {
	var rootIdx
	for (var i in nodes)
		if(nodes[i].root) rootIdx = i
	for (var i in nodes)
		if(!nodes[i].root) nodes[i].parentIdx = rootIdx;
}

function scrollToElement(selector, time, verticalOffset) {
    var time = typeof(time) != 'undefined' ? time : 500;
    var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    var element = $(selector);
    if (typeof(element.offset()) == 'undefined') {
        return;
    }
    var offset = element.offset();
    var offsetTop = offset.top + verticalOffset;


    $('html, body').animate({ scrollTop: offsetTop }, time);
}