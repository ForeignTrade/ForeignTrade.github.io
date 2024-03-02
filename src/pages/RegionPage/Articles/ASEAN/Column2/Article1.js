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
        今日分享：东盟的贸易数据详情
      </Typography>
      <Typography paragraph variant="h5">
        一、贸易数据
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、贸易额度</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>近年来，我国与东盟的经贸合作蓬勃发展，展现出强劲韧性和巨大潜力。截至2022年，中国连续13年成为东盟第一大贸易伙伴，东盟也连续三年成为中国第一大贸易伙伴。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>这一趋势在今年继续延续。海关数据显示，今年前5个月，东盟依旧稳居我国第一大贸易伙伴，双边贸易总值同比增长9.9%，占中国外贸总值的15.4%。其中，对东盟出口增长16.4%。在目前复杂多变的国际环境下，与东盟的贸易关系正成为我国外贸坚实的后盾。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2023年1—4月，我国与东南亚国家联盟进出口额为20916.12亿元人民币，同比增长13.9%，出口12715.83亿元人民币，同比增长24.1%，进口8200.28亿元人民币，同比增长1.1%。其中，我与越南贸易额4795.25亿元人民币，同比增长8.2%，对越出口3123.77亿元人民币，增长13.2%，自越进口1671.48亿元人民币。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、主要贸易伙伴</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>近年来，东盟的前五大贸易伙伴中，中国、韩国、日本稳居其中。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>中国自2009年以来一直保持东盟最大贸易伙伴地位,东盟自2020年以来连续三年是中国最大贸易伙伴。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、进出口商品</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家的主要出口产品包括电子产品（如半导体、电子组件）、棕榈油、石油和天然气、农产品（如稻米、橡胶）、纺织品和服装。这些产品反映了东盟国家在全球供应链中的重要地位，尤其是在制造业和农业领域。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟国家主要进口的产品包括机械和设备、化石燃料（如石油和天然气）、化学品、汽车和零部件以及电子产品。这些进口反映了东盟国家的工业化需求和消费者市场的增长。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>具体来看。越南进口产品主要包括三大类：机械设备为主的资本性货物（占进口量的30%）、中间产品（占比60％）和消费品（占比10％）。中国是越南的资本性产品和中间产品的最大供应国。越南主要从中国进口机器、设备附件、计算机电子零件、纺织、皮鞋原料、电话和电子零件，以及运输车等。泰国主要自中国进口五金、机电产品。贱金属及制品、化工产品、塑料橡胶分居进口第二、第三和第四大类商品。马来西亚，电子电器产品是最重要的进口产品，其次是机器设备及配件，再次是化学化工产品。在农产品进口领域，谷类产品（包括未碾磨的小麦，大麦，玉米）是最重要的进口产品，在矿物及矿物燃料进口领域，原油，精炼石化产品进口较多。</Typography>
      <Typography paragraph variant="h5">
        二、关税与贸易壁垒
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、进口关税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>进口关税是对进口商品征收的税，主要目的是保护本国产业免受外国竞争压力。东盟通过ASEAN自由贸易区（AFTA）协议降低了成员国之间的进口关税。AFTA的主要工具是东盟贸易货物协议（ATIGA），它旨在通过消除关税和非关税壁垒来促进区域内的贸易自由化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、出口限制</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>出口限制较少，但在某些特定情况下，如资源保护或国家安全考虑，东盟国家可能会实施出口限制。这些措施可能包括出口关税、配额或完全禁止特定商品的出口。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、非关税壁垒</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>非关税壁垒（NTBs）是除了普通关税以外对进出口商品施加的各种限制，例如配额、进口许可证要求、卫生和植物卫生措施以及技术贸易壁垒。尽管东盟致力于通过ATIGA等协议减少这些壁垒，但非关税壁垒仍然是东盟国家面临的主要贸易挑战之一。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、关税优惠</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>RCEP项下中国对东盟减让总体概况：立即降至零关税的商品项数为67.9%、最终零关税商品项数为90.5%、例外产品项数占比不超过5%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>RCEP关税减让安排超出《中国-东盟自由贸易协定》的主要商品有部分化工品、化纤、纸制品等，还有部分新鲜水果的关税，实施首年就降为0，和东盟协定税率保持同一水平。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>RCEP实施后，其关税减让与其他优惠贸易协定（或安排）关税减让并行实施。企业可事先了解自贸协定原产地规则、关税减让安排，以便及时、充分地享受自贸协定生效后带来的关税减让利好。此外，可以根据自己生产经营的实际需求，择优办理相应的优惠原产地证书，及时获得政策红利。</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：东盟的贸易数据详情-1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：东盟的贸易数据详情-2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>

      <Typography paragraph variant="h5">
        三、贸易协定
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、贸易协定</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2023年6月2日，《区域全面经济伙伴关系协定》（RCEP）对菲律宾正式生效，标志着RCEP对包括东盟10国在内的15个签署国全面生效，这将为区域经济一体化注入新的强劲动力。东盟国家在RCEP签署前已与我国签订《中国-东盟自由贸易协定》，这是我国与其他国家商谈的第一个自贸协定。另外，老挝与我国同属《亚太贸易协定》成员国，新加坡与我国签订《中国-新加坡自由贸易协定》，而《中国-柬埔寨自由贸易协定》也于2022年1月1日正式实施生效。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、区域一体化和挑战</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟还通过其他一系列自贸协定（FTA、AFT等）与全球其他地区和国家建立联系，如与日本、韩国、印度和澳大利亚的协定，旨在进一步促进贸易和投资。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>东盟面临的挑战之一是确保所有成员国都能从区域一体化中受益，特别是那些经济发展水平较低的国家。此外，减少非关税壁垒需要的不仅是政策改变，还需要增强成员国之间的协调和合作，以及提高透明度和规则的一致性。</Typography>

    </Box>
  )
}

export default Article
