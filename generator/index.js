/**
 * Created by lenovo on 2017/3/12.
 */

function* getGenerator(){
   yield ('start');
   setTimeout(yield* function () {

   },1000);
   yield 'end';
}
function print(value){
    console.log(value);
}
let it = getGenerator();
print()