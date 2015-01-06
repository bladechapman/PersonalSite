
var nodes = [
	{
		'name' : 'test1',
		'r' : 80,
		'root' : true,
		'image' : 'assets/img/pic.png',
		'text' : ''
	},
	{
		'name' : 'test2',
		'r' : 80,
		'image' : 'assets/img/about.png',
		'text' : 'About'
	},
	{
		'name' : 'test2',
		'r' : 80,
		'image' : 'assets/img/contacts.png',
		'text' : 'Contact'
	},
	{
		'name' : 'test2',
		'r' : 80,
		'image' : 'assets/img/projects.png',
		'text' : 'Projects'
	},

];

flatten(nodes)

var mainChart = new ch.mainChart("#index", nodes);
mainChart.start();

var oldWidth = $(window).width();
$(window).resize(function() {
	var dx = $(window).width() - oldWidth;
	mainChart.translateToCenter.bind(mainChart)(dx/2)
})