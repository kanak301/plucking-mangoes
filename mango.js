class MangoClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0,
            'friction':1,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y,radius, options);
        
        this.image=loadImage("images/mango.png");

        World.add(world, this.body);
      }
      display(){
       
        imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,50,50)
       // console.log("hi");
      }
        
    
        
      }