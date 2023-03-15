class Cannon 
{
  //acrescente o argumento angle ao constructor
  constructor(x, y, width, height,angle) 
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //defina a variável angle para armazenar o ângulo → this.angle = angle;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }

  display() 
  {
    //condição para mover o canhão para baixo precionando a seta para a direita
    if (keyIsDown(RIGHT_ARROW) && this.angle<70){
      this.angle += 1;
    }


    //condição para mover o canhão para cima precionando a seta para a esquerda
    if(keyIsDown(LEFT_ARROW) && this.angle>-30){
      this.angle -= 1;
    }

    
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();

    image(this.cannon_base, 70, 20, 200, 200);

    noFill();
  }
}
