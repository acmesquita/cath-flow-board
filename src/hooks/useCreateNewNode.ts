import { v4 as generateRandomID } from 'uuid'

export function useCreateNewNode({ label, type, position }) {
  const createNode = (sourcePosition, targetPosition = undefined) => ({
    id: generateRandomID(),
    type,
    position,
    data: { label },
    sourcePosition,
    targetPosition
  })

  switch (type) {
    case 'input': return createNode('right')
    case 'default': return createNode('right', 'left')
    case 'output': return createNode(undefined, 'left')
    default: return {}
  }
}