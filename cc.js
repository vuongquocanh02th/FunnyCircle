function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
//Sinh so ngau nhien tu 0-255
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

//Sinh mau ngau nhien
function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

function createCirle() {
    var ctx = document.getElementById('cv').getContext('2d');
    //Ban kinh ngau nhien 0-80
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle = new Circle(x, y, radius);
    ctx.beginPath();
    //Dung phuong thuc arc de ve hinh tron, x va y la toa do
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultiCircle() {
    for (var i = 0; i < 30; i++) {
        createCirle();
    }
}

createMultiCircle();