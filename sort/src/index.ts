import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from './Sorter'
import { CharactersCollection } from './CharatersCollection';
import { LinkedList } from './LinkedList'
import { link } from "fs";

// const numbersCollection = new NumbersCollection([2, 7, 1, 6, 9])
// const sorter1 = new Sorter(numbersCollection)
// sorter1.sort()
// console.log(numbersCollection.data)
// const charactersCollection = new CharactersCollection('ZuluziberaXexA')
// const sorter2 = new Sorter(charactersCollection)
// sorter2.sort()
// console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(5)
linkedList.add(-7)
linkedList.add(3)
linkedList.add(900)

const sorter3 = new Sorter(linkedList)

sorter3.sort()
linkedList.print()