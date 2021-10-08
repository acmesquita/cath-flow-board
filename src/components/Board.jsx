import { useState } from 'react';
import ReactFlow, { Controls, Background } from 'react-flow-renderer';

import { useCreateNewNode } from '../hooks/useCreateNewNode'
import { useElements } from '../hooks/useElement';

export default function Board({ reactFlowWrapper }) {
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const { elements, removeElement, addConnect, addElement } = useElements()

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

    addElement(useCreateNewNode({
      label,
      type,
      position
    }))
  };

  return (
    <ReactFlow
      elements={elements}
      onConnect={addConnect}
      onElementsRemove={removeElement}
      onLoad={setReactFlowInstance}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  )
}