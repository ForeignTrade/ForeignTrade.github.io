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
        今日聚焦：英国最新财经资讯，预测未来经济走势
      </Typography>
      <Typography paragraph variant="h5">
        一、最新经济新闻
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （1）英国经济学家研究发现，预测通货膨胀越来越困难，这种现象正在颠覆市场，并可能使英国央行在降息方面更加谨慎。机构调查的分析显示，在过去一年里，经济学家的普遍预期没有一次与英国国家统计局报告的数据相符，这是七国集团(G7)中最差的记录。2023年有4个月的通胀数据落在经济学家预测范围区间之外，表现也落后于七国集团(G7)其他成员国。这一趋势对政策制定者和投资者产生了严重影响，引发了市场对数据的更强烈反应，并降低了通胀压力下行的确定性。在2月1日英国央行公布下一次利率决议时，相较于美联储和欧洲央行，这可能会让英国央行行长贝利对发出通胀正在得到控制的信号更加谨慎。花旗首席英国经济学家Ben Nabarro表示，规模较小的开放英国经济意味着，当"我们遭受特别大且重叠的供应冲击"时，通胀数据可能会更加波动。这种与其它地区的结构性差异也意味着，英国将“在未来几十年里”因全球供应冲击而“遭受更大的通胀波动”。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （2）英国国家经济社会研究所(NIESR)的报告指出，英国正面临长达五年的经济增长丧失期。这一时期内，低经济增长和停滞的生产率增长将增加收入分配下半部分家庭的财务脆弱性，以及最贫困者的赤贫现象。预计到2024年，这些家庭的实际可支配收入短缺将达到2019年至2024年期间的17%。此外，英国的实际工资在多个地区预计将低于疫情前水平，西米德兰兹地区的实际工资预计将比2019年低约5%。
      </Typography>
      <Typography paragraph variant="h5">
        二、经济预测：未来经济走势预测
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （1）NIESR预测，未来将有一次25个基点的银行利率上调，达到5.50%的峰值。预测还包括到2024年失业率将达到4.7%，并在2026年达到其“自然率”的峰值5.1%。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （2）IMF2023年 7月发布报告认为，英经济2023年将增长0.4%，2024年增长1%，2025年增长2%。
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：英国最新财经资讯，预测未来经济走势-1.jpg')} alt="British Economic News" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：英国最新财经资讯，预测未来经济走势-2.jpg')} alt="British Economic Forecast" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph variant="h5">
        三、金融市场：股市、债市、外汇市场状况
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        1、股市展望：英国的股市在经历了一系列政治不稳定和经济挑战后，依然展现出某种韧性。预计2024年GDP增长率为0.6%，面临着衰退的潜在风险。尽管英国股市相对于国际同行交易折扣，但英国最大的100家上市公司约80%的收入来自全球市场，这意味着这些公司的成功不仅依赖于英国经济的健康。英国市场以其作为领先的收入市场的历史而闻名，许多企业长期以来一直在增加股息，目前是最高收益率的股票市场之一，约为4%，为收入投资者提供了吸引力。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2、债市展望：从长期投资者的角度来看，当前的利率上升被视为过去20年中最好的经济和金融发展。对于英国债券，预计未来十年的名义年化回报率在4.4%到5.4%之间，而在利率上升周期开始之前，预期的年化回报率仅为0.8%到1.8%。这种利率水平的收入组成部分，如果再投资，最终将超过过去两年中经历的资本损失。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        3、外汇市场展望：虽然本次分析中未直接涉及外汇市场的具体展望，但高利率环境对外汇市场有重要影响。英国央行预计在2024年下半年开始降低政策利率，尽管如此，政策利率预计将保持在全球金融危机和Covid-19大流行期间之后的较高水平。这一结构性转变预计将持续数年，而非仅仅几个月，这对于借款人来说可能是坏消息，但对于储蓄者和多元化投资者来说则是好消息。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        4、综合分析：英国金融市场面临一系列挑战和机遇。股市尽管面临经济增长缓慢和潜在的衰退风险，但长期投资者可能会发现价值，特别是在分红支付企业方面。债市对于长期投资者而言，当前利率上升代表了一个重要的正向发展，预期未来十年将提供较高的回报率。外汇市场则可能受到英国利率政策调整的影响，高利率环境将对借款成本产生影响，同时为储蓄和投资提供更有利的条件。
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日聚焦：英国最新财经资讯，预测未来经济走势-3.jpg')} alt="British Economic Forecast" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        当前的财经资讯显示，全球经济面临不确定性，各国经济增长放缓，英国经济特别受到影响，预计未来几年将遭受经济增长的丧失。金融市场方面，全球股市普遍下跌，反映了投资者对经济前景的担忧和全球经济不稳定性。在这种背景下，投资者和决策者需要密切关注经济动态和政策变化，以应对未来的不确定性。
      </Typography>
    </Box>
  )
}

export default Article
