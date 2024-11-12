
// let age: number = 10;

// if (age<15)
//     age +=10;
// console.log(age)

// let sales = 123456789;
// let course = "Dan"
// let is_published = true;
// let level;

// function render(doc:any){
//     console.log(doc)
// }
// arrays ----------------------------------------------------

// let numbers = [1,2,3]
// numbers.forEach(n => n.toString)

// turples

// let number : [number, string] = [2,'r']

// enums - list of related constants

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size {Small = 1, Medium, Large};

// let mine : Size = Size.Medium;
// console.log(mine);


// function calctax(income: number, taxyear?:number ): number{
//     if ((taxyear || 2022)<2500)
//         return income*1.2;
//     return income *1.3
// }

// calctax(10000, 2 )

// function calctax(income: number, taxyear= 2022): number{
//     if ((taxyear)<2500)
//         return income*1.2;
//     return income *1.3
// }

// calctax(10000 )

//objects

// let employee: 
// {
//     readonly id:number, 
//     name?:string,
//     retire: (date:Date) => void
// }
//      = {id:2 , retire:(date:Date)=>{
//         console.log(date)
//      }};             // name is optional

// employee.name = 'dan'

// type elias ------------------------------------

type Employee = {
    readonly id : number,
    name : string,
    retire : (date:Date) => void
}

let employee = {
                     id:1, 
                     name:'Dan', 
                     retire:(date:Date) => {console.log(date)}
                }

                console.log(employee.name)


// union types

function kgtolbs(weight: number | string): number{
    if(typeof weight === 'number')
        return weight*2.2
    return parseInt(weight)*2.2

}

// intersection

type Draggable = {
    drag: () => void,
}

type Resizable = {
    resize : () => void
}

type UIwidget=  Draggable & Resizable;

let textbox: UIwidget = {

    drag: () => {},
    resize: ( ) =>{ }
}

// literal types-------------------------

type Quantity = 50 | 100

let quantity : Quantity = 100 ;

// nullable types-----------------------

function greet (name:string | null){
    if(name ){console.log(name.toUpperCase())}
    else{
        console.log('Hola')
    }
}
greet('dan')

greet(null)

// optionam chaining --------------------------

type Customer = {
    birthday? : Date
}

function getCustomer( id: number): Customer | null | undefined{ 
    return id===0 ? null : {birthday : new Date()}

}

let customer = getCustomer(1)

console.log(customer?.birthday?.getFullYear())