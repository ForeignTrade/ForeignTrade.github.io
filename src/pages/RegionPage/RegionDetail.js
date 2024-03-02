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
    },
    {
      country: '日本',
      sections: [
        {
          title: '分析日本政治',
          articles: [
            { title: '外贸解说：解读日本国际关系', url: '/region/japanc1a1' },
            { title: '外贸视角：分析日本贸易方面法律框架', url: '/region/japanc1a2' },
            { title: '专家解析：概括日本政治体系', url: '/region/japanc1a3' },
            { title: '专家评估：日本对外贸易政策环境', url: '/region/japanc1a4' },
            { title: '专家评估：日本政治风险分析', url: '/region/japanc1a5' },
          ],
        },
        {
          title: '分享日本文化',
          articles: [
            { title: '外贸锦囊：分享日本市场的消费习惯', url: '/region/japanc2a1' },
            { title: '专家探讨：分析文化差异', url: '/region/japanc2a2' },
            { title: '专家讨论：解构日本的社会文化', url: '/region/japanc2a3' },
            { title: '最新资料：带你了解日本商业文化', url: '/region/japanc2a4' },
          ],
        },
        {
          title: '解解读日本经济',
          articles: [
            { title: '今日分享：分享日本最新贸易数据', url: '/region/japanc3a1' },
            { title: '今日聚焦：谈日本市场概况', url: '/region/japanc3a2' },
            { title: '外贸视角：分析当今日本投资环境', url: '/region/japanc3a3' },
            { title: '专家探讨：分析日本各大产业现状', url: '/region/japanc3a4' },
          ],
        },
        {
          title: '聚焦时事热点',
          articles: [
            { title: '今日聚焦：日本时事热点', url: '/region/japanc4a1' },
          ],
        },
      ],
    },
    {
      country: '东盟国家',
      sections: [
        {
          title: '热点聚焦：东盟国家近期大事记',
          articles: [
            { title: '今日聚焦：2024中国东盟人文交流年', url: '/region/aseanc1a1' },
            { title: '今日聚焦：中国东盟自贸区3.0建设', url: '/region/aseanc1a2' },
            { title: '专家视角：2023.12东盟各国热点解读', url: '/region/aseanc1a3' },
            { title: '专家视角：2024.1东盟各国热点解读', url: '/region/aseanc1a4' },
          ],
        },
        {
          title: '专家分析：东盟国家的经济探究',
          articles: [
            { title: '今日分享：东盟的贸易数据详情', url: '/region/aseanc2a1' },
            { title: '外贸锦囊：东盟的财经资讯速览', url: '/region/aseanc2a2' },
            { title: '外贸精讲：东盟的投资环境研讨', url: '/region/aseanc2a3' },
            { title: '专家视角：东盟的市场概况解读', url: '/region/aseanc2a4' },
            { title: '专家专访：东盟的产业分析深度分析', url: '/region/aseanc2a5' },
          ],
        },
        {
          title: '专家视角：东盟国家的政治研究',
          articles: [
            { title: '专家专访：解读东盟的国际关系', url: '/region/aseanc3a1' },
            { title: '专家视角：解读东盟的政策环境', url: '/region/aseanc3a2' },
            { title: '专家解读：东盟的法律框架研讨', url: '/region/aseanc3a3' },
            { title: '研讨聚焦：解读东盟的政治稳定性', url: '/region/aseanc3a4' },
            { title: '视野拓展：解读东盟的政治体系', url: '/region/aseanc3a5' },
          ],
        },
        {
          title: '专家研讨：东盟国家的文化分析',
          articles: [
            { title: '精选专栏：解读东盟的社会文化', url: '/region/aseanc4a1' },
            { title: '热点聚焦：解读东盟的文化差异', url: '/region/aseanc4a2' },
            { title: '专家解读：东盟的商业文化一览', url: '/region/aseanc4a3' },
            { title: '专家视角：东盟的消费习惯分析', url: '/region/aseanc4a4' },
          ],
        },
      ],
    },
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
