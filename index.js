// does not work
import fooSymbol from './node_modules/foo'
import barSymbol from './node_modules/bar'

// works
// import fooSymbol from 'foo'
// import barSymbol from 'bar'

console.log(fooSymbol === barSymbol)
