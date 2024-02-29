import React from 'react'
import { Box, Typography } from '@mui/material'

function Article () {
  return (
    <Box sx={{
      maxWidth: '70%',
      margin: 'auto',
      textAlign: 'justify',
      padding: '20px', // 设置容器与网页上左右三边有一定的距离
    }}>
      <Typography variant="h4" sx={{
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center', // 标题居中
        fontSize: '2rem', // 使用更大的字号
      }}>
        专家视角：英国投资环境政策及风险评估
      </Typography>
      <Typography paragraph variant="h5">
        一、对外投资
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        截至2021年底，英国对外投资存量1.75万亿英镑，比2020年增长0.9%，比2011年增长58.3%。据UCTAD最新统计，英国为全球第四大对外投资国。英国对主要投资目的国（地区）投资金额和占比分别为美国4614亿英镑、26.1%；荷兰1552亿英镑、8.8%；卢森堡1272亿英镑、7.2%；西班牙959亿英镑、5.4%；法国916亿英镑、5.2%；中国香港776亿英镑、4.4%。
      </Typography>

      <Typography paragraph variant="h5">
        二、投资激励政策：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国中央、地方政府均有对外国投资的鼓励优惠政策。外国投资项目可以同时享受多项支持政策。主要支持政策有：国家援助计划、地区援助计划、当地援助计划、特殊项目援助计划、研究与开发援助计划。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        其中【研究和开发援助计划】包括：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （1）研发税额减免，适用于从事研发业务的大型企业及中小型企业。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        ①大型企业（员工在500人以上）：除了常规的100%减免，大型企业还可获得对应缴税收入的进一步折扣，减免额是其为获得研发资格支出的30%。自2013年4月起，大型企业还将选择性地享受9.1%的研发开支减免税，并于2016年全面实施。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        ②中小企业（员工在500人以下）：除了常规的100%减免，中小型企业还可获得对应缴税收入的进一步折扣，减免额是其为获得研发资格支出的125%。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （2）研发补贴计划，指向从事技术创新型产品、工艺研发业务的个人或中小企业提供资金支持，金额在2.5万至25万英镑之间。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （3）专利减免税，自2013年4月起，有关专利收入或利润减按10%的企业所得税税率征收。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （4）创意产业减免税，自2013年4月起，经欧盟国家援助计划批准，高端电视、模拟、视频游戏等行业可享受100%的开支免税抵扣或25%的亏损免税抵扣。根据2015年财政预算，政府为电视和电影业提供更加慷慨的税收抵免，扩大对电子游戏业的支持，为交响乐团提供新的税收抵免。
      </Typography>

      <Typography paragraph sx={{ textIndent: '2em' }}>
        （5）尤里卡计划，指向从事技术创新型产品、工艺和服务的研发业务的泛欧企业、研究中心和大学提供资金支持，优先支持中小企业。项目参与者需自筹资金，英国政府可提供最高达50%成本的补贴。
      </Typography>

      <Typography paragraph variant="h5">
        三、投资风险评估：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国是市场经济的发源地，自由竞争理念深入人心，企业的商业风险意识普遍较强，政府也不干预企业经营活动。对于有志来英国投资的中资企业而言，最需要注意的是投资项目的商业风险。企业在投资前应认真做好项目可行性调研，充分了解目标市场状况、竞争对手情况、项目运营成本、企业融资条件、人力资源要素等情况。如果考虑通过并购方式投资，需要对并购对象做好尽职调查。
      </Typography>
    </Box>
  )
}

export default Article
