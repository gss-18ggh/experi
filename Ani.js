class Ani {

constructor(x, y, w, h){

    var options={

        restitution: 5,
        isStatic: false

    }

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    this.image = loadImage("im1.jpg")

    World.add(world, this.body);
}

display(){
push();
image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
pop();
}

}