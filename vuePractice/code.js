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


// let comp = {
//     template : '<div @click="handleClick">{{name}}</div>',
//     props : ['click', 'name'],
//     methods : {
//         handleClick (event){
//             this.click(event.target.innerHTML);
//         }
//     }
// }
// let app = new Vue({
//     el : '#app',
//     data : {
//         childName : 'this is child'
//     },
//     methods : {
//         handleClick (value){
//             print(`this is ${value}`);
//         }
//     },
//     components : {
//         Comp : comp
//     }
// });

// let comp = {
//     template : '<div><h4>{{fatherName}}--{{time}}</h4><button @click="add">add</button></div>',
//     data (){
//         return {
//             time : 0
//         }
//     },
//     props:[
//         'fatherName'
//     ],
//     methods : {
//         add (){
//             this.time++;
//         }
//     }
// }

// let vue = new Vue({
//     el : '#app',
//     data : {
//         name : 'jack'
//     },
//     components : {
//         comp : comp
//     }
// });

// let sonComponent = {
//             template : '<div><button @click="handleClick">click me</button></div>',
//             methods : {
//                 handleClick (){
//                     this.$emit('clickbutton');
//                 }
//             }
//         };


// let vue = new Vue({
//     el : '#app',
//     methods : {
//         handleClick (){
//             console.log('click');
//         }
//     },
//     components : {
//         sonComponent : sonComponent
//     }
// });

// let counter = {
//     template : '<div><button @click="triggerCounter">{{counter}}</button></div>',
//     data (){
//         return {
//             counter : 0
//         };
//     },
//     methods : {
//         triggerCounter (){
//             this.counter++;
//             this.$emit('trigger');
//         }
//     }
// };
// let app = new Vue({
//     el : '#app',
//     data : {
//         counter : 0
//     },
//     methods : {
//         addCounter (){
//             this.counter++;
//         }
//     },
//     components : {
//         counter : counter
//     }
// });'

// let son = {
//     template : '<div><input v-model="name"><h5>{{name}}</h5></div>',
//     props : ['name'],
//     computed : {
//         name (){
//             return this.name;
//         }
//     }
// };
// let app = new Vue({
//     el : '#app',
//     data　: {
//         name : "jack"
//     },
//     components : {
//         son : son
//     }
// });


// let son = {
//     template : '<div><h4>own content</h4><slot></slot></div>',
// };
// let app = new Vue({
//     el : '#app',
//     data　: {
//         name : "jack"
//     },
//     components : {
//         son : son
//     }
// });

/*

let son = {
    template : `<div>
    <h4>own content</h4>
    <slot name="contentTwo"></slot>
    <slot name="contentOne"></slot>
    </div>`,
};
let app = new Vue({
    el : '#app',
    data　: {
        name : "jack"
    },
    components : {
        son : son
    }
});*/
/*

let componentOne = {
    template : '<div>one</div>'
};
let componentTwo = {
    template : '<div>two</div>'
};
let componentThree = {
    template : '<div>three</div>'
};
let app = new Vue({
    el : '#app',
    data : {
        chooseComponent : 'componentOne'
    },
    components : {
        componentOne,
        componentTwo,
        componentThree
    }
});*/

/*

let app = new Vue({
    el : '#app',
    data : {
        text : '',
        singleCheck : false,
        multiCheck : [],
        checkValue : 'this is check value',
        radio : '',
        radioValue : 'this is radio value',
        select : '',
        selectValue : 'this is select value'
    }
})*/

/*
let app = new Vue({
    el : '#app',
    data : {
        persons : {
            name : 'jack',
            age : 11
        }
    },
    methods : {
        addKey (){
            //this.$set(this.persons, 'sex', 'male');
            //Vue.set(app.persons,'sex', 'male' );
        }
    }
});*/

/*
let app = new Vue({
    el : '#app',
    data : 'targetName',
    methods : {
        changeName (event){
            this.targetName = 'new name';
            print(event.target.value == 'new name');
        }
    }
});
Vue.nextTick(()=>{
   let input = document.querySelector('input');
   print(input.inner)
});
*/

let app = new Vue({
    el : '#app'
});
Vue.directive
