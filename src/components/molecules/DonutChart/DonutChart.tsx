import React, { useEffect, useRef } from "react";
import echarts from "./ExtendEcharts"; // Importar la extensión antes de usarla

export interface PieChartData {
  value: number;
  name: string;
  heightFactor?: number;
  itemStyle: {
    borderRadius: number[];
    color: string;
  };
}

export interface DonutChartProps {
  data: PieChartData[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const calculateHeightFactor = (data: PieChartData[]) => {
    const baseValue = data[0].value;

    return data.map((item, index) => {
      return {
        ...item,
        heightFactor: baseValue * Math.pow(0.5, index),
      };
    });
  };

  useEffect(() => {
    if (!chartRef.current) return;

    // Validar los datos
    if (!data || data.length === 0) {
      console.warn("No data provided to DonutChart");
      return;
    }

    const totalValue = data.reduce((sum, item) => sum + item.value, 0);
    if (totalValue === 0) {
      console.warn(
        "Total value of data is zero, please provide non-zero values."
      );
      return;
    }

    data = calculateHeightFactor(data);

    // Inicializar el gráfico
    const chart = echarts.init(chartRef.current, null, {
      renderer: "svg",
    });

    
    const options = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };

    chart.setOption(options);

    // Limpiar el gráfico cuando el componente se desmonte
    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ height: 300, width: "100%" }} />;
};

export default DonutChart;
