// // PromiseAll

console.log('Person 1: Show Tickets');
console.log('Person 2: Show Tickets');

const promiseWifeBringTickets= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Tickets')
    }, 3000)
});

const getPopCorn= promiseWifeBringTickets.then((t)=>{
    console.log('Wife: I have tickets ');
    console.log('Husband: We should go in ');
    console.log('Wife: No, I am hungry ');
    return new Promise((resolve, reject) => resolve('${t} popcorn'))
        
    });
    const getButter= getPopCorn.then((t)=>{
        console.log('Husband: I got popcorn');
        console.log('Husband: We should go in now');
        console.log('Wife: I need some butter');
        return new Promise((resolve, reject) => resolve('${t} butter') )
            
        });

        getButter.then((t)=> console.log('Wife: Now we shall go'));


// console.log('Person 4: Show Tickets');
// console.log('Person 5: Show Tickets');

// Async and Await 
console.log('Person 1: Show Tickets');
console.log('Person 2: Show Tickets');
const PreMovie= async ()=>{
    const promiseWifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Tickets', 3000)
        )
    });
    
        
    let tickets= await promiseWifeBringTickets; 

}
PreMovie().then((m)=> console.log(m));

// console.log('Person 4: Show Tickets');
// console.log('Person 5: Show Tickets');


