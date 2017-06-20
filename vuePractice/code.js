function print(value){
    console.log(value);
}

// let comp = {
//     template : '<div><h2>{{fatherName}}</h2><h3>{{ownName}}</h3></div>',
//     data () {
//         return {
//             ownName : 'this is component name'
//         }
//     },
//     props : ['fatherName']
// }

// let app = new Vue({
//     el : '#app',
//     data : {
//         name : 'jack'
//     },
//     components : {
//        comp
//     }
// })




// let app = new Vue({
//     el : '#app',
//     data : {
//         name : 'jack'
//     },
//     boforeCreate(){
//         print('bofore create');
//     },
//     created (){
//         print('created');
//     },
//     beforeMount (){
//         print('before mount');
//     },
//     mounted (){
//         print('mounted');
//     },
//     beforeUpdate (){
//         print('before update');
//     },
//     updated (){
//         print('updated');
//     },
//     beforeDestroy (){
//         print('before destroy');
//     },
//     destroyed (){
//         print('destroyed');
//     }

    
// })

//  let app = new Vue({
//      el : '#app',
//      data : {
//          tpl : '<h2>template</h2>'
//      },
//      filters : {
//          changeToUpper (value){
//              return value.toUpperCase();
//          }
//      }
//  })


//  let app = new Vue({
//      el : '#app',
//      data : {
//          tpl : '<h2>template</h2>'
//      },
//      filters : {
//          changeToUpper (value){
//              return value.toUpperCase();
//          }
//      }
//  })

// let tpl = {
//              template : '<div>{{changeFirst}}</div>',
//              props : ['firstName'],
//              computed : {
//                  changeFirst (){
//                      return this.firstName.toUpperCase();
//                  }
//              }
//          };

// let app = new Vue({
//      el : '#app',
//      data : {
//         firstName : 'firstName'
//      },
//      components : {
//          tpl : tpl
//      }
     
//  })
// let app = new Vue({
//      el : '#app',
//      data : {
//         firstName : 'firstName',
//         fullName : 'fullName'
//     },
//     watch : {
//         firstName (){
//             this.fullName = this.firstName;
//         }
//     }
     
//  })

// let app = new Vue({
//      el : '#app',
//      data : {
//         isBlue : true,
//         isWeight : true,
//         blue : 'blue',
//         weight : 'weight'
//     }
//  })


// let app = new Vue({
//      el : '#app',
//      data : {
//        isBlue : 'blue',
//        style : {
//            color:'blue'
//        }
//     }
//  })

// let app = new Vue({
//      el : '#app',
//      data : {
//        isShow : 'one'
//     },
//     methods : {
//         clickOne (){
//             print('click one time');
//         },
//         clickTwo (){
//             print('click two time');
//         }

//     }
//  })

// let app = new Vue({
//      el : '#app',
//      data : {
//         persons : ['jack', 'jones', 'john']
//     }
//  })

// let app = new Vue({
//     el : '#app',
//     data : {
//         persons : ['jack', 'rose', 'david', 'jacky'],
//         man : {
//             name : 'jack',
//             age : 11,
//             sex : 'male'
//         }
//     }
// })


// let app = new Vue({
//     el : '#app',
//     data : {
//         width : '200px',
//         height : '200px',
//         color　: 'grey' 
//     },
//     methods : {
//         handleMouseOver (value,event){
//             print(event);
//             print(value);
//         }
//     }
// })
let comp = {
    template : '<div @click="handleClick">{{name}}</div>',
    props : ['click', 'name'],
    methods : {
        handleClick (event){
            this.click(event.target.innerHTML);
        }
    }
}
let app = new Vue({
    el : '#app',
    data : {
        childName : 'this is child'
    },
    methods : {
        handleClick (value){
            print(`this is ${value}`);
        }
    },
    components : {
        Comp : comp
    }
});