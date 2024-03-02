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
        专家解读：东盟的法律框架研讨
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>本文以新加坡为例具体介绍东盟国家中典型法律框架。</Typography>
      <Typography paragraph variant="h5">
        一、法律框架
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、概述</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡共和国现行法律体系以英国普通法为基础，其主要法律渊源包括成文法、判例法和习惯法。新加坡作为普通法国家，其主要的法律领域，尤其是合同法、信托法、物权法与侵权法等法律领域的某些方面法律规定已在一定程度上进行了法规化，但仍极大地保持着法官创制法的传统。法官通过自书判决解释新加坡成文立法，发展普通法、衡平法的法律原则规则，并成为具有法律强制力的判例法。另一方面，在如刑法、公司法及家庭法等法律领域，已经基本完全成文法化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、商业法律</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡的商业法律体系为企业提供了一个清晰、稳定的法律环境，有助于促进商业活动。这包括公司法、合伙企业法、商业信托法等，涉及公司设立、运营、管理、解散等各个阶段的法律规定。新加坡也有专门的商业法庭处理商业争议。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、合同法</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡的合同法根植于英国普通法(Common Law)。伴随着新加坡的独立，尽管某些与合同法特定领域有关的英国法规被纳入了包括《虚假陈述法》、《不公平合同条款法》和《货物销售法》在内的新加坡法律，但其议会选择了不编纂合同法。因此，新加坡合同法的发展是由法院主导的。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>从历史上看，英格兰、威尔士、澳大利亚和其他英联邦司法管辖区的法院裁决均具有说服力。在过去的二十年中，尤其是在合同法领域，新加坡法院也逐步发展出了自己独特的法律体系，并受到了全球的广泛认可。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡合同法的发展反映了这个国家对建立亲商环境的高度重视，特别是强调了跨国的合同自由、合同执行的清晰及确定性等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、知识产权</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在新加坡国内受到保护的知识产权有专利、商标、注册外观设计、版权、集成电路设计、地理标识、商业秘密和机密信息以及植物品种等。新加坡分别制定了单项法规对这些知识产权进行保护。</Typography>
      <Typography paragraph variant="h5">
        二、合规要求
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡有严格完备的行业审查机制。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>所有的新加坡公司都需要在新加坡税务局（IRAS）进行申报，对来自新加坡的任何应税收入或汇入新加坡的外国收入缴纳公司税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、ECI备案</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>在ECI中申报的营收额与应收所得，是公司除资本所得和固定资产之外的主要收入。即使当一家公司的ECI为零，它仍应该进行申报工作。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2、所得税申报备案</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡的所得税制度是结构性的。所得税的法定税务年度被称作是税务的评估年度。税务会采取这个时间段来评估应缴税款。新加坡税务采取前一年作为税务计算的基础，也就是说，前一年度之内产生的利润会成为这一年内纳税的评估标准。法定的所得税申报备案截止日为当年的11月30日。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、所得税申报</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>公司必须备案一整套的所得税文件，其中包括FormC，经审计或未经审计的会计表格，以及税务估算。FormC是公司披露各项会计明细中净盈亏，以及展示应缴税利润的表格。满足一定条件的休眠公司可以豁免所得税的申报工作。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、没有进行年度申报备案的结果</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>如果公司没有提交ECI备案文件，则会收到一份税务评估通知（Noticeof Assessment），以明确具体的税务金额。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>5、满足条件的公司需要注册消费税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>商品和服务税（GST）是对新加坡大多数提供的商品和服务征收的消费税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>如果公司的年应税营业额超过100万新元，则必须向新加坡税务局（IRAS）注册消费税。这可以通过IRAS维护的myTax网站在线完成，每个申请通常需要2个工作日来处理。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>一旦在IRAS注册，公司必须按现行税率对适用的商品和服务收取消费税。</Typography>
      <Typography paragraph variant="h5">
        三、纠纷解决
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（一）、非诉方式</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1、谈判</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>IPOS定期为新加坡公民、永久居民和新加坡注册企业提供免费的知识产权咨询服务，通过该服务可以获得律师对知识产权侵权事件的初步建议。权利人可以通过免费的咨询，预估他人是否侵权。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>权利人发现他人侵权之后，可以通过谈判的方式与侵权方解决纠纷。谈判的参与者只有侵权方和被侵权方，谈判方式灵活、并且谈判过程是保密的。谈判几乎没有费用，也不涉及第三方。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2 、仲裁</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1994年《国际仲裁法》和2001年《仲裁法》确定了新加坡的知识产权纠纷是可仲裁、可执行的。新加坡是1958年《纽约公约》（关于外国仲裁裁决的认可和执行）的缔约国，仲裁裁决可在170多个国家执行。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>世界知识产权组织仲裁与调解中心新加坡分中心能够协助当事双方解决其国内或国际知识产权争议。新加坡国际仲裁中心（SIAC）也设有专门的知识产权仲裁员小组，用来审理知识产权纠纷。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>仲裁只有在双方都同意的情况下才能进行。当事人约定仲裁，既可以在起草的协议中包含仲裁条款，也可以争端发生后签署仲裁协议。仲裁裁决为终局裁决，对仲裁双方都有约束力。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>与诉讼相比，仲裁的特点主要包括：1 当事人可以自由选择仲裁员；2）当事人可以选择仲裁规则或仲裁程序，并可以自由选择任何国籍的代理律师；3）仲裁听证会是保密的，并且是私下进行，仲裁裁决不公布；4）灵活性和便利性：为方便仲裁双方当事人、证人和仲裁庭，当事人可以自由选择仲裁听证会的时间和地点，也可以选择仲裁语言；（5）效率高、成本效益好、可执行性：仲裁通常比在法庭诉讼快，并且成本更低；6）终局性：仲裁一般没有上诉。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3、调解</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>《新加坡调解公约》于2020年9月12日生效。新加坡是该公约的缔约国，并颁布了《2020年新加坡调解公约法》，以履行其公约义务。一旦满足该法规定的条件和要求，新加坡法院可以执行由调解产生的国际商事和解协议，或允许援引此类协议。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>知识产权纠纷调解方式包括：法院调解和通过其他调解中心调解。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡司法界大力推动调解工作，几乎所有的案件都有机会接受调解。国家法院争端解决中心为在新加坡法院提起的案件提供法院调解服务。调解可以节省纠纷当事人的时间和费用成本，并且调解过程完全保密。当事人经过调解，会达成一份和解协议。当事人可以申请法庭将和解协议制作成法庭庭令，强化和解协议的强制执行力。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>4、中立评估</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡自2022年4月1日引入中立评估。中立评估是由具有专业知识的中立第三方对案件进行早期评估。中立评估一般是由法院提供的，中立评估的成本低于诉讼但是高于调解，评估周期短于诉讼，但比调解所需要的时间长。中立评估可以帮助当事人澄清或缩小争议的范围，并估计诉讼成功的可能性。当事人可以根据中立评估的结果决定后续是谈判和解还是继续进行诉讼。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>评估员可以是法官或资深律师。除非双方同意中立评估具有法律约束力，否则中立评估不具有法律约束力。争议的任何一方均可在诉讼的任何阶段要求中立评估。当事双方可以共同要求中立评估，法官也可建议将案件转为中立评估。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>5、专家裁决</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>专家裁决需要双方同意，需要专家裁决的专利纠纷往往涉及复杂的技术问题。专家裁决通常仅适用于涉及专家意见的最高法院案件。独立专家将提供意见，供各方根据该意见决定是否同意和解。除非双方另有约定，否则专家裁决具有约束力。当事人可以自由选择专家，如果双方意见不一，仲裁中心将在与当事人协商后指定一名该领域的专家。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>一旦作出专家裁决，当事各方有1个月的时间向IPOS提交与IPOS程序相关的且与专家裁决有关的议定声明。议定声明包括裁决所依据的事实和结论，比如包括（申请人）撤回专利撤销申请、（专利权人）放弃专利或修改说明书。当然，任何一方当事人都可以援引专家裁决的内容作为证据，IPOS将把专家裁决视为该方提交的证据。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（二）、诉讼方式</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡的诉讼程序和我国类似，分普通程序和简易程序。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>新加坡国际商事法庭（SICC）是高等法院总部的一个分庭，也是新加坡最高法院的组成部分。SICC成立于2015年，作为一个值得信赖的中立机构，同时得力于新加坡在亚洲的战略位置，是一家世界级的司法机构，具有高效、专业和诚信之声誉。SICC旨在以诉讼程序满足日益增长的对跨国争议有效解决的需求。SICC法官团队是由国际和地方知名的法官组成的多元化小组，都是经验丰富的专业商事法官。SICC的设立提高了新加坡作为亚洲重要的法律和商业中心以及国际商事争议解决中心的国际地位。</Typography>

    </Box>
  )
}

export default Article
