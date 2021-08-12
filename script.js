
function funcCall() {
    var svg = d3.select(".tree").append("svg")
        .attr("width", 1500).attr("height", 1500)
        .append("g").attr("transform", "translate(360,140)");
    var data =
        [
            { "child": "8", "parent": "" },
            { "child": "3", "parent": "8" },
            { "child": "10", "parent": "8" },
            { "child": "1", "parent": "3" },
            { "child": "6", "parent": "3" },
            { "child": "14", "parent": "10" },
            { "child": "31", "parent": "10" },
            { "child": "13", "parent": "14" },
            { "child": "12", "parent": "14" },
            { "child": "13", "parent": "12" },
            { "child": "22", "parent": "12" },
            { "child": "23", "parent": "22" },
            { "child": "24", "parent": "23" },
            { "child": "25", "parent": "24" },
            { "child": "26", "parent": "25" },
            { "child": "27", "parent": "26" },
            { "child": "28", "parent": "27" },
            { "child": "29", "parent": "28" },
            { "child": "33", "parent": "22" },
            { "child": "34", "parent": "23" },
            { "child": "35", "parent": "24" },
            { "child": "36", "parent": "25" },
            { "child": "37", "parent": "6" },
            { "child": "38", "parent": "37" },
            { "child": "null", "parent": "6" },

            // { "child": "null", "parent": "1" },

            // { "child": "null", "parent": "1" },
            // { "child": "39", "parent": "38" }
            // { "child": "Mark", "parent": "Ann" },
            // { "child": "Angel", "parent": "Sarah" },
            // { "child": "Tom", "parent": "Hannah" },
            // { "child": "Tom2", "parent": "Hannah" },
            // { "child": "Angel1", "parent": "Angel" },
            // { "child": "Angel2", "parent": "Angel" },
            // { "child": "Tom1", "parent": "Tom" },
            // { "child": "Tom2", "parent": "Tom" },

            // { "child": "Angel21", "parent": "Angel2" },
            // { "child": "Angel22", "parent": "Angel2" },
            // { "child": "Tom11", "parent": "Tom1" },
            // { "child": "Tom12", "parent": "Tom1" }
        ];

    var datastructure = d3.stratify()
        .id(function (d) { return d.child; })
        .parentId(function (d) { return d.parent; })
        (data);


    // 22 -> 700
    // 7 -> 200

    var ht = data.length * 38;
    var wt = 600;
    if (data.length > 22) {
        var diff = data.length - 22;
        wt = wt + diff * 1.2;
    }
    var treeStructure = d3.tree().size([wt, ht]);
    var information = treeStructure(datastructure);

    var connections = svg.append("g").selectAll("path")
        .data(information.links());

    connections.enter().append("path")
        .attr('fill', 'none')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 2)
        .attr('class', 'path')
        .attr("d", function (d) {
            // return "M" + d.source.x + "," + d.source.y + "C" +
            //     d.source.x + "," + (d.source.y + d.target.y) / 2 + " " +
            //     d.target.x + "," + (d.source.y + d.target.y) / 2 + " " +
            //     d.target.x + "," + d.target.y;
            return 'M' + d.source.x + ',' + d.source.y + ',' + d.target.x + ' ' + d.target.y;
            return diagonal(d);
        });


    var circles = svg.append("g").selectAll("circle").data(information.descendants());
    circles.enter().append("circle")
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; })
        .attr("r", 15);



    var names = svg.append("g").selectAll("text")
        .data(information.descendants());

    names.enter().append("text")
        .text(function (d) { return d.data.child; })
        .attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y + 4; });
}
funcCall();