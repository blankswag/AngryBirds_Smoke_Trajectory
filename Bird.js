class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50); // calling Baseclass's constructor
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    // path
    this.trajectory = []; // empty array 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    //based on the position of the bird we need to add smoke image
    var position = [this.body.position.x, this.body.position.y]; // to store/collected  x, y position as the bird moves (array because it wil have multiple x, y values as it moves)
    
    // push/add the collected position of bird inside this.trajectory
    this.trajectory.push(position); // pushed position inside trajectory array variable

    // initialization, exit condition, increment/decrement
    // initialized i by 0
    // how many ever (no. of items)/(length of array) trajectory will have we want to repeat the smoke dot for that -> i<this.trajectory.length
    // i++ increase i by 1 everytime
    // until the length of the array (this.trajectory)
    for(var i = 0; i<this.trajectory.length; i++ ){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1] );
    }

  }

}
