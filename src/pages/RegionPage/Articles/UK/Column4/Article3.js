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
        专家分析英国各大产业群，供应链及竞争情况
      </Typography>
      <Typography paragraph variant="h5">
        主要产业
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        根据环球印象投资分析英国事业部撰写并发布的《2022-2026年后疫情时代英国经济及发展潜力报告》数据显示，英国是欧盟中能源资源最丰富的国家，主要有煤、石油、天然气、核能和水力等。能源产业在英经济中占有重要地位。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英主要工业有采矿、冶金、化工、机械、电子、电子仪器、汽车、航空、食品、饮料、烟草、轻纺、造纸、印刷、出版、建筑等。生物制药、航空和国防是英工业研发的重点，也是英最具创新力和竞争力的行业。目前，英工业产值约占国内生产总值的23%。同许多发达国家一样，随着服务业的不断发展，英制造业自上世纪80年代开始萎缩，80年代和90年代初两次经济衰退加剧了这一态势。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英农牧渔业主要包括畜牧、粮食、园艺、渔业,可满足国内食品需求总量的近2/3。目前，农业在英国内生产总值中所占比重不到1%，从业人数约45万，不到总就业人数的2%，低于欧盟国家5%的平均水平，低于其它主要工业国家。农用土地占国土面积的70%，其中多数为草场和牧场，仅1/4用于耕种。农业人口人均拥有70公顷土地，是欧盟平均水平的4倍。英是欧盟国家中最大捕鱼国之一，捕鱼量占欧盟的20%，满足国内2/3的需求量。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        服务业包括金融保险、零售、旅游和商业服务等,是英经济的支柱产业，产值约占国内生产总值的四分之三。伦敦是世界著名金融中心，拥有现代化金融服务体系，从事跨国银行借贷、国际债券发行、基金投资等业务，同时也是世界最大外汇交易市场、最大保险市场、最大黄金现货交易市场、最大衍生品交易市场、全球第三大保险市场、重要船贷市场和非贵重金属交易中心，并拥有数量最多的外国银行分支机构或办事处。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国旅游业收入居世界第五位，是英最重要的经济部门之一，从业人员约270万，占就业人口的9.1%。
      </Typography>

      <Typography paragraph variant="h5">
        新兴产业
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        目前英国创新指数排名全球第四。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国先后创建144家独角兽公司、237家未来公司以及超过85000家初创企业和规模扩张企业。 过去5年，英国科技行业吸引投资超过970亿英镑。 2022年吸引投资240亿英镑，超过德国和法国的总和。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英国在人工智能、量子科技、深科技、影响力科技等应用创新和变革技术领域处于国际领先地位。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        科技创新、绿色能源、生物科技和数字经济是英国经济中快速增长的新兴产业。
      </Typography>
      <Typography paragraph variant="h5" >
        供应链情况：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        制造业供应链发展体系
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家分析英国各大产业群，供应链及竞争情况-1.jpg')} alt="Manufacturing Supply Chain Development System" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        物流与供应链基础设施建设
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        物流与供应链基础设施
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家分析英国各大产业群，供应链及竞争情况-2.jpg')} alt="Logistics and Supply Chain Infrastructure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph variant="h5" >
        竞争分析：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        总体而言，调查涉及的指标表明，整个经济的竞争状况在过去20年中有所下降。报告发现在2008-2009年经济衰退期间，报告所考虑的所有竞争指标都恶化了。自衰退以来，多数措施都只是导致了竞争的局部恢复，并没有恢复到衰退前水平。这意味着尽管疫情前的几年大趋势虽然是积极的，但英国在保护和促进竞争方面还需要保持警惕。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        由于2008年的经济危机，市场集中度整体上升，虽然自2010年以来这一指标有所下降，但目前的水平仍比1998年高3个百分点。报告指出公司间交叉持股可能会减少市场上的竞争，且该苗头未必能在衡量行业集中度的数据中得到体现。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        在利润最高的公司中，利润和加价幅度都在上升。在过去20年中，加价幅度最大的公司的利润幅度增长了9％。同时报告也发现过去10年的涨价并不完全是由固定成本上升推动。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        消费者调查表明，与欧盟成员国相比，英国的消费者问题发生率相对较高且投诉处理不善。2018年，约有三分之一的英国客户在所有市场中遇到问题，该数据位居欧盟国家首位（平均为22％）。还有证据显示就满意度和信任度而言，运输、电信、移动、互联网、公用事业和物业服务的表现相对较差。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        在某些服务市场中，针对消费者转换成本的调查得分相对较高，尽管在低收入和经济状况不稳定的消费者群体中转换并不常见。
      </Typography>

    </Box>
  )
}

export default Article
