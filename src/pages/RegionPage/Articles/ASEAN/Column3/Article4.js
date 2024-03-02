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
        研讨聚焦：解读东盟的政治稳定性
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>本文以国别为序，选择典型国家介绍东盟整体的政治稳定性状况。</Typography>
      <Typography paragraph variant="h5">
        一、新加坡
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（一）政治稳定性</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>经济转型带来一定挑战，提升商业和消费者的信心比抑制通货膨胀成为执政党面临的最大考验。政府管制负担整体呈下降趋势，国有化和征收风险较低，汇兑限制较少，外汇监管手续或审批对所有支付形式或资金转移都不设定限制，企业利润汇出时也无特殊税费。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（二）社会稳定性</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、失业率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>长期处于较低水平，服务业是新加坡就业的主要渠道，占就业人口的81.8%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、犯罪率</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>恐怖主义和暴力犯罪事件较少。新加坡的犯罪率非常低，特别是与曼谷等其他大城市相比。这是因为新加坡有着严格的法律和刑罚制度，有效地防止了犯罪行为的发生。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、治安状况</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>高效的执法：新加坡的警力充足且高效，能够迅速响应各种治安问题。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>公共安全：新加坡的公共场所非常安全。城市安装了大量的监控摄像头，帮助防止犯罪并确保市民的安全。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>社区警务：新加坡也实施了社区警务计划，通过与社区居民的合作，进一步提高了安全水平。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、旅行安全</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>一般来说，对于旅行者而言，新加坡是极其安全的目的地。政府和旅游局也提供了详尽的旅行安全指南和信息。旅行者需要注意的是，新加坡的法律可能与他们的祖国大不相同。对某些行为的严格限制（如在公共场所吸烟或乱扔垃圾）是旅行者需要特别注意的。</Typography>
      <Typography paragraph variant="h5">
        二、马来西亚
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>马来西亚的政治风险较低，但也存在潜在的政治风险，包括逐渐激烈的党派之争、美国对马来西亚的影响、与邻国的领土争端、毒品等社会治安问题以及内部的排华情绪等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>其一，国内党派斗争激化。长期以来，马来西亚“国民阵线联盟”一直在大选中稳操胜券。但是，2008年第十二届大选中，“国阵”丧失36.9%的议席和13州中的5个；2013年，马来西亚更是经历了史上竞争最激烈的一次大选，尽管最终“国阵”仍然获胜，但反对派的力量日渐壮大。反对派领袖认为，其胜利被选举舞弊“偷走”，并举行大规模的抗议游行和社会运动。2014年“MH370客机事件”中，日益激烈的党派斗争也得以暴露。这一定程度上为马来西亚的投资环境带来了不确定因素和负面影响。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>其二，美国对马来西亚政局的影响加强。美国提出“亚太再平衡战略”以来，对东南亚的军事援助大幅度增加，2013年美国防部长宣布支持对东南亚军队训练的资金增加50%。2014年，美国首次派6架F-22战斗机与马来西亚的进行军事演习。2014年9月，美国海军作战部长透露，马来西亚邀请P-8“海神”巡逻机从该国最东端地区起飞，“让美国更接近南海”。这一系列情况对中马关系都存在着潜在威胁，尽管马来西亚与中国关系一直友好，但作为战略敏感核心地带实力较弱的国家，其外交政策往往受制于美国等大国。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>其三，与邻国的领土争端。马来西亚与邻国菲律宾、文莱、中国都存在着领土争端，其中以菲律宾情况最为严重。沙巴州目前在马来西亚的管辖下，但菲律宾自1962年起便宣布对其拥有主权。2013年马政府称，马警方与疑似侵入该国沙巴州的菲律宾部落武装分子爆发枪战，致使5名马警察和3名菲武装分子死亡。后来，双方在沙巴州另一地区再次发生武装冲突，造成14人死亡。尽管马政府称有信心稳定该地区局势，但两国间的领土争端上升至军事冲突增加了投资马国的风险。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>其四，毒品带来社会治安问题等。由于马来西亚与金三角距离较近，所以尽管马来西亚对毒品犯罪的量刑较高（唯一一项触犯死刑的犯罪），但马来西亚的毒品交易仍然猖獗。马来西亚政府每年用于反毒运动的财政耗资巨大，对社会经济其他领域的发展也产生了一定的挤压效应。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>其五，社会中存在排华势力。马来西亚是一个多民族国家，马来人、华人和印度人分别占人口的62.5%、22.0%和6.0%。马来人主要信奉逊尼派伊斯兰教，华人信奉佛教，印度人信奉印度教。总体而言，马来西亚各民族相处和睦，不存在大规模冲突和斗争的风险。但马国社会中仍然存在对华人的排斥和歧视，华人难以进入政治决策高层。2013年大选后，代表华人利益的政党——马华公会仍属于在野党。</Typography>
      <Typography paragraph variant="h5">
        三、印度尼西亚
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>印尼存在着政治斗争的风险因素。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>例如，2022年10月，印尼反对党国民民主党（Nasdem）宣布前雅加达首都特区省长阿尼斯·巴斯威丹（Anies Baswedan）为该党2024年大选的总统候选人，阿尼斯是总统佐科维所属党派印尼民主斗争党（PDI-P）极其反对的一位独立政治家。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>长期以来，印尼民主斗争党希望佐科维将国民民主党的多名部长从内阁中除名。经过民主斗争党数月催促后，佐科维最终决定进行本次内阁改组。然而，本次内阁改组并未完全实现印尼民主斗争党期待的结果。内阁仍有两名属于国民民主党的部长，而新任命成员也非来自印尼民主斗争党核心领导层。</Typography>

    </Box>
  )
}

export default Article
