import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import worldJson from './world.json'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const FlightMap = () => {
  const chartRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    echarts.registerMap('world', worldJson) // 注册地图数据
    const myChart = echarts.init(chartRef.current)

    const option = {
      tooltip: {
        trigger: 'item'
      },
      geo: {
        map: 'world',
        zoom: 1.2,
        center: [0, 20],
        roam: false, // 禁止地图缩放和平移
        itemStyle: {
          areaColor: '#f4f4f4',
          borderColor: '#999'
        },
        emphasis: {
          itemStyle: {
            areaColor: '#e6e6e6'
          }
        }
      },
      series: [
        {
          name: '航线',
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 2,
          large: true,
          effect: {
            show: true,
            constantSpeed: 100,
            symbol: 'arrow',
            symbolSize: 6,
            trailLength: 0
          },
          lineStyle: {
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          },
          data: [
            {
              fromName: '中国',
              toName: '美国',
              coords: [[116.407526, 39.90403], [-95.712891, 37.09024]],
              lineStyle: { color: '#a6c84c' }
            },
            {
              fromName: '中国',
              toName: '日本',
              coords: [[116.407526, 39.90403], [138.252924, 36.204824]],
              lineStyle: { color: '#FF5722' }
            },
            {
              fromName: '中国',
              toName: '英国',
              coords: [[116.407526, 39.90403], [-3.435973, 55.378051]],
              lineStyle: { color: '#4CAF50' }
            },
            {
              fromName: '中国',
              toName: '法国',
              coords: [[116.407526, 39.90403], [2.352222, 48.856614]],
              lineStyle: { color: '#2196F3' }
            },
            {
              fromName: '中国',
              toName: '德国',
              coords: [[116.407526, 39.90403], [10.451526, 51.165691]],
              lineStyle: { color: '#9C27B0' }
            },
            {
              fromName: '中国',
              toName: '加拿大',
              coords: [[116.407526, 39.90403], [-106.346771, 56.130366]],
              lineStyle: { color: '#FFEB3B' }
            },
            {
              fromName: '中国',
              toName: '澳大利亚',
              coords: [[116.407526, 39.90403], [133.775136, -25.274398]],
              lineStyle: { color: '#FFC107' }
            },
            {
              fromName: '中国',
              toName: '印度',
              coords: [[116.407526, 39.90403], [78.96288, 20.593684]],
              lineStyle: { color: '#673AB7' }
            },
            {
              fromName: '中国',
              toName: '巴西',
              coords: [[116.407526, 39.90403], [-51.92528, -14.235004]],
              lineStyle: { color: '#00BCD4' }
            },
            {
              fromName: '中国',
              toName: '俄罗斯',
              coords: [[116.407526, 39.90403], [105.318756, 61.52401]],
              lineStyle: { color: '#E91E63' }
            }
          ]
        },
        {
          name: 'Markers',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 3,
          symbol: 'circle', // 使用圆形标记
          symbolSize: 10, // 圆形大小
          itemStyle: {
            color: 'red', // 设置标记颜色为红色
            opacity: 1 // 设置标记不透明度
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
            color: 'red' // 设置标签文字颜色为红色
          },
          data: [
            { name: '中国', value: [116.407526, 39.90403] },
            { name: '美国', value: [-95.712891, 37.09024] },
            { name: '日本', value: [138.252924, 36.204824] },
            { name: '英国', value: [-3.435973, 55.378051] },
            { name: '法国', value: [2.352222, 48.856614] },
            { name: '德国', value: [10.451526, 51.165691] },
            { name: '加拿大', value: [-106.346771, 56.130366] },
            { name: '澳大利亚', value: [133.775136, -25.274398] },
            { name: '印度', value: [78.96288, 20.593684] },
            { name: '巴西', value: [-51.92528, -14.235004] },
            { name: '俄罗斯', value: [105.318756, 61.52401] }
          ]
        }
      ]
    }

    myChart.setOption(option)

    return () => {
      myChart.dispose()
    }
  }, [])

  const handleClick = () => {
    navigate('/news')
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: '20%',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          padding: '20px 40px',
          zIndex: 10, // 确保按钮位于图表上方
        }}
      >
        进入网站
      </Button>
    </div>
  )
}

export default FlightMap