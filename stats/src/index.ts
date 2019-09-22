import { CsvFileReader } from "./CSVFileReader"


const reader = new CsvFileReader('football.csv')
reader.read()

enum MatchResults {
  HomeTeamWin = 'H',
  AwayTeamWin = 'A',
  Draw = 'D'
}
let manUnitedWins = 0

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeTeamWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayTeamWin) {
    manUnitedWins++
  }
}

console.log(manUnitedWins)