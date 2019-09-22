import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from './Sorter'
import { CharactersCollection } from './CharatersCollection';
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([2, 7, 1, 6, 9])
numbersCollection.sort()
console.log(numbersCollection.data)
const charactersCollection = new CharactersCollection('ZuluziberaXexA')
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(5)
linkedList.add(-7)
linkedList.add(3)
linkedList.add(900)

linkedList.sort()
linkedList.print()