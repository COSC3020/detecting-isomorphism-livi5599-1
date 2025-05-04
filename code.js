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

    g1DegSeq.sort((a, b) => a-b);
    g2DegSeq.sort((a, b) => a-b);
    if (JSON.stringify(g1DegSeq) !== JSON.stringify(g2DegSeq)) { //O(1)
        return false;
    }

    // for (row = 0; row < graph1.length; row++) { //runs graph1 length v times -> O(v)
    //     if (JSON.stringify(graph1[row]) != JSON.stringify(graph2[row])) { //O(1)
    //         return false;
    //     }
    // }

    let nodes = [];

    for (let node = 0; node < graph1.length; node++) {
        nodes.push(node);
    }
    console.log("nodes = ", nodes);

    let perms = getAllPermutations(nodes);
    console.log("perms = ", perms);
    // console.log("perms[0] = ", perms[0]);
    // console.log("perms[2] = ", perms[2]);

    for (let p = 0; p < perms.length; p++) {
        let perm = perms[p];
        
        let tempGraph = [];
        for (let node = 0; node < graph1.length; node++) {
            tempGraph.push(Array(graph1.length).fill(0));
        }

        for (let row = 0; row < graph1.length; row++) {
            for (let column = 0; column < graph1.length; column++) {
                tempGraph[row][column] = graph1[perm[row]][perm[column]];
            }
        }

        if (JSON.stringify(tempGraph) == JSON.stringify(graph2)) {
            return true;
        }
    }

    return false; //O(1)
}

function getAllPermutations(arr) { // O(n!)
    if (arr.length === 0) { // O(1)
        return [[]]; // O(1)
    }

    if (arr.length === 1) { // O(1)
        return [arr]; // O(1)
    }

    var results = []; // O(1)

    for (var i = 0; i < arr.length; i++) { //// runs n times -> O(n) -> total runtime = O(n!)
        var first = arr[i]; //// O(1)
        var rest = arr.slice(0, i).concat(arr.slice(i + 1)); //// O(n^2)
        var subPerms = getAllPermutations(rest); //// O(n!)
        console.log("subPerms at i = ", i, " ", subPerms);
        for (var j = 0; j < subPerms.length; j++) { //// runs n times -> O(n) -> total runtime = O(n^3)
            results.push([first].concat(subPerms[j])); //// O(n^2)
            console.log("results = ", results);
        }
    }
    return results; // O(1)
}
