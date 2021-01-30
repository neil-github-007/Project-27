class Chain {
    constructor(body1, pointB) {
        var options = {
            bodyA : body1,
            pointB: pointB,
            stiffness: 0.4,
            length:400
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        stroke("lime");
        strokeWeight(3);
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
}