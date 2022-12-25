class Animal {
    constructor(color = 'safron', energ = 100) {
        this.color = color;
        this.energ = energ;
    }
    isActive() {
        if(this.energ > 0){
            this.energ = this.energ-20;
            console.log("energy updated value is",this.energ);
        }
        else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energ = this.energ+20;
        console.log("energy increased and current value is",this.energ);
    }
    getColor() {
        console.log("color is",this.color);
    }
}
class Cat extends Animal {
    constructor(color, energ, sound = 'meow', canJumpHigh = false, canClimbTrees = false){
        super(color, energ);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Bird extends Animal {
    constructor(color, energ, sound = 'chirp', canFly = false){
        super(color, energ);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }   
}
class HouseCat extends Cat {
    constructor(color, energ, sound, canJumpHigh, canClimbTrees, houseCatSound = 'sweet meow'){
        super(color, energ, sound, canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor(color, energ, sound, canJumpHigh, canClimbTrees, tigerSound = 'roar') {
        super(color, energ, sound, canJumpHigh, canClimbTrees);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
class Parrot extends Bird {
    constructor(canTalk = false,color, energ, sound, canFly) {
        super(color, energ, sound, canFly);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if(option){
            super.makeSound();
        }
        if(this.canTalk){
            console.log("I can Talk!");
        }
    }
}
var parrot1 = new Parrot(true);
parrot1.makeSound(true);