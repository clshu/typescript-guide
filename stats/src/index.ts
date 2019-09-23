import { MatchResults } from './MatchResults'
import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'

// Create an object that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of MatchReader and pass a 'DataReader'
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeTeamWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayTeamWin) {
    manUnitedWins++
  }
}

console.log(manUnitedWins)