var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const a="1";
var hello = "kunj";
// hello=0;-->this shows the error at the time of the compilation 
// Functions:
var nameFunction = function (name, surename) {
    return name + surename;
};
// console.log(nameFunction([],1));--->we can pass any thing so that i have to specify the datatype in the defi of the 
// function
console.log(nameFunction("kunj", "shah"));
// Creating the obj
var obj = {
    name: "kunj",
    age: 21
};
// But that can possible that inside the js people can able to add and dlt the prop in future
// so have to specify the typos
var obj2 = {
    name: "kunj",
    age: 22
};
// Now can able to make the obj using the interface
var obj3 = {
    name: "kunj",
    age: 21
};
// Union property:
var chetName = null;
// For an example if i am going to create the user in future then i can set the user obj to null with the interface
var objUser = null;
// Difference between the any and unknown:
var varAny = 10;
var varUnknwon = 10;
var l1 = varAny;
// let l2:string = varUnknwon;That is gonna give the error
// How type converstion is helps and how we can do inside the TS
var var11 = "1";
// let var12 : number = var11;--->error
// let var12 : number = var11 as string;---->error
var var12 = var11;
// Right way
// Gonna start working with the class:
var userClaas = /** @class */ (function () {
    function userClaas(fisrtName, lastName) {
        this.firstName = fisrtName;
        this.lastName = lastName;
        this.unchangableName = "xyzueser - name given by the backend";
    }
    userClaas.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return userClaas;
}());
var user = new userClaas("kunj", "shah");
var usersclass = /** @class */ (function () {
    function usersclass(firstName, lastName) {
        this.firstName = "kunj";
        this.lastName = "shah";
    }
    usersclass.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    usersclass.maxAge = 50;
    return usersclass;
}());
// This class should implement the getFullName method:
// And yes we can have some of the static property:
// That is only accesseble by only the class name 
// just inheriting the usersclass
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(usersclass));
// Now yes we are able to use the constructure and able to add more functions:
// Generdics in TS:
