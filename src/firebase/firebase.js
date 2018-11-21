
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDecfLtzcJupjdAMK_p0ACGPCN9Ca33Riw",
    authDomain: "expensify-64569.firebaseapp.com",
    databaseURL: "https://expensify-64569.firebaseio.com",
    projectId: "expensify-64569",
    storageBucket: "expensify-64569.appspot.com",
    messagingSenderId: "988097387645"
  };
  
  firebase.initializeApp(config);
 
 const database = firebase.database();

 export { firebase, database as default };

/* writing on firebase */

//  database.ref().set({
//   name: 'shubham'
//  }).then(data => {
//   console.log('data saved to firebase');
//  }).catch(error => {
//   console.log('something went wrong', error);
//  })

// /* writing on firebase on a particular node */

//  database.ref().set({
//   age: 12,
//   weight: 75,
//   homelocation: {
//     city: 'agra',
//     country: 'india' 
//   },
//   job: {
//     title: 'software',
//     company: 'sapient'
//   },
//   location: {
//     city: 'Newyork',
//     country: 'US'
//   }
//  })

// /* updating node by using a set on a firebase */

// database.ref('homelocation').set({
//     city: 'delhi'
//  })

// /* removing particular node */

// //database.ref('attributes/age').set(null);
// // or

//   database.ref('weight')
//   .remove()
//   .then(data => {console.log('data removed from firebase')})
//   .catch(error => {console.log(error)});

//   /* updating node properties by using update */

//   database.ref().update({
//     'job/title' : 'software engineer',
//     'location/city': 'Boston'
//   })

// /* Reading from Database only once */

// database.ref().once('value')
// .then( data => {
//   var value = data.val();
//   console.log('Got data', value)})
// .catch( error => {console.log(error)});

// /* Reading from Database and listen to firebase when changes */

// database.ref().on('value', snapshot => {
//   console.log('data changes',snapshot.val());
// })

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3000);


//  adding expenses to the firebase 

// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 100,
//   createdAt: 91919191,
//   note: 'rent amount'
// })
// database.ref('expenses').push({
//   description: 'Phone bill',
//   amount: 200,
//   createdAt: 91922219191,
//   note: 'phone bill amount'
// })

// /* Reading Expenses from the firebase */

// database.ref('expenses').once('value')
// .then( snapshot => {
//   const expenses = [];
//   snapshot.forEach((data) => {
//     expenses.push({
//       id: data.key,
//        ...data.val()
      
//     })
//   });
//   console.log('expenseslist', expenses);
// }).catch( error => {console.log(error)});

// /*database.ref('expenses').on('value', (snapshot) => {
//   console.log('expenseslist changes', snapshot.val());
// });
// */

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('expenseslist one item removed', snapshot.val());
// });
  
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('expenseslist child changed', snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('expenseslist child changed', snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('expenseslist child added', snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'fuel bill',
//   amount: 1800,
//   createdAt: 91922219191,
//   note: 'fuel bill amount'
// })