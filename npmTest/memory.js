/**
 * Created by lenovo on 2017/5/22.
 */
function showMemory(){
    let memory = process.memoryUsage();
    function formatMemory(mem){
        return (mem/1024/1024).toFixed(2)+'MB';
    }
    console.log(`memoryUsage total : ${formatMemory(memory.heapTotal)}
    used : ${formatMemory(memory.heapUsed)} rss : ${formatMemory(memory.rss)}
`);
}

let useMemory = ()=>{
    let array = [];
    for(let i=0;i<50;i++){
        setTimeout(()=> {
            array[i] = new Array(1024 * 100);
            showMemory();
        },1000);
    }
} ;
useMemory();
