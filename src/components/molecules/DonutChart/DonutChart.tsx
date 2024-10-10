import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface PieChartData {
  value: number;
  name: string;
  itemStyle: {
    borderRadius: number[];
    color: string;
  };
}

interface DonutChartProps {
  data: PieChartData[];
  zIndexOrder?: 'desc' | 'asc';
}

const DonutChart: React.FC<DonutChartProps> = ({ data, zIndexOrder = 'desc' }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);

    const option = {
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: -5,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '40',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data:data.map((item, index) => ({
            ...item,
            zlevel: 10, // Esto asegura que el orden del array determine el orden visual
          })),
        },
      ],
    };

    chart.setOption(option);

    // Cleanup on component unmount
    return () => {
      chart.dispose();
    };
  }, [data, zIndexOrder]);

  return <div ref={chartRef} style={{ height: 300 }} />;
};

export default DonutChart;
