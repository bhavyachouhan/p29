class Enemies2{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        //this.image = loadImage("dustbingreen.png");
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        rect(0,0, this.width, this.height);
        //imageMode(CENTER);
        //image(this.image,0,-5,this.width+100,this.height+20);
        pop();
      }
}