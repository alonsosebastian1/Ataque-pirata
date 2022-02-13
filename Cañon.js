class Cañon {
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB
        }
           this.image = loadImage("cañon1.1.png");
           this.cañon = Constraint.create(options);
           this.pointB = pointB;

    }
    attach(body){
     this.cañon.bodyA = body;
    }
    fly(){
        this.cañon.bodyA = null;
    }
} 