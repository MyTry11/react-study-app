import React, { useState, ReactNode } from "react";

const HandBook = () => {
  // const num: number = 1;
  // const arr: number[] = [1, 2, 3];
  // явные null undefined let n: null = null; let u: undefined = undefined
  // кортеж let arr: [string, number]; arr = ['Vasia', 23]
  // void Функция, которая ничего не возвращает, возвращает значение void   ():void {}
  // let possibleNull: string | null = null
  // :never Однако функция которая никогда ничего не возвращает (или всегда выбрасывает ошибку), возвращает never
  //   ():never {}

  // function name(o: object | null) {
  //   return o
  // }
  // const ro_arr: readonly string[] = ['a', 'b', 'c']
  // const ro_arr2: Readonly<Array<string>> = ['a', 'b', 'c']
  // const ro_arr3: ReadonlyArray<string> = ['a', 'b', 'c']

  // // any - не указываем тип, при работе можем вызвать ошибку и не увидеть на этапе разработки
  // // unknown - тоже не указываем тип, но при работе необходимо вручную указывать типы перменных, без этого работать ничего не будет
  // // нужно при получении каких-то данных
  // const obj: unknown = {
  //   a: 1,
  //   b: 2,
  //   add: (a, b) => a + b
  // }
  // console.log(obj.add(1, 2))//вызовет ошибку
  // type WithAddFunction = {
  //   add: (a: number, b: number) => number
  // }
  // function hasAddFunction(obj: any): obj is WithAddFunction {
  //   return obj && typeof obj.add === 'function'
  // }

  // if(hasAddFunction(obj)){
  //   console.log(obj.add(1, 2))//не вызовет ошибку благодаря указанным типам
  // }

  // // Литеральные типы - описать точное значение
  // let strVal: 'oneValue' | 'anotherValue'
  // strVal = 'differentValue' //ошибка
  // // same for numbers

  //   let explicitType: false
  //   explicitType = true //error
  //   explicitType = false

  // // Type alias псевдонимы типов
  // type myString = string
  // type numberOrBoolean = number | boolean

  // let str: myString
  // let numOrBool: numberOrBoolean

  // str = 'abc'
  // numOrBool = 1
  // numOrBool = true

  // type typescript = 'typescript'
  // type one = 1

  // type Colors = 'black' | 'white' | 'blue' | 'yellow'
  // let color: Colors = 'black'

  // // enums
  // enum Season { Winter, Spring, Summer, Autumn };
  // let current: Season = Season.Summer;
  // console.log(current);       // 2
  // current = Season.Autumn;    // изменение значения
  // enum links {
  //     vk = 'http://vk.com',
  //     youtube = 'http://youtube.com',
  //     facebook= 'http://facebook.com',
  //     numb = 2}

  // console.log(links.vk)//'http://vk.com'
  // links.vk = 'abc'
  // console.log(links.vk)//error because its readonly
  // console.log(links[2]);//numb //reverse enum
  // const enum abc {a, b, c}//экономия ресурсов

  // function
  // const func = (a: number, b:number, c?:number):number => {

  //     if(c) {
  //         return a + b + c
  //     }
  //     return a + b
  // } //необязательный параметр, который не будет использован, если c == undefined
  // const func1 = (name: string, ...skills: Array<string>):string => {
  //     return `${name}, ${skills.join(', ')}`
  // }
  // console.log(func1('John', 'JS', 'TS'));

  // // Class

  // // модификаторы доступа
  // // public private protected readonly
  // class FooBase{
  //     public a: number = 1
  //     private b: number = 2//элемент класса не может быть доступен за пределами класса,
  //     //классы наследники, объекты созданные с помощью данного класса не смогут использовать помеченные этим свойством свойства и методы
  //     protected c: number = 3//доступ могут получить только наследники
  //     readonly d: number//только для чтения
  //     constructor(d: number){
  //         this.d = d
  //     }

  // }
  // class FooBase1 {
  //   static val = "123"; //статическая переменная, обращаться не через this, а через FooBase1.val
  //   constructor(
  //     public a: number = 1, //при объявлении переменных внутри скобок конструктора необходимо указать модификатор доступа
  //     public b: string = "some string",
  //     private c: number = 3
  //   ) {
  //     // this.a = a
  //     // this.b = b;
  //     // this.c = c
  //   }
  //   someMethod(): string {
  //     return FooBase1.val;
  //   }
  //   setPrivateC(c: number) {
  //     this.c = c;
  //   } //методы могут менять приватное поле
  //   set myPrivateC(c: number) {
  //     this.c = c;
  //   } //сеттер меняет приватное поле
  // }

  // const foo1 = new FooBase1();

  // foo1.setPrivateC(100)
  // foo1.myPrivateC = 1400

  // // Абстрактные классы - это классы, из которых нельзя создать экземпляр. Они обязательно должны быть наследованы
  // abstract class Animal {
  //     abstract makeSound():void//переменная созданная с abstract должна быть инициализирована в классе наследнике
  //     move():void{
  //         console.log('its moving');

  //     }
  // }
  // class Cat extends Animal {
  //     makeSound() {
  //         console.log('meow');

  //     }
  // }
  // const cat = new Cat()

  // interface Some {
  //   a: string;
  //   b: string;
  //   c: number;
  // }
  // const [someState, setSomeState] = useState<keyof Some>("a");
  // Наследование
  // class Nasledovanie {
  //     constructor(public name: string, public age: number ){}

  // }
  // class Nasvai extends Nasledovanie{
  //     name:string = 'Max'//в примере мы указываем name, но при этом если мы вызываем nas с 1 аргументом получаем ошибку
  //     constructor(age: number){
  //         super(name, age)//фиксится вызовом super
  //     }

  // }
  // const nas = new Nasvai(23)

  // // Object
  // type Person = {name: string, age: number, job?: string, nickName?: string}
  // let user: {name: string, age: number, job: string} = {
  //     name: 'Abc', age: 23,
  //     job: 'Frontend'
  // }
  // let admin:Person = {
  //     name: 'Matt',
  //     age: 35,
  //     nickName: 'Monster'
  // }

  // // Interface надстройка над объектом для описания типов полей объекта
  // // Interface похож на Type, но имеет больше возможностей для работы с объектами
  // interface User {
  //     name: string,
  //     age: number,
  //     job?: string,//опциональность
  //     readonly nickName: string,
  //     someMethod?(): string
  // }
  // const someUser: User = {
  //     name: 'Arslan',
  //     age: 23,
  //     nickName: 'MyTry'
  // }
  // // someUser.nickName = 'SpasBomja'//error bcs readonly

  // // Interface + class
  // interface Player {
  //     mmr: number
  // }
  // interface SomeInterface extends User {//можно наследовать от другого интерфейса
  //     pass: number
  // }
  // class UserClass implements User, Player{//классы могут юзать несколько интерфейсов
  //     name = 'Arslan'
  //     age = 23
  //     nickName = 'MyTry'
  //     someMethod(){
  //         return this.name
  //     }
  //     mmr = 9000
  // }

  // interface Admin {
  //     name: string,
  //     age: number
  //     [propName: string]: any//можем дальше расширять объект
  // }
  // const admin: Admin = {
  //     name: 'Vanya',
  //     age: 28,
  //     notInInterface: 'lyalya'//нет в интерфейсе, но ошибки нет
  // }

  return <div></div>;
};

export default HandBook;
