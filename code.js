function are_isomorphic(graph1, graph2) { //O(v!)
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

    for (row = 0; row < graph2.length; row++) { //runs graph2 length t times -> O(v^2)
        for (column = 0; column < graph2.length; column++) { //runs graph2 length t times -> O(v)
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

    for (row = 0; row < graph2.length; row++) { //runs graph2 length t times -> O(v^2)
        let degCounter = 0; //O(1)
        for (column = 0; column < graph2.length; column++) { //runs graph2 length t times -> O(v)
            if (graph2[row][column] == 1) { //O(1)
                degCounter += 1;
            }
        }
        g2DegSeq.push(degCounter); //O(1)
    }

    let sortedG1DegSeq = [...g1DegSeq].sort((a, b) => a - b); //O(1)
    let sortedG2DegSeq = [...g2DegSeq].sort((a, b) => a - b); //O(1)

    if (JSON.stringify(sortedG1DegSeq) !== JSON.stringify(sortedG2DegSeq)) { 
        return false;
    }

    let nodes = []; //O(1)

    for (let node = 0; node < graph1.length; node++) { //runs graph1 length v times -> O(v)
        nodes.push(node); //O(1)
    }

    let perms = getAllPermutations(nodes); //O(v!)

    for (let perm of perms) { //runs perms length
        let tmp = Array.from({ length: graph1.length }, () =>
            Array(graph1.length).fill(0) //O(v)
        );
        for (let r = 0; r < graph1.length; r++) { //runs graph length v times -> O(v^2)
            for (let c = 0; c < graph1.length; c++) { //runs graph length v times -> O(v)
                tmp[r][c] = graph1[perm[r]][perm[c]]; //O(1)
            }
        }
        if (JSON.stringify(tmp) === JSON.stringify(graph2)) { //O(1)
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

    for (var i = 0; i < arr.length; i++) { // runs n times -> O(n) -> total runtime = O(n!)
        var first = arr[i]; // O(1)
        var rest = arr.slice(0, i).concat(arr.slice(i + 1)); // O(n)
        var subPerms = getAllPermutations(rest); // O(n!)
        console.log("subPerms at i = ", i, " ", subPerms);
        for (var j = 0; j < subPerms.length; j++) { // runs n times -> O(n) -> total runtime = O(n^2)
            results.push([first].concat(subPerms[j])); // O(n)
            console.log("results = ", results);
        }
    }
    return results; // O(1)
}
