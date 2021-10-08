import { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
} from 'react-flow-renderer';

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function Board({ reactFlowWrapper }) {
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const label = prompt('Digite o valor:')

    if (!label) return

    if (type === 'input') {

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label },
        sourcePosition: 'right',
      };

      setElements((es) => es.concat(newNode));
    } else if (type === 'default') {

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label },
        sourcePosition: 'right',
        targetPosition: 'left',
      };

      setElements((es) => es.concat(newNode));
    } else {
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label },
        targetPosition: 'left',
      };

      setElements((es) => es.concat(newNode));
    }

  };

  return (
    <ReactFlow
      elements={elements}
      onConnect={onConnect}
      onElementsRemove={onElementsRemove}
      onLoad={onLoad}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  )
}