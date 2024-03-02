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
        今日聚焦：日本时事热点
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本GDP被德国反超，经济界压力很大</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本内阁府2月15日公布的数据显示，2023年日本名义国内生产总值（GDP）约为591.482万亿日元，换算成美元后被德国反超，由全球第三降至全球第四。虽然德国超越日本的预测早在2023年就已经出现，但此次是由日本政府正式发布与承认，仍令日本社会产生了不小的震荡。日本经济深层次的病因也因此更加凸显。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>领跑全球主要市场</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>自2024年初以来，日经225指数的涨幅接近15%，是全球主要股市的榜首。在不到两个月内，与第二名纳斯达克100指数的差距已经拉开到两位数。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东电公布福岛核污水</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2024年2月16日 据日本《每日新闻》报道，针对福岛第一核电站2月7日发生的核污水泄漏事故，东京电力公司2月15日公布了调查结果，称泄漏系工作人员未关闭手动阀门所致。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本1月企业物价指数同比上升0.2%</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本央行13日公布的初步统计结果显示，1月日本企业物价指数为120.1，同比上升0.2%，升幅连续三个月保持在1%以下。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>分类别看，能源资源类产品价格继续显著下降。电力、城市燃气和自来水价格同比下降27.7%，矿产价格降幅为13.7%，木材和木制品价格降幅为11.7%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>此外，窑业及土石制品、纸浆和纸制品、石油和煤炭制品价格涨幅靠前，分别上涨10.9%、7.1%和6.6%；其他工业制品、生产用机器、纤维制品、食品、电气机器等价格也有所上涨。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>报告还显示，1月以日元计算的进口物价同比下跌0.2%，连续10个月下跌；同期，出口价格同比上涨8.9%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>企业物价指数反映的是企业间交易的商品价格水平，是日本衡量本国通货膨胀水平的重要指标之一。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2023年日本实际家庭消费支出下降</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本总务省6日公布的调查结果显示，由于通胀持续、工资涨幅不及物价涨幅，2023年日本家庭月均实际消费支出比2022年下降2.6%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>调查显示，2023年日本两人以上家庭月均消费支出约为29.4万日元（1美元约合148日元），扣除物价因素后比上年下降2.6%。从实际支出来看，该调查所涉及10个消费大类中7个类别开支同比下降，其中食品、居住及教育开支下降显著。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>另据厚生劳动省当天公布的初步统计结果，2023年日本劳动者实际工资收入比上年下降2.5%，连续两年下降。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>统计显示，2023年日本劳动者人均名义现金工资为32.99万日元，比上年增加1.2%。尽管名义工资增加，但去年日本消费物价涨幅为3.8%，导致实际工资收入下降。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本媒体和专家指出，虽然日本名义工资有所增加，但增幅明显低于物价涨幅。实际工资水平持续下降抑制家庭购买力，导致消费停滞，拖累日本经济复苏，也使得日本央行在制定货币政策时面临艰难选择。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>内需持续不振</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>内阁府当天发表的修正数据显示，去年第三季度日本实际GDP环比下降0.8%，年率降幅达3.3%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>数据显示，去年第四季度占日本经济比重二分之一以上的个人消费环比下降0.2%，企业设备投资减少0.1%，均连续三个季度出现负增长；住宅投资下降1.0%，连续两个季度下降；货物及服务出口增长2.6%，连续三个季度保持正增长。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>从内外需对日本经济增长的贡献度来看，消费不振等因素导致去年四季度内需对经济增长的贡献度为负0.3个百分点，外需贡献度为0.2个百分点。《日本经济新闻》网站报道指出，内需不振使日本经济去年第四季度未能走出负增长。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本突发7.4级大地震</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2024年1月1日下午，日本能登半岛发生强震，并发布海啸警报，日本首都东京震感强烈。据日本《每日新闻》报道，日本首相岸田文雄下令，要求日本政府全力应对灾情。</Typography>

    </Box>
  )
}

export default Article
