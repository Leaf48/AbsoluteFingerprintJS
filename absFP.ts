import md5 from "blueimp-md5";

const canvasFP = (): string => {
  const canvas = document.createElement("canvas");
  const dpr = window.devicePixelRatio || 1;
  // 高解像度描画用にサイズを調整
  canvas.width = 200 * dpr;
  canvas.height = 100 * dpr;
  canvas.style.display = "inline";
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  ctx.scale(dpr, dpr);

  // 背景グラデーション
  const gradient = ctx.createLinearGradient(0, 0, 200, 100);
  gradient.addColorStop(0, "#ff9a9e");
  gradient.addColorStop(1, "#fad0c4");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 200, 100);

  // テキスト描画（フォント、配置、影など）
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.font = "16px Arial";
  ctx.fillStyle = "#069";
  ctx.fillText("Canvas FP Test 😎", 100, 50);

  // シェイプ描画：複数の円と合成モードで差分を強調
  ctx.globalCompositeOperation = "difference";
  
  // 左側の円
  ctx.fillStyle = "rgba(255, 0, 0, 0.6)";
  ctx.beginPath();
  ctx.arc(50, 50, 20, 0, Math.PI * 2);
  ctx.fill();
  
  // 右側の円
  ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
  ctx.beginPath();
  ctx.arc(150, 50, 20, 0, Math.PI * 2);
  ctx.fill();

  // ハッシュ生成
  const dataURL = canvas.toDataURL();
  const hash = md5(dataURL);
  return hash;
};
