export default () => {
  if (process.browser) {
    console.log('condole.log() on browser')
  } else {
    console.log('console.log() on SSR server')
  }
}
