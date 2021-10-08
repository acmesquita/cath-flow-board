const key = 'cath-flow-board'

export class ElementsRepository {
  static save(elements: any[]): void {
    const elementsJson = JSON.stringify(elements)
    localStorage.setItem(key, elementsJson)
  }

  static load(): [] {
    const board = localStorage.getItem(key)
    if (board) {
      return JSON.parse(board)
    }
    return []
  }
}