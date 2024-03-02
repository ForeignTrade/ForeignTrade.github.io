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
        最新资料：带你了解日本商业文化
      </Typography>
      <Typography paragraph variant="h5">
        一．商业风格
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1,商业的使命</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>首先，二战后，日本企业家开始尝试改变东亚自古以来的轻商观念，认为商业跟宗教一样能给人们提供幸福美好生活。1946年，松下幸之助建立PHP研究所，取意于“Peace and Happiness through Prosperity”，即决心要通过繁荣来实现和平和幸福。松下幸之助还提出自来水经营，即把大众需要的东西，像自来水一样源源不断地为顾客提供出来。以优良的品质，用消费者能购买的价格，使顾客常受益，乃是企业获益的最大源泉，也是商业真正的使命。从大众品牌像优衣库、吉野家，到松下、索尼、丰田等日本国民品牌，无处不体现着日本人的这种商业使命。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2，企业文化</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>其次，深谙商业使命的绝大多数企业都致力于打造独自的企业文化，如松下精神、电通的鬼十则、朝日新闻社纲领，内容从对企业的忠诚、对工作的热爱、为企业献身，到个人修养、企业管理，并通过各种方式强有力地灌输给职工。每一个员工从进入某一行业开始，都会有成为专业人员或专家的觉悟，然后专心进行几年甚至几十年的修行。日本某公司有一守门人几十年如一日，没有出一点差错。后来领导很欣赏他，要委以重任，他愤怒道:“这是我一生的职业，也是我一生的骄傲，如果你要剥夺我的这份骄傲的话，那我宁愿辞职。”日本企业文化像这样被员工以行动来践行，这也是大多数日本匠人的写照。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3，自下而上的管理方式</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>此外，日企大多采用自下而上的管理方式。在世界上大多数流水作业线上，如果企业不严密监视工人，不准他们偷懒，那么企业效率就会非常低下。而日企则非常不同，虽然以管理严格著称，但日本企业很少控制和监督别人，而多是激发人的主动性，给员工以主权，企业下级部门不需要等待上级部门的命令就主动进行活动，并对自己的工作感到极大的自豪。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4，企业意识</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>相比于中国，日本国土狭小，资源匮乏，这也造就了日本人比任何国家都更爱惜物资，日本人经常会说日本是个很贫穷的国家，所以必须要节省，这种节省意思也培养了日本人在每一件商品都竭尽全力。几年前，日本还大量从中国进口农产品。日本很重视食品安全，他们只是租用中国的土地，至于管理人员、种子、机器等则都从日本运过来。只有把这些成本算上，再加上运输成本，如果依然比日本便宜时就会在中国种。近几年，随着中国各种生产成本急速上升，日本不少企业开始把产地转到生产成本更加便宜的东南亚去。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>5，品牌意识</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>最后，也是最为大家认可的就是日本人的品质意识。提起日本制造，大家第一印象往往是做工精良。事实上，在上世纪五十年代初日本产品质量相当糟糕。当时西方文献记载“他们出口的玩具玩不了多久就会出现质量问题；他们出口的灯具寿命短得让人无法接受。”日本人耻文化的影响下，日本首先全面引入欧美的质量管理体系，来衡量日本的产品质量；其次，建立终身雇佣制，让员工能长期专注地做一件事，最后就是匠人精神的训练。正像《寿司之神》里小野二郎所说的一样，重复一件事情，使之更加精益求精，但永无止境。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>除了企业内部的改革，日本企业对市场的经营也下了很大功夫。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>6，信息收集</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本企业走出国门最重要的一个长处就是对信息或者说知识的收集。在每一个重要机构和共同体，只要事关公益，从国家机关到私人企业，从城市到乡村，那里的负责人都很注意收集信息资料，以备将来有朝一日之需。日本人一旦看到某一个问题非常重要，就努力去搜集一切信息，哪怕它重复白费也好。日本企业，像三菱商事，三井物产，丸红，伊藤忠等搜集国际信息庞大而精密，有时候要比日本政府收集的信息更快更清楚。1973年，日本客机在阿布扎比遭到劫持，日本外务省要靠三菱商事的电传机传递情报。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>7，信誉诚信经营</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>同时，日企特别注重诚信经营。日前，日本神户制钢因篡改报告，将没有达标的产品改为合格产品，在日本引起巨大风波。事实上，神户制钢只有4%的材料没有达到厂家合同里的标准，良品率达96%，这在该行业已经是很好的水平，而且即使这4%的材料也符合日本所设立的行业标准。但篡改资料本身是对信誉的一大伤害。日企之间常常是几十年的合作，彼此之间的信任很高，检测也远不如对进口产品那么严格，日本的大企业像丰田等都会很信任地使用。一旦出现这样的造假事件，其对诚信经营的危害要远远比实际造成的损失大的多。而且一旦日本稍微有些商业丑闻，基本上公司全体高层都要出面，召开发布会像消费者谢罪，严重的时候负责人甚至自杀来承担责任。这样一种文化下，日本造假的成本是很高的。同样，员工也尽力把产品做好，不让领导受辱，大有中国古代“主辱臣死”的精神。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>8，品牌维护</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在诚信经营的延长线上，日本企业极其重视品牌的推广和维护。在世界各大活动上，奥林匹克运动会、世界杯、超级碗等，日本企业的广告一直数量众多且占据重要位置。在2008年北京奥运会时，中国本土企业只有有限几家公司投入广告，后来政府出面才陆续有一些中国企业进入，还是在边缘的位置上。日本的品牌在全世界树立很好的口碑，其形成的潜在价值，中国企业花几倍的价钱都难以达到。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>9，服务态度</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>除了广告之外，日本企业最好的名片就是员工的服务态度。日本人的服务态度之好，凡是去日本旅游过的都赞不绝口。在日本购过物的想必都知道，日本商品都是固定价格，很少可以讨价还价。当你问能否便宜的时候，日本人往往会说，我们有其他的赠品，那就是我们的微笑。这种服务不只停留在交易的那一刻，当你离去时，很多店的店员会帮你拿着物品，把你送到门口。你离去时，他们甚至会对着你的背影鞠躬</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>10，“第一”意识</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本影视动漫里经常会有一句台词:如果不做到第一的话，那就没有意义。这也是日本企业经常宣扬的价值观。事实上消费者和市场也只对第一名印象深刻。所以日本不断创造“第一 ”，占领消费者和潜在用户的心智，获得有利位置。如果第一的位置已经被行业的其他企业占领，形成认知的时候，日本人就会独辟蹊径，自己再创造一个品类，然后占领第一的位置。在今年，日本老牌游戏厂商任天堂在日本家用游戏机市场方面不敌索尼的时候，就推出了独具一格的家用机掌机一体化设计，形成完全不同的商品，从而又抢占回很多市场份额。而在日本，判断一个企业的成绩，不是根据它一年当中取得的利润，而是根据它与其他企业相比，扩大了多少市场占有率。</Typography>
      <Typography paragraph variant="h5">
        二．商务礼仪
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本商务礼仪所包含的内容较为丰富, 而且在各个方面均有较为严格的标准, 在与日本人进行商务交流中, 想表现得体的商务行为, 要注意以下几个方面。</Typography>
      <Typography paragraph variant="h5">
        三．谈判风格
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在国际市场上，日本人获得了“难对付的谈判对手”的美誉。他们谈判风格有下列几个特点：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本人在商务谈判时表面上是彬彬有礼，然而，这种礼是一种“带刀的礼”，在它背后隐藏着他们真正的谈判风格，典型的，无情的“我赢你输”。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本人喜欢“投石问路”，在正式会谈之前，常举行一些带有社交性质的聚会，以试探对方的意图、个性和可攻的程度。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>拖延战术是日本商人惯用的伎俩，经常导演的局面是减交或不成交，往往拖延时间，谈判结束前才敲定。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本式的“巨大牺牲”，日本人作出让步是具有形式主义色彩的，这是虚假的，不要在意。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本人有一种谈判习惯，希望在谈判中自己一方人数超过对方；一方面，日本人强调集体主义，只有在集体中，他们才有安全感。另一方面，日本公司的决策需要各部门、各层次的雇员参加，人越多越容易在最后的决策中达成一致的意见。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本人不喜欢硬性、快速的“推销式”的谈判。他们注重镇静、自信、优雅和耐心；事实上，谈判中的日本人目光显得呆滞，面无表情，长时间坐着那里一言不发。这种沉默和含糊的态度，让对方摸不透他们的想法。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>谈判中非常细致，对各种情况进行详细调查了解，即使在达成协议之后，他们也会索取大量情况介绍、研究调查报告和图标等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本谈判具有：1.把生意关系正常化2.尽量规避诉诸法律3.彬彬有礼的态度4.内向型5.非对扰风格6.潜在的支配能力等特点</Typography>
      <Typography paragraph variant="h5">
        四．领导风格
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片3.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片4.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片5.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片6.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片7.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片8.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片9.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片10.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片11.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片12.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/最新资料：带你了解日本商业文化图片13.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph variant="h5">
        五．决策风格
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>集体决策。在日本，企业内部做出决策多数是采取会议或者禀议的方式进行。由会议做出的决策，因为是通过多人来观察判断问题，从而避免了仅靠个人决定带来的危险，可以使作为决策前提的价值基准和信息能够在成员之间得到传递。学者RonaldSims认为，集体决策有助于防止企业违反伦理行为。当然，这种集体决策方式也存在耗时、不能明确个人责任等问题。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>谨慎性。没有8成以上的胜算，一般不做决策。项目需要反复讨论、充分论证，偏向一步一个脚印的推进。 稳重的同时决策周期长，这方面与国内”敏捷、试错” 的互联网思路会有Gap，中日项目合作的时候得注意。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>看重隐私保护 - 交换电话号码是非常私人的事情同事只会有公司号码，不会透露私人号码，只有特别好的朋友才会交换电话。 同事之间一般会用Slack、Lync 等工具沟通，私人好友沟通用line比较多。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>守规矩 - 日本员工上班时间很少外出 ,  上班时间很少看闲的网站比如地铁中一般很少人讲话，大部分人玩手机、打瞌睡、看书。 上下扶梯一致站在左边，无论人流量多大，都会留出右边过道给紧急的人事。 坐电梯、买单都会自觉排队。 执行传递比较强烈 - 下层的执行力很强比较遵从上层的决策和要求，对于有问题的决策、产品，比较少提意见。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>员工工作跳槽离职率非常低，一般会在一个企业呆一辈子。传统企业员工晋升按年资序列，先提升前辈。</Typography>

    </Box>
  )
}

export default Article
