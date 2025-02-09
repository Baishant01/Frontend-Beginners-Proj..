
    //  *   Primitive data types
    // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

    // JS IS DYNAMICALLY TYPED LANGUAGE



    const score1 = 100;
    const score2 = 99.7;

    // console.log(typeof(score2));

    const id = Symbol('123');
    const id2 = Symbol('123');

    // console.log (id === id2);

    const bigNumber = 23485762965823743896723895476390457n;


    //Reference (Non primitive)
    // Array, Objects, Functions

    const heros = ['Spiderman', 'Superman', 'Batman', 'xmen'];

    let myObj =   {
        name : "Baishant",
        age : 21,
    }

    const myFunction = function (){

        console.log("Hello world!");

    }

    // console.table(([typeof heros, typeof myObj, typeof myFunction]));


    /* ******************************************************************************************************** */

    //  Stack (Primitive), Heap (Non-Primitive)


    let myName = 'Baishant';
    let myFullName = myName;
    myFullName = 'Baishant Pachhai'

    // console.log(myName);
    // console.log(myFullName);


    let userOne = {
        myName : 'Baisant Pachhai',
        myAge : 21,
        myEmail : 'Baishant005@gmail.com',
    }

    let userTwo = userOne;

    userTwo.myEmail = 'pbaishant@gmail.com';

    // console.log(userTwo);
    // console.log(userOne);

    let function1 = function myFunction () {

        let myAge = 21;
        console.log(myAge);
    }

    let function2 = function1;

    function2.myAge = 22;
    // console.log(function2);
    // console.log(function1);

    let arr1 = [1,2,3,4,5];
    let arr2 = arr1;

    arr2.unshift(0);

    console.log(arr2);
    console.log(arr1);