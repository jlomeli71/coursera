var name = "John";
let lastName = "Doe";
const version = "1.3"

function addEventListener(v1, v2) {
    return v1+v2
}

const add = (v1,v2) => v1+v2;

let result = add(5,3);


### Conditional

let color;

if (v1 === 10) {
    color = "blue"
} else {
    color = "red"
}

let color2 = v1 === 10 ? "blue" : "red";

### Loops

for(let i=1; i<21; i+1){
    console.log(i)
}

let i=1
while(i < 21) {
    console.log(i)
    i+=1
}

while(true) {
    console.log(i)
    i+=1
    if (i >= 21)
        break;
}


