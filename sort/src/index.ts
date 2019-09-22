import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from './Sorter'

const numbersCollection = new NumbersCollection([2, 7, 1, 6, 9])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)
