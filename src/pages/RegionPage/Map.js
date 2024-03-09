import React, { useEffect, useRef, useCallback } from 'react'
import * as echarts from 'echarts'
import worldJson from './world.json'
import { useNavigate } from 'react-router-dom'
import MapMarker from '../../pic/mapmarker.png'
import Boat from '../../pic/boat.png'
import Plane from '../../pic/plane.png'
import regionsData from './regions.json'



const Map = () => {
  const chartRef = useRef(null)
  const navigate = useNavigate()

  // eslint-disable-next-line 
  const handleCountryClick = useCallback((country) => {
    navigate(`/region/detail?country=${encodeURIComponent(country)}`)
  }, [navigate]) // `navigate` is stable and won't cause re-renders

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
        },
        regions: regionsData,
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
            width: 3,
            opacity: 0.6,
            curveness: 0.2
          },
          data: [
            {
              fromName: '中国',
              toName: '美国',
              coords: [[116.407526, 39.90403], [-95.712891, 37.09024]],
              lineStyle: { color: '#87CEEB' }
            },
            {
              fromName: '中国',
              toName: '日本',
              coords: [[116.407526, 39.90403], [138.252924, 36.204824]],
              lineStyle: { color: '#FFD700' }
            },
            {
              fromName: '中国',
              toName: '英国',
              coords: [[116.407526, 39.90403], [-3.435973, 55.378051]],
              lineStyle: { color: '#32CD32' }
            },
            {
              fromName: '中国',
              toName: '法国',
              coords: [[116.407526, 39.90403], [2.352222, 48.856614]],
              lineStyle: { color: '#4169E1' }
            },
            {
              fromName: '中国',
              toName: '德国',
              coords: [[116.407526, 39.90403], [10.451526, 51.165691]],
              lineStyle: { color: '#6A5ACD' }
            },
            {
              fromName: '中国',
              toName: '加拿大',
              coords: [[116.407526, 39.90403], [-106.346771, 56.130366]],
              lineStyle: { color: '#FFA07A' }
            },
            {
              fromName: '中国',
              toName: '澳大利亚',
              coords: [[116.407526, 39.90403], [133.775136, -25.274398]],
              lineStyle: { color: '#20B2AA' }
            },
            {
              fromName: '中国',
              toName: '印度',
              coords: [[116.407526, 39.90403], [78.96288, 20.593684]],
              lineStyle: { color: '#BA55D3' }
            },
            {
              fromName: '中国',
              toName: '巴西',
              coords: [[116.407526, 39.90403], [-51.92528, -14.235004]],
              lineStyle: { color: '#00FA9A' }
            },
            {
              fromName: '中国',
              toName: '俄罗斯',
              coords: [[116.407526, 39.90403], [105.318756, 61.52401]],
              lineStyle: { color: '#48D1CC' }
            },
            {
              fromName: '中国',
              toName: '东盟国家',
              coords: [[116.407526, 39.90403], [113.9145, 3.2028]],
              lineStyle: { color: '#FF6347' } // 浅橘色
            },
            {
              fromName: '中国',
              toName: '埃及',
              coords: [[116.407526, 39.90403], [30.802498, 26.820553]],
              lineStyle: { color: '#8A2BE2' } // 蓝紫色
            }
          ]
        },
        {
          name: 'Boat',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 3,
          symbol: `image://${Boat}`,
          symbolSize: [64, 64],
          data: [
            { value: [-40, 15] }, // 大西洋上的坐标，根据实际情况调整
            { value: [-100, -30] },
            { value: [150, 20] }
          ]
        },
        {
          name: 'Plane',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 3,
          symbol: `image://${Plane}`,
          symbolSize: [64, 64],
          data: [
            { value: [80, -10] }, // 印度洋上的坐标，根据实际情况调整
            { value: [-30, 50] }
          ]
        },

        {
          name: 'Markers',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 3,
          symbol: `image://${MapMarker}`, // 使用圆形标记
          symbolSize: [40, 40], // 圆形大小
          itemStyle: {
            opacity: 1 // 设置标记不透明度
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
            color: 'black', // 设置标签文字颜色为红色
            fontSize: 16
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
            { name: '俄罗斯', value: [105.318756, 61.52401] },
            // 新增国家数据
            { name: '东盟国家', value: [113.9145, 3.2028] },
            { name: '埃及', value: [30.802498, 26.820553] }
          ]

        }
      ]
    }

    myChart.setOption(option)

    // 添加点击事件监听器
    myChart.on('click', function (params) {
      // 判断点击的是否为'Markers'系列的元素
      if (params.seriesName === 'Markers') {
        const countryName = params.name // 获取国家名称
        handleCountryClick(countryName) // 调用函数进行页面跳转
      }
    })

    return () => {
      myChart.dispose()
    }
  }, [handleCountryClick])




  return (
    <div style={{ position: 'relative', width: '100%', height: '95vh' }}>
      <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  )
}

export default Map
