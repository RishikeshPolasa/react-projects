import React, { useState } from "react";
import data from "./data.json";
import { Wrapper, NameWrapper, PopupWrapper, Input, Popup } from "./Style";

function FileExplorer() {
  const [nodes, setNodes] = useState(data);
  const [addNode, setAddNode] = useState({});
  const [popup, setPopup] = useState(false);
  console.log(nodes);
  const renderChildren = (children, mar) => {
    return children?.map((child) => {
      return (
        <Wrapper margin={mar}>
          <NameWrapper>
            <div>{child?.name}</div>
            {child?.isFolder && (
              <div onClick={() => handlePopup(child?.path, true)}>
                Add folder
              </div>
            )}
            <div onClick={() => handlePopup(child?.path, false)}>Add file</div>
          </NameWrapper>
          {renderChildren(child?.children, mar + 4)}
        </Wrapper>
      );
    });
  };

  const handleAddNode = (node, curNodes, path) => {
    //path: src/components
    //node is login folder
    const pathParts = path.split("/");
    const curNode = pathParts[0];
    const restPath = pathParts?.slice(1)?.join("/");
    // debugger;
    return curNodes.map((cur) => {
      if (cur?.name === curNode) {
        if (!restPath) {
          return {
            ...cur,
            children: [...cur.children, node],
          };
        } else {
          return {
            ...cur,
            children: handleAddNode(node, cur.children, restPath),
          };
        }
      }
      return cur;
    });
  };

  const handleSubmitNode = () => {
    const name = addNode?.name;
    if (!name) {
      alert("please add the name for file/folder");
      return;
    }
    const updatedNode = {
      ...addNode,
      path: addNode?.path + "/" + name,
      children: [],
    };
    debugger;
    setNodes((prev) => handleAddNode(updatedNode, prev, addNode.path));
    setPopup(false);
    setAddNode({});
  };

  const handlePopup = (path, isFolder) => {
    setPopup(true);
    setAddNode((prev) => ({
      ...prev,
      path,
      isFolder,
    }));
  };
  console.log(addNode);
  return (
    <div>
      File explorer
      {nodes.map((f) => {
        return (
          <Wrapper>
            <NameWrapper>
              <div>{f?.name}</div>
              {f?.isFolder && (
                <div onClick={() => handlePopup(f?.path, true)}>Add folder</div>
              )}
              <div onClick={() => handlePopup(f?.path, false)}>Add file</div>
            </NameWrapper>
            {renderChildren(f?.children, 4)}
          </Wrapper>
        );
      })}
      <Popup popup={popup}>
        <PopupWrapper>
          <div onClick={() => setPopup(false)}>close</div>
          <Input
            value={addNode?.name ?? ""}
            onChange={(e) =>
              setAddNode((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            required
          />
          <button onClick={() => handleSubmitNode()}>Add node</button>
        </PopupWrapper>
      </Popup>
    </div>
  );
}

export default FileExplorer;
