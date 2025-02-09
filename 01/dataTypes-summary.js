
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

    console.table(([typeof heros, typeof myObj, typeof myFunction]));


