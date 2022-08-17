export default {
  root: 'sub',
  optimizeDeps: {
    force: true,
    exclude: [
      'foo',
      'bar',
      'baz',
    ]
  }
}
