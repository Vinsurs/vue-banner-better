export default function throttle(fn, delay, context) {
    let prev = new Date().getTime()
    return function () {
        let next = new Date().getTime()
        if(next - prev > delay) {
            let args = Array.prototype.slice.call(arguments)
            fn.apply(context, args)
            prev = next
        }
    }
}