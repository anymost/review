/**
 * Created by lenovo on 2017/5/8.
 */
addEventListener('connect', function (event) {
    let port = event.ports[0];
    port.postMessage('get start message');
    port.addEventListener('message', function(event){{
        console.log(event.data);
    }})
    port.start();
})