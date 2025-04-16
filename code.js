function are_isomorphic(graph1, graph2) {
    if (graph1.length != graph2.length) {
        return false;
    }

    let g1Edges = 0;
    let g2Edges = 0;

    for (row = 0; row < graph1.length; row++) {
        for (column = 0; column < graph1.length; column++) {
            if (graph1[row][column] == 1) {
                g1Edges += 1;
            }
        }
    }

    for (row = 0; row < graph2.length; row++) {
        for (column = 0; column < graph2.length; column++) {
            if (graph2[row][column] == 1) {
                g2Edges += 1;
            }
        }
    }

    if (g1Edges != g2Edges) {
        return false;
    }

    let g1DegSeq = [];
    let g2DegSeq = [];

    for (row = 0; row < graph1.length; row++) {
        let degCounter = 0;
        for (column = 0; column < graph1.length; column++) {
            if (graph1[row][column] == 1) {
                degCounter += 1;
            }
        }
        g1DegSeq.push(degCounter);
    }

    for (row = 0; row < graph2.length; row++) {
        let degCounter = 0;
        for (column = 0; column < graph2.length; column++) {
            if (graph2[row][column] == 1) {
                degCounter += 1;
            }
        }
        g2DegSeq.push(degCounter);
    }

    if (JSON.stringify(g1DegSeq) != JSON.stringify(g2DegSeq)) {
        return false;
    }

    for (row = 0; row < graph1.length; row++) {
        if (JSON.stringify(graph1[row]) != JSON.stringify(graph2[row])) {
            return false;
        }
    }
    return true;
}
