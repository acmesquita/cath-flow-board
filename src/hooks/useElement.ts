import { useEffect, useState } from "react";
import { ElementsRepository } from "../repositories/elements-repository";

export function useElements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const els = ElementsRepository.load()
    setElements(els)
  }, [])

  useEffect(() => {
    ElementsRepository.save(elements)
  }, [elements])

  return {
    elements,
    setElements
  }
}