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
        专家视角：东盟的市场概况解读
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟是一个发展迅速的贸易集团，由10个成员国组成，即文莱、柬埔寨、印尼、老挝、马来西亚、缅甸、菲律宾、新加坡、泰国和越南。</Typography>
      <Typography paragraph variant="h5">
        一、国家主要经济指标
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、GDP</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2013至2022年，东盟的区内生产总值(GDP)年均增长率为4.2%。东盟总人口约6.72亿，2022年的GDP约为3.6万亿美元。若视为单一实体，东盟是亚洲第三大经济体，全球排名第五，紧随美国、中国、日本和德国之后。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>经济体量上，印尼遥遥领先，其GDP占东盟整体达到36.5%，泰国、菲律宾、新加坡、马来西亚、越南处于第二梯队，GDP占比在10%左右，缅甸在第三梯队中处领先位置，GDP占比近3%，柬埔寨、老挝与文莱经济体量较小。人均GDP方面，新加坡、文莱优势明显，马来西亚、泰国分列三四位，其他六国则显著较低；GDP增速则几乎与人均GDP相反，新加坡、文莱两个发达国家经济增速显著低于其他八国。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、经济增长率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>据位于雅加达的东盟秘书处最新数据，2022年东盟经济增长率高达5.1%，比全球平均水平高出近两个百分点，2023年仍高达5%左右。东盟一些重要经济体的增长优势更加明显，如马来西亚、越南和菲律宾，2022年增长率分别高达8.7%、8.0%和7.6%。作为东盟最大经济体，印度尼西亚也达到5.3%，在全球各大经济体中增长优势非常明显。新加坡3.6%的增长率在东盟成员中虽不算高，但与世界其他发达经济体相比，同样显现明显增长优势。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡：根据新加坡贸易与工业部1月2日发布的数据，新加坡2023年全年经济增长1.2%，低于2022年的3.6%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国：世界银行2023年12月预测，泰国2023年经济增长约为2.3%，低于该银行2023年10月预测的3.4%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马来西亚：马来西亚阿哈姆资产管理公司预测，马来西亚2023年国内生产总值将增长3.9%，远低于2022年的8.7%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>越南：根据越南国家统计局数据，2023年国内生产总值增长5.05%，低于6.5%的目标，也低于过去10年5.87%的平均增长率。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印尼：印度尼西亚2023年的经济增长预计维持在5%左右，也低于2022年的5.3%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>文莱：根据东盟与中日韩宏观经济研究办公室（AMRO）2023年12月发布的报告，文莱2023年经济预计增长0.2%，低于该机构2023年10月1.1%的增长预期。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>老挝：世界银行表示，得益于旅游业、运输和物流服务业的强劲表现以及外国投资的增加，老挝2023年经济预计增长3.7%，高于2022年的2.7%，但低于此前预期。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>柬埔寨：柬埔寨经济保持强劲增长，柬埔寨经济和财政部长翁本莫尼洛表示，预计2023年经济将增长5.6%，为过去3年来最高。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>缅甸：根据世界银行预测，在截至2024年3月的财年中，缅甸经济预计将增长1%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、人口</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>人口方面，印尼优势仍显著，菲律宾、越南、泰国人口规模也较大，新加坡、文莱、老挝人口则显著较少。性别结构上，马来西亚、文莱男性明显偏多，而柬埔寨、泰国、缅甸女性则占多数。新加坡、泰国老龄化较严重，自然增长率偏低；老挝、柬埔寨、菲律宾年轻人口占比较大，自然增长率较高。另外，新加坡、文莱、马来西亚城市化水平较高，柬埔寨、越南、缅甸城市化水平较低；老挝、柬埔寨的成人识字率显著偏低。各国劳动力规模顺次基本与人口规模一致，但印尼、菲律宾、马来西亚、新加坡、文莱的劳动力参与率偏低。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、土地及资源</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印尼国土面积居首，缅甸、泰国也位居前三，文莱、新加坡面积最小。泰国、马来西亚、新加坡所在的马来半岛与印尼的苏门答腊岛之间的“黄金航道”——马六甲海峡连接了印度洋与中国南海；印尼、马来西亚和文莱拥有丰富的油气资源，马来西亚的锡矿、菲律宾的铜、金、镍矿、越南的铁矿与钛铁矿、泰国与缅甸的锑矿、印尼的银、锡、铜、金、镍矿储量也很丰富。另外，湿润的热带季风气候给东盟带来了丰富的橡胶（主产地：泰国）、油棕（主产地：马来西亚）、椰子（主产地：菲律宾）和蕉麻（主产地：菲律宾）等经济作物和水稻（主产地：泰国、缅甸、越南等）；另外，得益于分布在马来半岛的热带雨林，马来西亚还拥有相当丰富的生物资源。尽管东盟各国矿产资源品类并不十分齐全，但互相之间能够形成较好的补充。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家视角：东盟的市场概况解读-1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph variant="h5">
        二、经济结构
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>以下列举东盟十国典型国家的经济结构。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、新加坡</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/专家视角：东盟的市场概况解读-2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>图为截至2023年新加坡各行业所占比例。新加坡整体产业结构不同于东盟其他国家，主要以资本技术密集型产业为主，服务业占据其产业结构首位。据邓白氏企业数据统计，新加坡前二十大细分行业中就有9类服务业。除此之外，制造业、零售批发业、金融和保险业以及信息通信行业都是新加坡的支柱产业。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡产业结构中服务业占比超过1/3，其中信息通信、住宿餐饮以及娱乐（美容、旅游等）板块发展较快。同时，新加坡的制造业也保持强劲发展趋势，以高附加值产业为主，涵盖半导体、航天航空、生物医学等多样领域。众多大型跨国企业在新加坡也设立了研发中心或地区总部，如美光Micron，壳牌Shell，罗氏Roche和诺华Novartis等知名全球性企业。此外，新加坡聚集了超过100家化学品公司，包含大量石油和化工公司。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、马来西亚</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据Worldbank统计数据，截至2023年，马来西亚三大产业占GDP的比例为：农业: 6.30%，工业: 24.0%，服务业: 58.6%。马来西亚既是世界上两大油棕生产国之一，也是世界上最大的磁盘驱动器生产国，主要产业覆盖电子，半导体，微芯片，集成电路，橡胶，油脂化学品，汽车， 光学设备，制药，医疗设备，冶炼，木材，木浆，伊斯兰金融，石油，液化天然气，石化产品，电信产品。</Typography>
      <Typography paragraph variant="h5">
        三、主要经济城市与区域
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡在东南亚地区的发展首屈一指，虽然是一个国家，但是新加坡的体量也就是一个城市的规模。作为全球重要的贸易和航运中心，新加坡的经济增速一直处于良好态势。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>吉隆坡作为马来西亚的首都，是马来西亚各项产业的中心，旅游，地产，金融，零销，创意，娱乐等服务业支撑了吉隆坡的快速增长。吉隆坡同样也是东南亚金融中心之一。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马尼拉作为菲律宾的首都，是菲律宾的经济、文化、教育和工业中心，同时也是最大的交通枢纽和贸易港口。马尼拉集中了菲律宾近半数以上的工业产值，主导产业有纺织、榨油、制糖、烟草、麻绳、冶金等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>泰国是东南亚地区经济总量仅次于印尼的国家，曼谷作为其首都，发展也一直处于东南亚前列。曼谷是中南半岛最大城市，东南亚第二大城市。曼谷的经济总量占泰国一半。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>雅加达是东南亚最大国家的首都。金融业是雅加达主要支柱产业，全国重要的金融机构总部几乎全部在雅加达。印尼有推动迁都，不过雅加达所在的爪哇岛是印尼人口和经济最集中的地区，其经济地位不会有大改变。</Typography>

    </Box>
  )
}

export default Article
