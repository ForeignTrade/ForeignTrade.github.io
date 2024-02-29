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
        今日分享：英国最新几年贸易数据
      </Typography>
      <Typography paragraph variant="h5">
        一、进出口总额（单位：亿美元）
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：英国最新几年贸易数据-1.jpg')} alt="Import and Export Total" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        2022年，英国对外贸易总额1.72万亿英镑
      </Typography>
      <Typography paragraph variant="h5">
        二、主要贸易伙伴
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （按从大到小排序）美国2792亿英镑、16.3%；德国1382亿英镑、8.0%；荷兰1194亿英镑、7.0%；中国1110亿英镑、6.5%；法国945亿英镑、5.5%。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        其中，英对主要出口目的国（地区）出口金额及占比分别为美国1683亿英镑、20.6%；德国559亿英镑、6.9%；荷兰552亿英镑、6.8%；爱尔兰547亿英镑、6.7%；法国433亿英镑、5.3%；中国376亿英镑、4.6%。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        英自主要进口来源国（地区）进口金额及占比分别为美国1108亿英镑、20.6%；德国823亿英镑、9.1%；中国734亿英镑、8.1%；荷兰642亿英镑、7.1%；法国512亿英镑、5.7%；挪威465亿英镑、5.2%。
      </Typography>
      <Typography paragraph variant="h5">
        三、主要出口和进口产品
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        出口：英国的贸易是通过货物和服务的进口和出口来衡量的。货物出口约占总出口的51％，主要出口品包括机械动力发电机（中间产品）、原油、医药和药品、汽车和有色金属。服务出口占总出口的余下49％，其中金融服务、旅行服务、电信、计算机与信息以及运输服务占运输量的最大份额。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        进口：商品进口占总进口的70％以上，主要进口商品包括天然气，汽车，原油，医药产品，精制油，服装，机械发电机（中间产品）和零散的电气商品（中间产品）。主要商品进口伙伴是中国，德国，美国，荷兰和挪威。服务占总进口的约30％，其中旅游，运输，金融和知识产权服务占进口的最大份额。
      </Typography>
      <Typography paragraph variant="h5">
        四、关税与贸易壁垒
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        脱欧后，英国与欧盟之间的贸易关系经历了重大变化，但英国政府正在通过与其他国家和地区签订自由贸易协定来减轻影响。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （1）进口关税：无论个人或商业实体在英国从事商品进口(从欧盟以外的国家进口)，均须缴纳进口税费。所有进口税费全部以货运价值，即到岸价格(CIF)计算英国关税税率基本在0%(如书籍)和17%(如威灵顿长筒靴)之间。某些商品，如笔记本电脑、手机、数码相机和游戏机主机都免征关税。特定商品可能须征收附加税，根据原制造国来计征，如中国制造的自行车须征收额外48.5%的反倾销税。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        （2）出口限制：英国在欧盟内部实行统一大市场，政府对企业从欧盟以外的国家进口或向欧盟以外国家的出口总体无限制。2020年1月31日，英国正式脱离欧盟。在过渡期内（2020年1月31日至2020年12月31日），与欧盟相关的政策法规仍然有效。
      </Typography>
      <Typography paragraph variant="h5">
        五、贸易协定：
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        退出欧盟后的英国可以自由地与其他国家签订贸易协议。到目前为止，英国已与欧盟及包括加拿大、新西兰、日本在内的70个欧盟以外国家签订了贸易协议，然而与其中大多数国家均沿用了英国作为欧盟成员国时的条款。英国也已与欧盟达成新的贸易协议。自2021年1月1日起，英国和欧盟之间不再对商品征收关税或限制配额，避免因成本提升导致的物价上涨。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        中国与英国签署双边投资保护协定：1985年5月15日，中英两国政府在伦敦签署《中华人民共和国政府和大不列颠及北爱尔兰联合王国政府关于促进和相互保护投资协定》。
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>
        中国与英国签署避免双重征税协定：1984年，两国签署《中英避免双重征税和防止偷漏税协议》。1996年，两国签署《中英关于修订对所得及财产收益相互避免征税和防止漏税的协定的议定书》。2011年6月27日，中英两国政府签署了新的《关于对所得和财产收益相互避免双重征税和防止偷漏税的协定》。
      </Typography>

    </Box>
  )
}

export default Article
