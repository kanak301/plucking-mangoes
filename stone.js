class StoneClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2,
            'isStatic':false
        }
        this.body = Bodies.circle(x, y,radius, options);
        
        this.image=loadImage("images/stone.png");

        World.add(world, this.body);
      }
      display(){
       
        imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,50,50)
       // console.log("hi");
      }
        
    
        
      }
