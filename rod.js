class Rod extends BaseClass {
    constructor() {
        var options = {
            isStatic:true
        }
        super(400, 50, 600, 40);
    }

    display(){
        super.display();

        rectMode(CENTER);
        fill("green");
        rect(400, 50, 600, 40);
    }
}