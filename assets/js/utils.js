function flatten(nodes) {
	var rootIdx
	for (var i in nodes)
		if(nodes[i].root) rootIdx = i
	for (var i in nodes)
		if(!nodes[i].root) nodes[i].parentIdx = rootIdx;
}