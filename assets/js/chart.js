var ch = ch || {};

ch.test = 'test'

ch.mainChart = function(dom_elem, nodes) {

	this.nodes = nodes;
	this.links = []
	this.dom_elem = dom_elem;
	this.w = $(window).width();
	this.h = $(window).height();

	for(var i in this.nodes) {
		if(!this.nodes[i].root) {
			this.links.push({
				source: this.nodes[i],
				target: this.nodes[this.nodes[i].parentIdx]
			})
		}
	}

	this.svg = d3.select(this.dom_elem)
					.append('svg')
						.attr({
							'width' : this.w,
							'height' : this.h,
							'class' : 'chart'
						});

	this.svg.append('defs').append('clipPath')
				.attr('id', 'clip')
			.append('circle')
				.attr('r', 80)

	this.node = this.svg.selectAll('g')
						.data(this.nodes)
						.enter().append('g')
							.attr('id', function(d) {
								if(d.root) return 'root';
								else return 'node';
							})

	this.node
		.append('image')
			.attr('xlink:href', function(d) {
				return d.image
			})
			.attr({
				'width' : function(d) {return d.r * 2.2},
				'height' : function(d) {return d.r * 2.2},
				"x" : function(d) {return -d.r * 1.1},
				"y" : function(d) {return -d.r * 1.1}
			})

	this.node
		.append('text')
			.text(function(d) {
				return d.text
			})
			.attr('opacity', '0')

	this.node
		.append('circle')
			.attr('r', function(d) {
				return d.r;
			})
			.attr('stroke', '#708284')
			.attr('stroke-width', '2px')
			.attr('fill', 'none')


	// force metrics need to scale to window size
	this.force = d3.layout.force()
					.charge(-3000)
					.gravity(0.1)
					.linkDistance(function() {
						if($(window).width() < 640) return 175;
						else return 250;
					})
					.size([this.w, this.h])
					.on("tick", this.tick.bind(this))

	this.node.call(this.force.drag)
}

ch.mainChart.prototype.start = function() {
	console.log(this)

	this.force
			.nodes(this.nodes)
			.links(this.links)
			.start()
}

ch.mainChart.prototype.tick = function() {

	// this.node
	// 	.attr("cx", function(d) { return d.x = Math.max(d.r/2, Math.min(this.w - d.r/2, d.x)); })
	// 	.attr("cy", function(d) { return d.y = Math.max(d.r/2, Math.min(this.h - d.r/2, d.y)); });

	this.node
		.attr('transform', function(d, i) {
			// console.log(this.w)
			d.x = Math.max(d.r, Math.min(this.w - d.r, d.x));
			d.y = Math.max(d.r, Math.min(this.h - d.r, d.y));

			return 'translate(' + d.x + ', ' + d.y + ')';
		}.bind(this))
}