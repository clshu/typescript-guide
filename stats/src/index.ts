import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { Summary } from './Summary'
import { WinsAnalysis } from './analysis/WinsAnalysis'
import { ConsoleReport } from './reporters/ConsoleReport'
import { HtmlReport } from './reporters/HtmlReport'

// Create an object that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of MatchReader and pass a 'DataReader'
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const analyzer = new WinsAnalysis('Man United')
const reporter = new ConsoleReport()

const summary = new Summary(analyzer, reporter)

summary.buildAndReport(matchReader.matches)

const summary2 = new Summary(analyzer, new HtmlReport())

summary2.buildAndReport(matchReader.matches)