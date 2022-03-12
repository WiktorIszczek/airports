import React,{useState} from "react";
import PortSelector from "components/PortSelector/PortSelector.js";
import TopBar from "components/TopBar/TopBar";
import PathList from "components/PathList/PathList";
import { BreadthFirstSearch } from "scripts/breadthFirstSearch";


const Root = () => {
  const [pathPort=["ATH"],setpathPort] = useState();
  
  const doBFS = (startPort, endPort) => {
    setpathPort(BreadthFirstSearch(startPort,endPort));
  };

  return (
    <>
      <TopBar />
      <PortSelector doBFS={doBFS}/>
      <PathList pathPort={pathPort}/>
    </>
  );
};

export default Root;
