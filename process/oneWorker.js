/**
 * Created by lenovo on 2017/5/28.
 */
process.on('message', (data)=>{
   process.send(data);
});