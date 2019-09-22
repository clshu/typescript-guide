import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from './Sorter'
import { CharactersCollection } from "./CharatersCollection";

const numbersCollection = new NumbersCollection([2, 7, 1, 6, 9])
const sorter1 = new Sorter(numbersCollection)
sorter1.sort()
console.log(numbersCollection.data)
const charactersCollection = new CharactersCollection('ZuluziberaXexA')
const sorter2 = new Sorter(charactersCollection)
sorter2.sort()
console.log(charactersCollection.data)
