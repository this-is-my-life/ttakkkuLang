let target = process.argv[2]
if (!target || process.argv.includes('-h') || process.argv.includes('--help')) {
  console.log(`ttakkkuJS Runtime v${require('./package.json').version}

Usage: node ttakkku.js [Options] filename

Options:
-h, --help      Print This Message
-v, --version   Show Version of Seoa Language`)
process.exit(0)
} else if (process.argv.includes('-v') || process.argv.includes('--version')) {
  console.log(`ttakkkuJS Runtime v${require('./package.json').version}`)
  process.exit(0)
}

const fs = require('fs')
if (!fs.existsSync(target)) {
  console.error('Fatal: File not exist!')
  process.exit(1)
}

require('./runtime/core')(target)
