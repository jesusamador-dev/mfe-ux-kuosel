  buildPath: function (ctx, shape) {
    const { cx, cy, r0, r, startAngle, endAngle, valueFactor, heightFactor } = shape;

  
    // Ajustar los radios para mantener la alineación al centro
    const thickness = (r - r0) * heightFactor + 15; // Aumentar grosor
    const adjustedR0 = r0 + (thickness / 2) * (1 - heightFactor); // Ajustar r0 para centrar el grosor
    const adjustedR = adjustedR0 + thickness;

    // Dibujar el sector de dona correctamente
    ctx.moveTo(cx + adjustedR0 * Math.cos(startAngle), cy + adjustedR0 * Math.sin(startAngle));
    ctx.arc(cx, cy, adjustedR, startAngle, endAngle, false);
    ctx.lineTo(cx + adjustedR0 * Math.cos(endAngle), cy + adjustedR0 * Math.sin(endAngle));
    ctx.arc(cx, cy, adjustedR0, endAngle, startAngle, true);
    ctx.closePath();
  },


  // const options: echarts.EChartsOption = {
    //   series: [
    //     {
    //       type: "custom", // Usar la serie 'custom' proporcionada por ECharts
    //       coordinateSystem: "none",
    //       renderItem: (params, api) => {
    //         const value = api.value(0);
    //         let heightFactor = api.value(1) || 1;
    //         const total = totalValue;
    //         const proportion = Number(value) / total;
    //         heightFactor = Number(heightFactor) / total;

    //         const initialAngle = -Math.PI / 2;
    //         let startAngle = initialAngle;
    //         if (params.dataIndex > 0) {
    //           startAngle = data
    //             .slice(0, params.dataIndex)
    //             .reduce(
    //               (acc, cur) => acc + (cur.value / total) * Math.PI * 2,
    //               initialAngle
    //             );
    //         }
    //         const endAngle = startAngle + proportion * Math.PI * 2;

    //         // Ajustar la forma en base a los valores
    //         return {
    //           type: "CustomSector", // Usa la forma personalizada registrada
    //           shape: {
    //             cx: api.getWidth() / 2,
    //             cy: api.getHeight() / 2,
    //             r0: 50,
    //             r: 100,
    //             startAngle: startAngle,
    //             endAngle: endAngle,
    //             valueFactor: proportion,
    //             heightFactor,
    //             borderRadius: 10,
    //           },
    //           style: {
    //             fill: data[params.dataIndex].itemStyle.color, // Obtener el color de la propiedad 'color'
    //             stroke: "#000", // Color del borde (negro, en este ejemplo)
    //             lineWidth: 2,
    //             borderRadius: [10, 10, 10 ,10]
    //           },
    //         };
    //       },
    //       data: data.map((item) => [
    //         item.value,
    //         item.heightFactor,
    //         item.itemStyle,
    //       ]), // Pasar valores y nombres como array
    //     },
    //   ],
    // };