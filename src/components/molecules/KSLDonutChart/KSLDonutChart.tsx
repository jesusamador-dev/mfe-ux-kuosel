import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export interface PieChartData {
  value: number;
  name: string;
  itemStyle: {
    borderRadius: number[];
    color: string;
  };
}

export interface KSLDonutChartProps {
  data: PieChartData[];
}

const KSLDonutChart: React.FC<KSLDonutChartProps> = ({ data }) => {
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
  }, [data]);

  return <div ref={chartRef} style={{ height: 300 }} />;
};

export default KSLDonutChart;
