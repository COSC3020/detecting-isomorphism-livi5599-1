function are_isomorphic(graph1, graph2) {
    if (graph1.length != graph2.length) { //O(1)
        return false;
    }

    let g1Edges = 0; //O(1)
    let g2Edges = 0; //O(1)

    for (row = 0; row < graph1.length; row++) { //runs graph1 length v times -> O(v^2)
        for (column = 0; column < graph1.length; column++) { //runs graph1 length v times -> O(v)
            if (graph1[row][column] == 1) { //O(1)
                g1Edges += 1;
            }
        }
    }

    for (row = 0; row < graph2.length; row++) { //runs graph2 length t times -> O(t^2)
        for (column = 0; column < graph2.length; column++) { //runs graph2 length t times -> O(t)
            if (graph2[row][column] == 1) { //O(1)
                g2Edges += 1;
            }
        }
    }

    if (g1Edges != g2Edges) { //O(1)
        return false;
    }

    let g1DegSeq = []; //O(1)
    let g2DegSeq = []; //O(1)

    for (row = 0; row < graph1.length; row++) { //runs graph1 length v times -> O(v^2)
        let degCounter = 0; //O(1)
        for (column = 0; column < graph1.length; column++) { //runs graph1 length v times -> O(v)
            if (graph1[row][column] == 1) { //O(1)
                degCounter += 1;
            }
        }
        g1DegSeq.push(degCounter); //O(1)
    }

    for (row = 0; row < graph2.length; row++) { //runs graph2 length t times -> O(t^2)
        let degCounter = 0; //O(1)
        for (column = 0; column < graph2.length; column++) { //runs graph2 length t times -> O(t)
            if (graph2[row][column] == 1) { //O(1)
                degCounter += 1;
            }
        }
        g2DegSeq.push(degCounter); //O(1)
    }

    if (JSON.stringify(g1DegSeq) != JSON.stringify(g2DegSeq)) { //O(1)
        return false;
    }

    for (row = 0; row < graph1.length; row++) { //runs graph1 length v times -> O(v)
        if (JSON.stringify(graph1[row]) != JSON.stringify(graph2[row])) { //O(1)
            return false;
        }
    }
    return true; //O(1)
}
