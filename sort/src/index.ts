class Sorter {

  constructor(public collection: number[] | string) {
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this, this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = leftHand
          }
        }
        if (typeof this.collection === 'string') {

        }
      }
    }

  }
}

const numArr: number[] = [2, 7, 1, 6, 9]
const sorter = new Sorter(numArr)
sorter.sort()
console.log(sorter.collection)
