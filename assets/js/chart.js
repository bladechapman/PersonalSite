var ch = ch || {};

ch.mainChart = function(dom_elem, nodes) {

	this.nodes = nodes;
	this.links = []
	this.dom_elem = dom_elem;
	this.w = $(window).width();
	this.h = $(window).height() - 10;


	for(var i in this.nodes) {
		if(!this.nodes[i].root) {
			this.links.push({
				source: this.nodes[i],
				target: this.nodes[this.nodes[i].parentIdx]
			})
		}
	}

	this.canvas = d3.select(this.dom_elem)
					.append('svg')
						.attr({
							'width' : this.w,
							'height' : this.h,
							'class' : 'chart',
						})

	this.svg = this.canvas.append('g')
						.attr('id', 'graphic')

	this.node = this.svg.selectAll('g')
						.data(this.nodes)
						.enter().append('g')
							.attr('id', function(d) {
								if(d.root) {
									d.x = this.w/2;
									d.y = this.h/8;
									d.fixed = true;
									return 'root';
								}
								else return 'node';
							}.bind(this))
						.on('click', function(d) {
							if (d3.event.defaultPrevented) return; // ignore drag

							switch(d.text) {
								case "Projects":
									scrollToElement("#projects");
									break;
								case "About":
									scrollToElement("#about");
									break;
								case "Contact":
									scrollToElement("#contact");
									break;
								default:
									scrollToElement("#index");
							}
						})
	this.node
		.append('image')
			.attr('xlink:href', function(d) {
				if (!d.root) return d.image
			})
			.attr({
				'width' : function(d) {return d.r * 2.2},
				'height' : function(d) {return d.r * 2.2},
				"x" : function(d) {return -d.r * 1.1},
				"y" : function(d) {return -d.r * 1.1}
			})
	var textLayer = this.node
		.append('text')
			.text(function(d) {
				if(d.root) return
				return d.text
			})
			.attr('opacity', function(d) {
				if (!d.root) return 0;
			})
	textLayer.append('tspan')
			.text(function(d) {if(d.root) return 'Blade Chapman'})
			.attr('dy', '1.4em')
			.attr('x', '0')
			.attr('fill', "#BD3613")
	textLayer.append('tspan')
			.text(function(d) {if(d.root) return 'Developer & Student'})
			.attr('dy', '1.4em')
			.attr('x', '0')
			.attr('fill', '#0A2933')
	this.node
		.append('circle')
			.attr('r', function(d) {
				if(d.root) return 0;
				return d.r;
			})
			.attr('stroke', '#0A2933')
			.attr('stroke-width', '2px')
			.attr('fill', 'none')


	// force metrics need to scale to window size
	this.force = d3.layout.force()
					.charge(-5000)
					.gravity(0.1)
					.linkDistance(function() {
						// if(this.canvas.attr('width') < 640) return 500;
						// else return 400;
						return 400;
					}.bind(this))
					.size([this.w, this.h])
					.on("tick", this.tick.bind(this))

	this.node.call(this.force.drag)
}

ch.mainChart.prototype.start = function() {
	this.force
			.nodes(this.nodes)
			.links(this.links)
			.start()
}
ch.mainChart.prototype.tick = function() {
	this.node
		.attr('transform', function(d, i) {

			d.x = Math.max(d.r, Math.min(this.w - d.r, d.x));
			d.y = Math.max(d.r, Math.min(this.h - d.r, d.y));

			return 'translate(' + d.x + ', ' + d.y + ')';
		}.bind(this))
}
ch.mainChart.prototype.translateToCenter = function(dx) {
	// this.w = $(window).width()
	if(!dx) {
		dx = 0;
		this.sf = ($(window).width() < 750) ? ($(window).width() / 750) : 1;
	}

	this.canvas.attr('width', $(window).width())
	this.canvas.attr('height', $(window).height() - 10)
	this.svg.attr('transform', function() {
		var limit = 750;
		if (this.canvas.attr('width') < limit) {
			var w = this.canvas.attr('width');
			var new_w = w * this.sf;
			var difference = w - new_w;

			return 'translate(' + (dx + difference/2) +  ', ' + 0 + ')' + ' scale(' + this.sf + ')';
		}
		return 'translate(' + dx + ', ' + 0 + ')';
	}.bind(this));

	this.force.start()
}