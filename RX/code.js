import Rx from 'rxjs'
import {Observable}from 'rxjs'
const button = document.querySelector('button');

// const button = document.querySelector('button');
// Rx.Observable.fromEvent(button, 'click').
//     subscribe(()=>{
//     alert('click');
// });

// const observable = Rx.Observable.create((observer)=>{
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.next(4);
// });
// observable.subscribe({
//     next: value => console.log(value),
//     error: error => console.log('compete'),
//     complete: () => console.log('complete')
// });
// observable.subscribe(
//         value => console.log(value),
//         error => console.log(error),
//         () => console.log('complete')
//     );

//  const subscriptionOne = Rx.Observable.create((observer)=>{
//     observer.next(1);
//  })
//      .subscribe(value=>{console.log(value);});
//
//  const subscriptionTwo = Rx.Observable.from([1, 2, 3])
//      .subscribe(value=>{console.log(value);});
//
// subscriptionOne.add(subscriptionTwo).unsubscribe();


// const observer = Rx.Observable.create((observer)=>{
//    observer.next(1);
// });
// const subscription = observer.subscribe(value => {
//         console.log(value);
//     }
// );
// subscription.unsubscribe();

// const observer = Rx.Observable.interval(1000);
// const subscription = observer.subscribe(value=>{
//    console.log(value);
// });
// const observer = Observable.create((observer)=>{
//     observer.next(2);
//     setTimeout(()=>{
//         observer.next(1);
//     },1000);
// });
// observer.subscribe((value)=>{
//     console.log(value);
// });
// const unsubscribe = Observable.create(function subscribe(observer){
//     let index = 0;
//     observer.next(1);
//     const timer = setInterval(()=>{
//        observer.next(index++);
//     }, 1000);
//     return function unsubscribe(){
//         clearInterval(timer);
//     }
// });
//
// Observable.fromEvent(button, 'click').subscribe(()=>{
// const button = document.querySelector('button');    unsubscribe();
// });


// Observable.fromPromise(new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('hello world');
//     }, 1000);
// })).subscribe((value)=>{
//    console.log(value);
// }, error=>{
//     console.log(error);
// });

// const observable1 = Observable.create(observer=>{
//     setInterval(()=>{
//         observer.next('observable one');
//     }, 1000);
// });
// const observable2 = Observable.create(observer=>{
//    setInterval(()=>{
//        observer.next('observable two');
//    }, 1000);
// });
//
// const subscription1 = observable1.subscribe((value)=>{
//    console.log(value);
// });
// const subscription2 = observable2.subscribe(value=>{
//    console.log(value);
// });
// subscription1.add(subscription2);
//
// Observable.fromEvent(button, 'click').subscribe(()=>{
//     subscription1.unsubscribe();
// });

// const subject = new Rx.Subject();
// subject.subscribe(value=>{
//     console.log(value);
// });
// subject.subscribe(value=>{
//     console.log(value);
// });
// subject.next(1);
// subject.next(2);

// const subject = new Rx.Subject();
// subject.subscribe((value)=>{
//     console.log(value);
// });
// subject.subscribe(value=>{
//    console.log(value);
// });
// const observable = Observable.from([1, 2, 3, 4, 5]);
// observable.subscribe(subject)


// const observable = Observable.create(observer=>{
//     let start = 1;
//     const timer = setInterval(()=>{
//        observer.next(start++);
//    }, 1000);
//     return function unsubscribe() {
//         clearInterval(timer);
//     }
// });
//  observable.subscribe((value)=>{
//    console.log(value);
// });
//
// Observable.fromEvent(button, 'click')
//     .subscribe(()=>{
//         observable();
//     });
// const source = Observable.from([1, 2, 3, 4]);
// const subject = new Rx.Subject();
// const multicasted = source.multicast(subject);
// multicasted.subscribe(value=>{
//     console.log('observer a is ' + value);
// });
// multicasted.subscribe(value=>{
//     console.log('observer b is '+ value);
// });
// multicasted.connect();
//
// const source = Observable.from([1, 2, 3, 4, 5]);
// const subject = new Rx.Subject();
// const multicased = source.multicast(subject);
// multicased.subscribe((value)=>console.log(value));
// multicased.subscribe((value)=>console.log(value));
//
// Observable.fromEvent(button, 'click').subscribe(()=>{
//    multicased.connect();
// });


// const source = Observable.interval(1000);
// const subject = new Rx.Subject();
// const multicased = source.multicast(subject);
// multicased.subscribe((value)=>console.log(value));
// multicased.subscribe((value)=>console.log(value));
// const multicastConnect = multicased.connect();
//
// Observable.fromEvent(button, 'click').subscribe(()=>{
//     multicastConnect.unsubscribe();
// });

// function subscribeLink(input) {
//     const output = Observable.create((observer)=>{
//        input.subscribe((value)=>{
//            observer.next(value);
//        })
//     });
//     return output;
// }
// const input = Observable.from([1, 2, 3, 4]);
// const output = subscribeLink(input);
// output.subscribe(value=>{
//    console.log(value);
// });
//
// const observable = Observable.from([1, 2, 3, 4]).
//     observeOn(Rx.Scheduler.async);
// console.log('before subscribe');
// observable.subscribe(value=>{
//    console.log(value);
// });
// console.log('after subscribe');

// const observableOne = Observable.from([1, 2, 3, 4, 5]);
// const observableTwo = Observable.from([6, 7, 8, 9, 10]);
//  Observable.combineLatest(observableOne, observableTwo, (one, two)=>{
//     return one + two;
// }).subscribe(value=>{
//    console.log(value);
// });
// Observable.concat(observableOne, observableTwo).subscribe(value=>{    //没有交错
//     console.log(value);
// });
// Observable.empty().startWith(7).subscribe({
//     next: value=>{console.log(value)},
//     complete: ()=>{console.log('complete')}
// });
// Observable.forkJoin(Observable.from([1, 2, 3]), Observable.of(1, 2, 3), Observable.range(10, 20))
//     .subscribe((value)=>{console.log(value)}, error=>{console.log(error)}, ()=>{console.log('complete')});
//
// Observable.range(20, 22).take(10)
//     .subscribe(value=>{
//        console.log(value);
//     }, error=>{
//         console.log(error);
//     });
// Observable.interval(500)
//     .timeInterval()
//     .take(3)
//     .subscribe(value=>{
//         console.log(value);
//     });

// Observable.merge(Observable.range(10, 20), Observable.range(20, 30))  //有交错
// .subscribe(value=>{
//    console.log(value);
// });
// Observable.throw(new Error('error'))`
// .subscribe({
//     next: value=>{console.log(value)},
//     error: error=>console.log(error)
// });

// Observable.timer(3000, 1000)
// .subscribe(value=>{
//    console.log(value);
// });

// const asyncFunc = Observable.((x,y)=>x+y);
// asyncFunc(1, 2).subscribe({
//    next: value=>console.log(value),
//    complete: ()=>console.log('complete')
// });

// Observable.fromEvent(button, 'click')
// .auditTime(1000)
//     .subscribe(()=>{
//         console.log('click');
//     });

// const observableOne = Observable.interval(1000);
// const observableTwo = Observable.fromEvent(button, 'click');
// observableOne.buffer(observableTwo)
// .subscribe(value=>{
//     console.log(value);
// });
// observableOne.bufferCount(5).subscribe(value=>{
//     console.log(value);
// });
