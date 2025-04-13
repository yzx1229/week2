function setup() { //設定函數，設定初始值的地方
    createCanvas(windowWidth, windowHeight); //創建畫布為視窗大小
    colorMode(HSB); // 設定顏色模式為HSB
    //畫布的背景顏色為fdfcdc
    background(60, 10, 100);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //畫布的背景顏色為fdfcdc
    background(60, 10, 100);
    
    //計算根據滑鼠位置的大小
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    //設定方框和圓形的間距
    let spacing = size + 20;
    
    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        //設定方框方框的顏色為HSB格式
        fill(340, 30, 70);
        //設定方框的邊框顏色為HSB格式
        stroke(10, 30, 100);
        //設定方框的邊框寬度為10
        strokeWeight(10);
        //在視窗中間畫一個方框，以方框中心點為基準點，寬高為動態大小
        rectMode(CENTER);
        rect(x, y, size, size);
        
        //設定圓的顏色為HSB格式
        fill(10, 100, 50);
        //設定圓的邊框顏色為HSB格式
        stroke(20, 20, 90);
        //設定圓的邊框寬度為10
        strokeWeight(10);
        //在視窗中間畫一個圓型，圓的寬高為方框的大小的80%
        ellipse(x, y, size * 0.8, size * 0.8);
      }
    }
  }