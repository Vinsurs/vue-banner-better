export default function debounce(fn, delay, ctx) {
  let timer = null
  return function() {
    let args = Array.prototype.slice.call(arguments)
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(ctx, args)
    }, delay)
  }
}
