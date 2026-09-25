//object with method 
const a = {
    id: 101,
    name : "Qamruzzama",
    show : function(){
        console.log("My name is: " + this.name )
        console.log("My id is: " + this.id )

    }
}
a.show()

//------------Object with multi functions
let c = {
    age: 20,
    job: "Teacher",
    details: function() {
        console.log("My age is: " + this.age);
        console.log("My job is: " + this.job);
    },
    profile: "Assistant Professor",
    job_title: function() {
        console.log("My job title is: " + this.job);
        console.log("My profile is: " + this.profile);
    }
};
let d={
    marks: 45,
    grad: "A",
    modify: function(){
        this.marks= this.marks+5;
        this.grad= this.grad+ "+";
    },
    show: function(){
        console.log("My marks are: "+ this.marks);
        console.log("My grade is: "+ this.grad);
    }
};

d.modify();
d.show();

//---------same function with different object
function show() {
    console.log("\nAddress: " + this.address);
    console.log("City: " + this.city);
}
e={ address: "ABES College",
    city: "Ghaziabad",
    show: show
};
f={ address: "College of Engineering near Crossing Republic",
    city: "Ghaziabad",
    show: show
};
e.show();
f.show();