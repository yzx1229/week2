function setup() { //設定函數，設定初始值的地方
  createCanvas(windowWidth, windowHeight); //創建畫布為視窗大小
  colorMode(HSB); // 設定顏色模式為HSB
}

function draw() { //畫圖函數，畫圖的地方
  // 計算色相和亮度
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓的顏色為HSB格式
  fill(hue, 100, brightness);
  noStroke(); // 不要邊框

  // 在滑鼠位置畫一個圓，寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

// 當視窗的大小改變時，重新設定畫布的大小      
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}