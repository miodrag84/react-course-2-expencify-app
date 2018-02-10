
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAy50iAeQf4vf3SBYMoe_cxPe0clwDsziY",
    authDomain: "expencify-958f5.firebaseapp.com",
    databaseURL: "https://expencify-958f5.firebaseio.com",
    projectId: "expencify-958f5",
    storageBucket: "expencify-958f5.appspot.com",
    messagingSenderId: "384512597688"
  };
  
  firebase.initializeApp(config);
  
  const database = firebase.database();

  export { firebase, database as default };

  // database.ref('expenses').on('child_removed', (snapshot) => {
  //    console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
  
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });


  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses =[];
  //       snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //       });
  //      });
  //    console.log(expenses);
  // })

  // database.ref('expenses')
  // .once('value')
  // .then((snapshot) => {
  //    //console.log((snapshot) => {
  //      const expenses = [];

  //      snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //       });
  //      });
  //    console.log(expenses);
  // });

  database.ref('expenses').push({
    descroption: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 324242252
  });
 

  //database.ref('notes/-L4oYR-ed4s_31aBHgCQ').remove();

  // database.ref('notes').push({
  //    title: 'Course topics',
  //    body: ' React native'
  // });

//   const firebaseNotes = {
//     notes: {
//     apoijasdf: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     apdoadsoaod: {
//       title: 'Another note!',
//     body: 'This is my note'
//     }
//   }
// };
//   const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: ' This is my note'
//   }, {
//     id: '761se',
//     title: 'Another note!',
//     body: 'This is my note'
//   }
// ];

// database.ref('notes').set(notes);
// database.ref('notes/12')

  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // })
  
  // Setup data sub -> Andrew is a Software Developer at Amazon.
  
  // Change the data and make sure it reprints
  
  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });
  
  // database.ref().set({
  //   name: 'Andrew Mead',
  //   age: 26,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Philadelphia',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // });
  
  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });
  
  // database.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   });
  

