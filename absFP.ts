import md5 from "blueimp-md5";

const canvasFP = (): string => {
  var result: { canvasWinding?: any; rawData?: any; hash?: any } = {};
  var canvas = document.createElement("canvas");
  canvas.width = 2000;
  canvas.height = 200;
  canvas.style.display = "inline";
  var ctx = canvas.getContext("2d");
  if (!ctx) return "";

  ctx.rect(0, 0, 10, 10);
  ctx.rect(2, 2, 6, 6);
  result.canvasWinding =
    ctx.isPointInPath(5, 5, "evenodd") === false ? "yes" : "no";

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = "#069";

  ctx.font = "11pt Arial";

  ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
  ctx.font = "18pt Arial";
  ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);

  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = "rgb(255,0,255)";
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgb(0,255,255)";
  ctx.beginPath();
  ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgb(255,255,0)";
  ctx.beginPath();
  ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgb(255,0,255)";

  ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
  ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
  ctx.fill("evenodd");

  if (canvas.toDataURL) {
    result.rawData = canvas.toDataURL();
    result.hash = md5(result.rawData);
  }
  return result.hash;
};
