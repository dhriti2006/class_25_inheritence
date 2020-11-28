class Bird extends parentclass {
    constructor(x, y) {
      //this.body = Bodies.rectangle(x, y, 50, 50, options);
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");

    }

    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;

      super.display()
    }
 
  }