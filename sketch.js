// function setup() {
//     createCanvas(400, 400);
//     background(204);
//   }
  
//   function draw() {
//     translate(mouseX, mouseY);
//     rect(0, 0, 60, 60);
//     rect(230, 120, 30, 60);
//     rect(70, 40, 60, 90);

//   }
// function setup() {
//     createCanvas(400, 400);
//   }
  
//   function draw() {
//     translate(mouseX, mouseY);
//     rect(0, 0, 60, 60);
//     translate(mouseX, mouseY);//전체적으로 마우스를 따라서 트랜스레이트되고 두번째는 거기다 수치를 더해서 적용(계속 중첩되서 적용됨)

    
//     rect(0, 0, 30, 30);
//   }

// function setup() {
//     createCanvas(400, 400);
//     background(204);
//     rectMode(CENTER);
//   }
  
//   function draw() {
//       translate(width / 2, height / 2);
//     rotate(mouseX / 100.0);
//     rect(100, 50, 160, 30);
//   }

// let angle = 0.0;

// function setup() {
//   createCanvas(400, 400);
//   background(204);
// }

// function draw() {
//   translate(mouseX, mouseY);
//   rotate(angle);
//   rect(-15, -15, 30, 30);
//   angle += 0.1;
// }
// function setup() {
//     createCanvas(400, 400);
//     background(204);
//   }
  
//   function draw() {
//     translate(mouseX, mouseY);
//     let scalar = mouseX / 90.0;
//     scale(scalar);
//     strokeWeight(1.0 / scalar);// 반비례하도록
//     rect(-15, -15, 30, 30);
//   }

// let x = 0;
// function setup() {
//     createCanvas(400, 400);
//     background(204);
//   }
  
//   function draw() {
//     push();
//     translate(mouseX, mouseY);
//     fill(255,255,0);
//     rect(0, 0, 30, 30);
//     pop();

//     push();
//     translate(x, height / 2);
//     rect(0, 0, 50,50);
//     pop();
//     x += 1;

//     translate(100, 150);
//     rect(0, 0, 60, 60);
//   }

// let easing = 0;
  function setup() {
    createCanvas(500, 500);
    stroke(10);
  }
  
  function draw() {
    background(255);
    translate(mouseX, mouseY);
    let scalar = mouseX / 200.0;
    scale(scalar);
    strokeWeight(1.0 / scalar);   

    for (let b1 = 20; b1 <= 500; b1 += 20) {
      for (let b2 = 20; b2 <= 500; b2 += 20) {
        ellipse(0, 0, b1, b2);
        fill(100, 10);
      }
    }
  }
