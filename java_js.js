let kiosk ={
    firstFriut :"mango",
    secondFruit:"apple",
    thirdFruit:"banana",
    lastFruit:"orange",
    get fruits(){
        return this.firstFriut," ",this.secondFruit," ",this.thirdFruit," ",this.lastFruit;

    },
    set fruits(value){
        [this.firstFriut,this.secondFruit,this.thirdFruit,this.lastFruit];
    }
};
kiosk.fruits = "mango","apple","banana","orange";

console.log("mango");
console.log("apple");
console.log("banana");
console.log("orange");