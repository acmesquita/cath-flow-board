import { useEffect, useState } from "react";
import { ElementsRepository } from "../repositories/elements-repository";
import { removeElements, addEdge } from 'react-flow-renderer';

export function useElements() {
  const [elements, setElements] = useState([]);

  function removeElement(element) {
    setElements((els) => removeElements(element, els));
  }

  function addConnect(params) {
    setElements((els) => addEdge(params, els));
  }

  function addElement(newNode) {
    setElements((es) => es.concat(newNode))
  }

  useEffect(() => {
    const els = ElementsRepository.load()
    setElements(els)
  }, [])

  useEffect(() => {
    ElementsRepository.save(elements)
  }, [elements])

  return {
    elements,
    removeElement,
    addConnect,
    addElement
  }
}