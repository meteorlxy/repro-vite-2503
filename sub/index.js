// does not work
import fooSymbol from '../node_modules/foo'
import barSymbol from '../node_modules/bar'
import bazSymbol from 'baz'

// works
// import fooSymbol from 'foo'
// import barSymbol from 'bar'
// import bazSymbol from 'baz'

console.log(fooSymbol === barSymbol)
console.log(fooSymbol === bazSymbol)
