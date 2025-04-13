function setup() { //設定函數，設定初始值的地方
    createCanvas(windowWidth, windowHeight); //創建畫布為視窗大小
    //畫布的背景顏色為fdfcdc
    background(253, 253, 220);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //畫布的背景顏色為fdfcdc
    background(253, 253, 220);
    //設定圓的顏色為fec89a
    fill(254, 200, 154);
    //設定圓的邊框顏色為ffb5a7
    stroke(255, 181, 167);
    //設定圓的邊框寬度為5
    strokeWeight(5);
    //在視窗的中間畫一個圓，圓的寬高為200
    //ellipse(width/2, height/2, 200, 200);
    //依照上面的圓顏色與框限顏色，從視窗的最左邊，產生連續的圓，到視窗的最右邊
    for (var x = 0; x <= width; x += 100) {
      ellipse(x, height/2, 100, 100);
    }
  }
  //當視窗的大小改變時，重新設定畫布的大小
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  