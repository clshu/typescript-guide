import { MatchReader } from './MatchReader'
import { Summary } from './Summary'
import { WinsAnalysis } from './analysis/WinsAnalysis'
import { ConsoleReport } from './reporters/ConsoleReport'

const matches = MatchReader.fromCsv('football.csv')

const analyzer = new WinsAnalysis('Man United')
const reporter = new ConsoleReport()
const summary = new Summary(analyzer, reporter)
summary.buildAndReport(matches)

const summary2 = Summary.winAnalysiswithHtmlReport('Man United')
summary2.buildAndReport(matches)