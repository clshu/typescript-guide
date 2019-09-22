export class NumbersCollection {
  constructor(public data: number[]) { }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
  // Set up getter so it can be called without ()
  get length(): number {
    return this.data.length
  }
}