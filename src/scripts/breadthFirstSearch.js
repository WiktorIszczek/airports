import { airports, routes } from "data/airportsList";
// Creating graph and map
const connectionsMap = new Map();
let historyMap = new Map();

// F: Adding empty arays to Maps
function addNode(airport) {
  connectionsMap.set(airport, []);
  historyMap.set(airport, []);
}
airports.forEach(addNode);

// F: Add round-trip connections to Map 
function addEdge(origin, destination) {
  connectionsMap.get(origin).push(destination);
  connectionsMap.get(destination).push(origin);
}
routes.forEach((route) => addEdge(...route));

export function BreadthFirstSearch(start, end) {
  const visited = new Set();
  const queue = [start];

  visited.add(start);

  //Do when queue is not empty
  while (queue.length > 0) {
    //Get airport and remove it from the list
    const airport = queue.shift(); 
    //Get all airports that are connected
    const portsToCheck = connectionsMap.get(airport);
    //if the port has not been visited, add it to the queue, visited and history
    for (const port of portsToCheck) {
      if (!visited.has(port)) {
        visited.add(port);
        queue.push(port);
        historyMap.get(airport).push(port);//creating history map
      }
    }
  }
  let wayBack = end;
  let route = [end];
  //reconstruction of the way back
  while (wayBack != start) {
    for (const [key, value] of historyMap) {
      if (value.includes(wayBack)) {
        wayBack = key;
        route.push(wayBack);
      }
    }
  }
  route.reverse();
  console.log(`trasa z ${start} do ${end}:`);
  return route;
}
