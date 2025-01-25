class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " => " + [...this.adjacencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  dfs(startNode) {
    const stack = [startNode];
    const visited = new Set();
    const result = [];

    if (!this.adjacencyList[startNode]) {
      console.log("Starting node does not exist in the graph.");
      return result;
    }

    while (stack.length) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }

    return result;
  }

  bfs(startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];

    if (!this.adjacencyList[startNode]) {
      console.log("Starting node does not exist in the graph.");
      return result;
    }

    while (queue.length) {
      const vertex = queue.shift();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
    return result;
  }

  checkTwoNodesareConnected(vertex1, vertex2) {
    return (
      this.hasEdge(vertex1, vertex2) || this.bfs(vertex1).includes(vertex2)
    );
  }

  shortestPath(startNode, endNode) {
    const queue = [[startNode]];
    const visited = new Set();

    if (!this.adjacencyList[startNode] || !this.adjacencyList[endNode]) {
      console.log("One or both of the nodes do not exist in the graph.");
      return [];
    }

    while (queue.length) {
      const path = queue.shift();
      const vertex = path[path.length - 1];

      if (vertex === endNode) {
        return path;
      }

      if (!visited.has(vertex)) {
        visited.add(vertex);

        for (const neighbor of this.adjacencyList[vertex]) {
          const newPath = [...path, neighbor];
          queue.push(newPath);
        }
      }
    }

    return [];
  }

  detectCycle() {
    const visited = new Set();

    const stack = [];

    for (let vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        stack.push([vertex, null]);

        while (stack.length > 0) {
          const [currentNode, parent] = stack.pop();

          if (!visited.has(currentNode)) {
            visited.add(currentNode);

            for (const neighbor of this.adjacencyList[currentNode]) {
              if (visited.has(neighbor) && neighbor !== parent) {
                return true;
              }

              stack.push([neighbor, currentNode]);
            }
          }
        }
      }
    }
    return false;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log("Graph structure:");
graph.display();

console.log(graph.dfs("A"));
console.log(graph.bfs("A"));

// this.adjacencyList = {
//   A: ['B', 'C'],
//   B: ['A', 'D', 'E'],
//   C: ['A', 'F'],
//   D: ['B'],
//   E: ['B', 'F'],
//   F: ['C', 'E']
// };
