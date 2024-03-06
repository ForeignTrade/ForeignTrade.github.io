import React from 'react'
import { Box } from '@mui/material'
import NewsSection from './NewsSection'

function NewsList () {
  const newsData = [
    {
      title: '市场信息',
      articles: [
        { title: '外贸人要了解的英国近期时事热点', url: '/#/region/ukc1a1' },
        { title: '外贸锦囊：比较分析中美文化差异', url: '/#/region/usac3a1' },
        { title: '今日分享：分享日本最新贸易数据', url: '/#/region/japanc3a1' },
        { title: '外贸视角：分析当今日本投资环境', url: '/#/region/japanc3a3' },
      ],
    },
    {
      title: '行业快讯',
      articles: [
        { title: '今日分享：分析美国贸易数据', url: '/#/region/usac1a1' },
        { title: '今日聚焦：解读美国市场概况', url: '/#/region/usac1a2' },
        { title: '今日分享：英国最新几年贸易数据', url: '/#/region/ukc4a1' },
        { title: '今日聚焦：英国最新财经资讯，预测未来经济走势', url: '/#/region/ukc4a2' },
      ],
    },
    {
      title: '国际新闻',
      articles: [
        { title: '外贸解说：解读日本国际关系', url: '/#/region/japanc1a1' },
        { title: '今日聚焦：2024中国东盟人文交流年', url: '/#/region/aseanc1a1' },
        { title: '外贸锦囊：东盟的财经资讯速览', url: '/#/region/aseanc2a2' },
        { title: '专家视角：美国产业群供应链分析', url: '/#/region/usac1a3' },
      ],
    },
  ]

  return (
    <Box sx={{ '& > *:not(:last-child)': { marginBottom: '50px' } }}>
      {newsData.map((section, index) => (
        <NewsSection key={index} title={section.title} articles={section.articles} />
      ))}
    </Box>
  )
}

export default NewsList
