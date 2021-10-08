import { v4 } from 'uuid'

export function useCreateNewElement({ label, type, position }) {
  const getRandomId = () => v4();

  if (type === 'input') {
    return {
      id: getRandomId(),
      type,
      position,
      data: { label },
      sourcePosition: 'right',
    };
  } else if (type === 'default') {
    return {
      id: getRandomId(),
      type,
      position,
      data: { label },
      sourcePosition: 'right',
      targetPosition: 'left',
    };
  } else {
    return {
      id: getRandomId(),
      type,
      position,
      data: { label },
      targetPosition: 'left',
    };
  }
}