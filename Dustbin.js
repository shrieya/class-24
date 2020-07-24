class Dustbin {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle=0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness, {isStatic : true});

        this.leftWall = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight, {isStatic : true });
        Matter.Body.setAngle(this.leftWall,this.angle);

        this.rightWall = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        Matter.Body.setAngle(this.rightWall,-1*this.angle);

        World.add(world,this.bottomBody);
        World.add(world,this.leftWall);
        World.add(world,this.rightWall);
    }

    display() {
        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftWall.position;
        var rightPos = this.rightWall.position;

        push();
        translate(leftPos.x,leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(bottomPos.x,bottomPos.y);
        rectMode(CENTER);
        stroke(255);
        angleMode(RADIANS);
        fill(255);
        rect(0,0,this.dustbinWidth,this.wallThickness);
        pop();

        push();
        translate(rightPos.x,rightPos.y);
        rectMode(CENTER);
			//strokeWeight(4);
		stroke(255);
		angleMode(RADIANS);
		fill(255);
		rotate(-1*this.angle);
		rect(0,0,this.wallThickness, this.dustbinHeight);
		pop();


    }
}