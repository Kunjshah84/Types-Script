// const a="1";
let hello:string = "kunj";
// hello=0;-->this shows the error at the time of the compilation 

// Functions:
const nameFunction=(name:string , surename:string): string => {
    return name+surename
}

// console.log(nameFunction([],1));--->we can pass any thing so that i have to specify the datatype in the defi of the 
// function

console.log(nameFunction("kunj","shah"));

// Creating the obj
const obj={
    name:"kunj",
    age:21
}
// But that can possible that inside the js people can able to add and dlt the prop in future

// so have to specify the typos

const obj2: {name: string , age:number}={
    name: "kunj",
    age:22
}

// Like to heddy to right this this typos so can make the bluprint of the objs and able to use that
interface userInterface{
    name:string,
    age?:number,
    getName? : () => string
}
// Now can able to make the obj using the interface

const obj3 : userInterface = {
    name:"kunj",
    age : 21
}

// Union property:
const chetName : string | number | null= null ;

// For an example if i am going to create the user in future then i can set the user obj to null with the interface

const objUser: null | userInterface=null;

// Difference between the any and unknown:

const varAny: any = 10;
const varUnknwon: unknown = 10;

let l1:string = varAny;
// let l2:string = varUnknwon;That is gonna give the error

// How type converstion is helps and how we can do inside the TS

let var11 : string = "1"
// let var12 : number = var11;--->error
// let var12 : number = var11 as string;---->error

let var12 : number = (var11 as unknown ) as number;
// Right way

// Gonna start working with the class:
class userClaas{
    private firstName: string;
    private lastName: string;
    readonly unchangableName:string
    
    constructor(fisrtName:string , lastName:string){
        this.firstName=fisrtName;
        this.lastName=lastName;
        this.unchangableName="xyzueser - name given by the backend" ;
    }

    getFullName() : string{
        return this.firstName +  " " + this.lastName;
    }
}

const user=new userClaas("kunj","shah"); 


// Yes there is read only keyword inside the classes
// And also if we are gonna convert the file of the typescript then the public,
// protected and other thing is gonna remove from the code: 


// Implementing the interface

// suppose that we are going to create the class and we want that there is some of the
// Methods should have then we have to use the interface

interface usersInterface{
    getFullName():string;
}

class usersclass implements usersInterface{
    private firstName : string;
    private lastName : string;
    static readonly maxAge=50;

    constructor(firstName:string , lastName:string){
        this.firstName="kunj";
        this.lastName="shah";
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
// This class should implement the getFullName method:
// And yes we can have some of the static property:
// That is only accesseble by only the class name 


// just inheriting the usersclass
class Admin extends usersclass{
    
}

// Now yes we are able to use the constructure and able to add more functions:

// Generdics in TS:

// Dis continued that course


// Traying the odd behaviour:

function cretaeUser({name:string , ispaid:boolean}) {}

const nweUser={
    name:"kunj",
    email:"kunjshah",
    ispaid:true
}

cretaeUser(nweUser);


// This is the practice of then generics:

function getSomethingFromTheDb<T> (products : T[]) : T{
    // Some operation inside the DB
    const newInd=3;
    return products[3];
}

// Now hot to convert this into the arrow function?
const getMoreProduct = <T> (products : T[] ) : T  => {
    return products[3];
} 

// What are the genrics constrain?
// If we want that we are having the 2 data Types inside the function then we are able to do that

function tryConstrain<T extends {name : string},U>(params1 : T , parms2 : U) : T { 
    return params1;
}

tryConstrain({name : "kunj" , age : 21},[1,2,3]);


// class type inside the generics:


// This is the classic example why we have to use the Descimennted union

interface cir {
    kind : "cir";
    radius : number
} 

interface sq {
    kind : "sq";
    side: number
}

type shape = cir | sq ;
// Doing the type norrowing by the old check method:
function getTheArea(obj : shape) : string{
    if(obj.kind === "cir")  return "Calculating the shape for the cir"
    return "calculating the shape for the sq";
}

// but here we have an problem like if in future some of the method added inside the payment gate
// Way then the code is gonna break because we have righten that new part inside the return stament

// But here we can do more batter with the descimenent narrowing:

// So i side the switch we are going to right the never that is going to make sure to right
// The never case which is handy for the sitution like that:


function getArea(obj: shape) : string{
    switch(obj.kind){
        case "cir": return "calculatiing the area of the cir";
        case "sq" : return "calculating the area of the sq";
        default : 
            const  _defultvar : never = obj;
            return _defultvar;
    }
}