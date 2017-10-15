/**
 * window.postMessage('message', origin='host')
 * window.addEventListener('messsage', event=>{
 *  if (event.origin === 'host') {
 *  }
 * })
 *
 *
 * window.addEventListener('message', event=>{
 *  event.origin === 'test'
 *  event.source.postMessage('message', event.origin)
 * })
 *
 *
 *可以跨域 但只能跟自己打开的页面进行通信
 *
 */