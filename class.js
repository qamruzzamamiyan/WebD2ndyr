class hello{
    name='Qamruzzama';
    show(){
        console.log("My name is: " + this.name )
    }
}
let obj = new hello();
obj.show(); 

class hello1{
    constructor(name){
        this.faculty='ud';
        console.log("My name is: " + name )
    }
}

let h1= new hello1("Qamruzzama");

class SecA{
    constructor(name,age,Add,M_no){
        this.name=name;
        this.age=age;
        this.address=Add;
        this.mobile=M_no;
    }
    show(){
        console.log("My name is: " + this.name )
        console.log("My age is: " + this.age )
        console.log("My address is: " + this.address )
        console.log("My mobile number is: " + this.mobile )
    }
}
let s=new SecA();
let s1 = new SecA("Qamruzzama", 20, "123 Main St", "555-1234");
let s2 = new SecA("John Doe", 25, "456 Elm St", "555-5678");
let s3 = new SecA("mohit",20,"asd",23344);
s1.show();
s2.show();
s3.show();
s.show();

class hello3{
    static name="example of static ";
    static show(){
        console.log("My name is: " + hello3.name )
    }
}
hello3.show();

class hello4{
    static name="example of static ";
    static show(){
        console.log("My name is: " + this.name )
    }
}
hello4.show();

class hello5{ 
    static name="example of static method";
    constructor(){
        this.instanceVar="Instance variable";

    }
    show(){
        console.log("static variable :"+hello5.name);
        console.log("instance var "+this.instanceVar);

    }
}
let h5 =new hello5();
h5.show();

class bankacc{
    constructor(){
        this.balance=0;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }
    getBalance(){
        return this.balance;
    }       
}
let acc = new bankacc();
acc.deposit(1000);
console.log("Balance after deposit: " + acc.getBalance());
acc.withdraw(500);
console.log("Balance after withdrawal: " + acc.getBalance());   