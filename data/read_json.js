console.log("Hello");


d3.json("readme.json", function(error, imports) {
  if (error) throw error;

  // Creates 2 empty maps which are like dictionarys in Python.
  var indexByName = d3.map(),
      nameByIndex = d3.map(),
      matrix = [],
      n = 0;

  // Returns the Flare package name for the given class name.
  function name(name) {
    return name.substring(0, name.lastIndexOf(".")).substring(6);
  }

  // Compute a unique index for each package name.
  imports.forEach(function(d) {
    if (!indexByName.has(d = name(d.name))) {
      nameByIndex.set(n, d);
      indexByName.set(d, n++);
    }
  });

  // Construct a square matrix counting package imports.
  imports.forEach(function(d) {
    var source = indexByName.get(name(d.name)),
        row = matrix[source];
    if (!row) {
     row = matrix[source] = [];
     for (var i = -1; ++i < n;) row[i] = 0;
    }
    d.imports.forEach(function(d) { row[indexByName.get(name(d))]++; });
  });

  chord.matrix(matrix);

  var g = svg.selectAll(".group")
      .data(chord.groups)
    .enter().append("g")
      .attr("class", "group");

  g.append("path")
      .style("fill", function(d) { return fill(d.index); })
      .style("stroke", function(d) { return fill(d.index); })
      .attr("d", arc);

  g.append("text")
      .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
      .attr("dy", ".35em")
      .attr("transform", function(d) {
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
            + "translate(" + (innerRadius + 26) + ")"
            + (d.angle > Math.PI ? "rotate(180)" : "");
      })
      .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
      .text(function(d) { return nameByIndex.get(d.index); });

  svg.selectAll(".chord")
      .data(chord.chords)
    .enter().append("path")
      .attr("class", "chord")
      .style("stroke", function(d) { return d3.rgb(fill(d.source.index)).darker(); })
      .style("fill", function(d) { return fill(d.source.index); })
      .attr("d", d3.svg.chord().radius(innerRadius));

});
