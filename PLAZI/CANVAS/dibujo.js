var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;
var nxf, nyf;

while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = 10 * l;
  yf = 10 * (l + l);
  nxf = 300 - xf;
  nyf = 300 - yf;
    dibujarLinea("black", 0, xf, yi, 300);
    console.log("linea " + l);
    l = l + 1;

}




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
