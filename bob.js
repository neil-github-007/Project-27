class Bob extends BaseClass {
    constructor(x,y) {
        super(x, y, 80, 80);
    }
    
    display() {
        super.display();

        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y,80,80);
    }
}