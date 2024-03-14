export function startDrawing(color, lineThickness) {
  const canvas = document.getElementById("draw");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth * 0.7;
  canvas.height = window.innerHeight * 0.6;
  ctx.strokeStyle = `${color}`;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = lineThickness;

  let isDrawing = false;

  const draw = (e) => {
    if (!isDrawing) return;
    if (lastX === 0 && lastY === 0) {
      lastX = e.offsetX;
      lastY = e.offsetY;
    }
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  };

  let lastX = 0;
  let lastY = 0;
  canvas.addEventListener("mousedown", (e) => {
    lastX = e.offsetX;
    lastY = e.offsetY;
    isDrawing = true;
  });
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));
  canvas.addEventListener("mousemove", draw);
}

export function clearCanvas() {
  const canvas = document.getElementById("draw");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth * 0.7;
  canvas.height = window.innerHeight * 0.6;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}