import React from 'react'
import { Box } from '@mui/material'
import NewsSection from './NewsSection'

function NewsList () {
  const newsData = [
    {
      title: '市场信息',
      articles: [
        { title: '东盟市场潜力爆发，中国跨境电商瞄准RCEP区域深化合作与战略布局', url: '/#/region/ukc1a1' },
        { title: '新兴市场崛起：中东、非洲跨境电商市场发展潜力全面解析', url: '/#/region/usac3a1' },
        { title: '跨境电商物流瓶颈突破：海外仓建设与智慧物流解决方案探索', url: '/#/region/japanc3a1' },
      ],
    },
    {
      title: '行业快讯',
      articles: [
        { title: '郑州‘一展汇全球’跨境电商大会热议行业趋势与合规化发展', url: '/#/region/usac1a1' },
        { title: '成都跨境电商生态圈升级：数千家企业集聚，赋能产业带数字化转型', url: '/#/region/usac1a2' },
        { title: '双十一&黑五成绩单出炉：中国跨境电商再创新高，欧美市场占有率显著提升', url: '/#/region/ukc4a1' },
      ],
    },
    {
      title: '国际新闻',
      articles: [
        { title: 'WTO达成新协议推动跨境电商规范化，中小企业迎全球化新机遇', url: '/#/region/japanc1a1' },
        { title: '欧盟修订电商增值税规定，全球跨境卖家需关注的新一轮税务改革', url: '/#/region/aseanc1a1' },
        { title: '中美贸易谈判中跨境电商条款取得突破，利好两国电商企业互利合作', url: '/#/region/aseanc2a2' },
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
