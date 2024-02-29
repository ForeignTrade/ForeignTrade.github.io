import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import SearchBar from './SearchBar'
import NewsSection from './NewsSection'

function RegionDetail () {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const country = queryParams.get('country')

  const newsData = [
    {
      country: '美国',
      sections: [
        {
          title: '洞察美国经济',
          articles: [
            { title: '今日分享：分析美国贸易数据', url: '/region/usac1a1' },
            { title: '今日聚焦：解读美国市场概况', url: '/region/usac1a2' },
            { title: '专家视角：美国产业群供应链分析', url: '/region/usac1a3' },
            { title: '专家视角：美国投资环境的判断及风险评估', url: '/region/usac1a4' },
          ],
        },
        {
          title: '分析美国政治',
          articles: [
            { title: '今日分享：解读美国政治体系', url: '/region/usac2a1' },
            { title: '专家分析：美国政治稳定性的判断', url: '/region/usac2a2' },
            { title: '专家视角：了解美国相关政策环境', url: '/region/usac2a3' },
            { title: '专家探讨：分析美国国际关系', url: '/region/usac2a4' },
            { title: '专家探讨：解读美国法律框架', url: '/region/usac2a5' },
          ],
        },
        {
          title: '解读美国文化',
          articles: [
            { title: '外贸锦囊：比较分析中美文化差异', url: '/region/usac3a1' },
            { title: '外贸视角：研究美国消费习惯', url: '/region/usac3a2' },
            { title: '外貌精讲：美国的商业文化', url: '/region/usac3a3' },
            { title: '专家视角：解读美国社会文化', url: '/region/usac3a4' },
          ],
        },
      ],
    },
    {
      country: '英国',
      sections: [
        {
          title: '英国近期时事热点一览',
          articles: [
            { title: '外贸人要了解的英国近期时事热点', url: '/region/ukc1a1' },
          ],
        },
        {
          title: '英国文化集锦',
          articles: [
            { title: '外贸锦囊：论中英文化差异', url: '/region/ukc2a1' },
            { title: '外贸精讲课：跨文化营销案例研究', url: '/region/ukc2a2' },
            { title: '外贸精讲课：英国商业文化', url: '/region/ukc2a3' },
            { title: '外贸视角分析英国消费习惯', url: '/region/ukc2a4' },
            { title: '专家视角：解读英国社会文化', url: '/region/ukc2a5' },
          ],
        },
        {
          title: '英国政治说',
          articles: [
            { title: '今日聚焦：英国政策稳定性', url: '/region/ukc3a1' },
            { title: '外贸人必须知道的那点事：英国法律框架', url: '/region/ukc3a2' },
            { title: '外贸入门：了解英国政治体系', url: '/region/ukc3a3' },
            { title: '专家视角：论英国国际关系', url: '/region/ukc3a4' },
            { title: '专家探讨英国政策环境', url: '/region/ukc3a5' },
          ],
        },
        {
          title: '专家解读英国经济',
          articles: [
            { title: '今日分享：英国最新几年贸易数据', url: '/region/ukc4a1' },
            { title: '今日聚焦：英国最新财经资讯，预测未来经济走势', url: '/region/ukc4a2' },
            { title: '专家分析英国各大产业群，供应链及竞争情况', url: '/region/ukc4a3' },
            { title: '专家视角：英国投资环境政策及风险评估', url: '/region/ukc4a4' },
            { title: '专家专访：谈英国市场概况', url: '/region/ukc4a5' },
          ],
        },
      ],
    }
  ]

  const filteredNewsData = newsData.find(section => section.country === country)

  return (
    <Box>
      <SearchBar />
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          您选择的地区是 <span style={{ fontWeight: 'bold' }}>{country}</span>
        </Typography>
        <Button variant="contained" sx={{ marginBottom: '20px' }}>
          文书翻译
        </Button>
        <Box sx={{ width: '70%' }}>
          {filteredNewsData ? (
            filteredNewsData.sections.map((section, index) => (
              <NewsSection key={index} title={section.title} articles={section.articles} />
            ))
          ) : (
            <Typography variant="h6">未找到相关新闻</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RegionDetail
