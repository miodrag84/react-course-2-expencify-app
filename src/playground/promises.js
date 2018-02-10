
const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
    resolve({
        name: 'Miki',
        age: 30
    })
    reject('nesto pogresno');
 }, 5000);  

});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return 'some data';

}).then((str) => {
    console.log('does this run?', str);
    
}).catch((error) => {
    console.log('error: ', error);
});
// promise.then((data) => {
//     console.log('2',data);
// });

console.log('after');