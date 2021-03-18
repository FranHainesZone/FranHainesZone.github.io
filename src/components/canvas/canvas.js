/** @jsx jsx */
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://www.youtube.com/watch?v=FLESHMJ-bI0&ab_channel=MaksimIvanov
// https://stackoverflow.com/questions/56299797/how-to-change-the-color-of-an-animation-in-a-canvas-by-using-javascript
import { jsx } from "@emotion/core";
import { useRef, useEffect } from "react";

export const Canvas = () => {
  const canvasRef = useRef(null);
  let hue = 10;

  const drawCircle = (context) => {
    let circle = new Path2D();
    const innerRadius = 6;
    const outerRadius = 70;
    hue++;
    let hueBehind = hue - 10;

    const radialGradient = context.createRadialGradient(
      150,
      180,
      innerRadius,
      150,
      180,
      outerRadius
    );
    radialGradient.addColorStop(0, "hsl(" + hue + ", 60%, 70%)");
    radialGradient.addColorStop(1, "hsl(" + hueBehind + ", 60%, 70%)");

    context.fillStyle = radialGradient;
    context.beginPath();
    circle.arc(150, 180, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.fill(circle);

    console.log(hueBehind);
  };

  const draw = (ctx) => {
    drawCircle(ctx);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);

    const interval = setInterval(() => {
      draw(context);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} width="1000" height="450" />;
};

export default Canvas;
