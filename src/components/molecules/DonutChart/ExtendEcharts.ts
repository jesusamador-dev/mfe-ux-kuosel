import * as echarts from "echarts";

// Definir una nueva forma personalizada extendiendo un Sector
const CustomSector = echarts.graphic.extendShape({
  type: "CustomSector",
  shape: {
    cx: 0,
    cy: 0,
    r0: 0,
    r: 0,
    startAngle: 0,
    endAngle: Math.PI * 2,
    valueFactor: 1,
    heightFactor: 1,
  },
  buildPath: function (ctx, shape) {
    const { cx, cy, r0, r, startAngle, endAngle, heightFactor } = shape;

    // Ajustar el grosor del sector según el heightFactor
    const thickness = (r - r0) * heightFactor + 30;
    const outerRadius = r0 + thickness; // Radio externo ajustado

    // Coordenadas del punto inicial del arco externo
    const x0 = cx + r0 * Math.cos(startAngle);
    const y0 = cy + r0 * Math.sin(startAngle);
    const x1 = cx + outerRadius * Math.cos(startAngle);
    const y1 = cy + outerRadius * Math.sin(startAngle);

    const x3 = cx + r0 * Math.cos(endAngle);
    const y3 = cy + r0 * Math.sin(endAngle);

    // Crear el camino del sector
    ctx.moveTo(x0, y0); // Mover al punto inicial del arco interno
    ctx.lineTo(x1, y1); // Línea hasta el punto inicial del arco externo
    ctx.arc(cx, cy, outerRadius, startAngle, endAngle, false); // Arco externo

    // Línea al punto final del arco interno
    ctx.lineTo(x3, y3);
    ctx.arc(cx, cy, r0, endAngle, startAngle, true); // Arco interno en sentido inverso

    ctx.closePath(); // Cerrar el camino
  }
});

// Registrar la nueva forma personalizada
echarts.graphic.registerShape("CustomSector", CustomSector);

export default echarts;
