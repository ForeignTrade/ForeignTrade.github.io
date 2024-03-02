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
        今日分享：分享日本最新贸易数据
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>贸易数据</Typography>
      <Typography paragraph variant="h5">
        一．进出口总额
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（数据自1995年4月-2023年12月）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（一）1.进口总额</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：分享日本最新贸易数据图片1.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>2.	出口总额</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：分享日本最新贸易数据图片2.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>近年来日本出口额、进口额基本维持在5000-9000亿美元之间，出口额略大于进口额。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（二）主要贸易伙伴</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本主要出口进口贸易伙伴均为中国</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1.出口主要贸易伙伴及比例</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：分享日本最新贸易数据 主要贸易伙伴图片3.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>2.主要进口贸易伙伴</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：分享日本最新贸易数据主要贸易伙伴图片3.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>（三）日本进出口主要产品：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1.出口产品（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：分享日本最新贸易数据主要出口产品图片4.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>2022年日本对外总出口额达到90.69万亿日元，其中第十六类产品（即办公用品）出口总额达到33.55万亿日元，占总占比36.99%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2.进口产品（见图）</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={require('../Picture/今日分享：分享日本最新贸易数据主要进口伙伴图片5.png')} alt="British Political Structure" style={{ width: '90%', height: 'auto' }} />
      </Box>
      <Typography paragraph sx={{ textIndent: '2em' }}>2022年日本进口额37.79万亿日元，其中第五类产品（即矿产品）进口总额达到37.79万亿元。其进口矿产品可细分至矿物燃料、矿物油及其蒸馏产物等。同时第十六类产品仍是日本重要进口产品品类，进口额为25.24万亿日元</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（四）进出口调整：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>为应对20世纪70年代两次石油危机，实施能源多元化战略。改善严重依赖进口原料，出口美国市场的单一的贸易结构，逐渐增加中国纺织品和部分工业制成品的进口。同时向东盟、中国等国家出口高附加值产品。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>对外进口降低能源、矿产资源等自然资源比重，增加中间品、工业制成品进口。出口以机电产品、汽车、半导体等工业制成品为主。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>但目前总体来说日本对外贸易产业仍需产业内其他产品原材料支撑，日本优势产业链对外依赖度高。</Typography>
      <Typography paragraph variant="h5">
        二、关税与贸易壁垒    进口关税 出口限制 非关税壁垒
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（一）进口关税</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）农产品和食品：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>水果和蔬菜：通常有较高的关税，根据具体产品而变化，例如，进口苹果的关税约为17%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>肉类：也可能有较高的关税，进口牛肉和猪肉的关税约为38.5%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>乳制品：关税水平较高，进口奶酪的关税约为29.8%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）制造业产品：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>电子产品：通常关税较低，进口手机的关税可能在0%至3%之间。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>汽车及零部件：关税水平可能有所不同，但通常相对较低，例如，汽车的关税可能在0%至5%之间，但某些零部件可能享有更低的关税或免税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（3）技术产品：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>电子器件和半导体：通常关税较低，进口计算机芯片的关税可能在0%至3%之间。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>软件和信息技术产品：通常关税较低或免税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>(二)出口限制</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（1）日本出口管制的法律体系</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本出口管制法律体系由法律、内阁令、各主管部门颁布的省令、其他行政规则（包括行政部门在执法过程中发布的通知、通告、指南）组成。其核心内容体现在《外汇与外贸法》、《出口贸易管理令》、《外汇令》以及《根据出口贸易管理令附表一和外汇令附表的规定指定商品或技术的省令》(以下简称“《省令》”)。其中，《外汇与外贸法》是日本出口管制的基本法，进行原则性和框架性的规定；《出口贸易管理令》列明了“受控货物(controlled goods)”，《外汇令》则列明了“受控技术及软件 (controlled technology，including software)”。日本经济产业省颁布的《省令》进一步细化了受控货物和技术的功能及规格。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本经济产业省（METI）作为日本出口管制相关事务的主管部门，负责对清单所列受限物项及其他受限军品和两用物项及相关技术进行审查、授权及颁发出口许可证。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（2）受管辖的主体和行为</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据《外汇与外贸法》的规定，日本出口管制规则的受管辖主体为日本“居民”。“居民”包括在日本有住所的自然人、在日本设有主要办事处的法人、以及非居民在日本设立的分支机构或其他办事处。关于“住所”的定义，日本出口管制的定义十分宽泛，在日本“有住所的人”不仅包括在日本居住的人以及在日本的驻外使馆工作的人，还包括在日本办公室工作的外国人，以及入境日本并逗留6个月以上的外国人。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本出口管制规则的受管辖行为包括“货物的出口”和“技术/软件的提供”。其中，“货物的出口”指货物从日本国内运输至国外。“技术/软件的提供”不仅包括从日本国内向国外传输技术/软件（即出口），还包括居民向非居民提供技术/软件（即“视同出口”）。此外，从2022年5月1日起，即使是居民向居民（仅限自然人）提供技术，如该接受信息的居民属于受到非居民强烈影响状态时（即属于“特定类型的居民”，包括外国公司的雇佣者、从外国政府获得重大利益的居民、受到外国政府指示在日本的活动的居民），向该居民提供技术相当于向非居民提供技术，受出口管制规则管辖。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>需要注意的是，与美国出口管制不同，日本出口管制法不管辖物项的“再出口3”或日本境外的“国内转移4”。但是，针对需要申请许可证的物项，在申请许可证时，最终用户需提交最终用户声明，并承诺后续如涉及物项的再出口/国内转移，该最终用户需采取必要的尽职调查措施以确保：1， 物项不会转移给涉及大规模杀伤性武器等相关主体；2， 要求新的最终用户签署最终用户声明；3）在特定情况下，向原出口商提供新的最终用户的相关资料并事先获得原出口商的书面同意等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（3）受管辖的物项：清单管制与全面管制</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本实施两种类型的管制：清单管制(List Controls)和全面管制(Catch-all Controls)：</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>清单管制是指对《出口贸易管理令》附表一和《外汇令》附表清单所列的1-15类物项和技术进行出口管制。清单管制针对所有国家及地区，即向任何国家或地区出口清单上所列货物或技术均需要申请许可证。但是，日本将国家和地区划分为不同类别（每个类别下的国家和地区可能存在重复），在向不同类别国家或地区出口不同类型的受控物项时，出口审批程序的复杂程度有所区别。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>全面管制针对非清单上的且可能用于研发、生产或使用大规模杀伤性武器或常规武器的物项，不适用于A类国家5。全面管制分为“大规模杀伤性武器全面管制”和“常规武器全面管制”两类。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>针对“大规模杀伤性武器全面管制”，如出口商接到经济产业省的通知，或出口商知晓：1）物项可能用于研发、生产或使用大规模杀伤性武器（最终用途条件）或2）物项最终用户参与了开发、制造、使用或储存大规模杀伤性武器或最终用户位于“最终用户清单”（最终用户条件），需要申请出口许可证。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>针对“常规武器全面管制”，出口至联合国安理会武器禁运国家6时，如出口商接到经济产业省通知或知晓物项可能用于研发、生产或使用常规武器时（最终用途条件，不包括最终用户条件），需要申请许可证。出口至一般地区7时，仅在接到经济产业省通知时才需申请许可证。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>目前，有超过90家中国实体被列入“最终用户清单”。在未获得许可证的情况下，被美国列入实体清单的主体无法获得受管辖的EAR99物项；与此不同，被日本列入“最终用户清单”的主体，针对非清单物项，仅涉及可能用于大规模杀伤性武器的特定非清单物项时，才需要申请许可证。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（4）许可证体系</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>根据物项、目的地的敏感性和安全性，出口商可以申请单项出口许可证 (individual export license)或批量出口许可证 (bulk export license)。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>1. 单项出口许可证</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>单项出口许可证的颁发基于交易具体情况，根据《出口贸易管理令》第八条的规定，单项出口许可证通常自颁发之日起六个月内有效。如果许可证持有人未能在六个月内出口物项，许可证原则上无效，但出口商可以在有效期届满前提交延长有效期的申请。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2. 批量出口许可证</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>如果出口商已经建立了内部出口管制制度，且有能力履行好出口管制要求，那么出口商可以在满足特定条件下获得批量出口许可证，无需为每个交易单独申请许可证。批量出口许可证包括五种类型，许可证的有效期为3年。向不同类别国家出口不同类型的受控物项时，可以申请的批量出口许可证类型及所需文件不同。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>注：除一般批量许可证外，其他批量许可证获批的前提是该出口商建立了内部控制制度并接受了事前现场核查。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>3.  许可证豁免</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>原则上，出口受清单管制的物项需要许可证，但日本出口管制规定了特定情况下的许可证豁免。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>对于受控货物的出口（除清单第1类武器物项外），主要豁免情形包括低价值货物豁免、特定目的的免费进出口豁免（如以修缮为目的进口至日本后从日本再出口）、受控物项作为零件或组件并入最终产品的豁免（受控物项是非主要零件8或与最终产品不可分割）等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>对于受控技术的转移，主要豁免情形包括公开技术豁免、基础科学研究豁免、工业产权申请或注册豁免、与货物/程序出口相关的技术转移豁免（例如安装、运行、维修、维护所必须的技术）等。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>（5）违反出口管制规则的处罚</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>从事货物出口或技术/软件转移的出口商如违反《外汇与外贸法》的规定，可能面临刑事和/或行政处罚，收到经济产业省的警告并要求提交背景声明/报告。出口商主动向经济产业省报告违法行为的，可能可以从轻处罚。与美国出口管制的域外效力不同，日本出口管制法仅管辖参与从日本出口货物或转移技术/软件的主体。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>违法主体需要提交一份以违规原因调查和防止再次发生违法行为为重点的背景说明/报告，原则上不对外公开。</Typography>
      <Typography paragraph variant="h5">
        三、贸易协定
      </Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>近期资讯</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>贸易协定全面与进步跨太平洋伙伴关系协定（简称CPTPP），是亚太国家组成的自由贸易区，是美国退出跨太平洋伙伴关系协定（TPP）后该协定的新名字。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2019年，日本与美国正式签署新贸易协定，按照协定内容，双方在协议生效后将立即或逐步降低农产品关税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>此项贸易协定重点内容是扩大农产品及部分工业制品市场开放程度。根据协议内容，协定一旦生效，日本将立即取消对美国生产的桃子、猕猴桃等水果，速溶咖啡等饮品的全部关税，5年内取消香肠、饼干、番茄汁、人造黄油等关税，7年内取消葡萄酒、蜂蜜关税，9年内取消猪肉关税，10年内取消酸奶关税，15年内取消奶酪关税。特别是美国重视的牛肉对日出口税率将从现在的38.5%逐年下调，最终到2033年税率将降至9%。同时，日本向美国出口的涡轮、机床、自行车、空调、燃料电池、眼镜、绿茶等产品关税也将被取消。据美方测算，通过此项协定日本将向美方开放约72亿美元农产品市场。日本首相安倍晋三称，此项协定是双赢成果，占世界GDP总量约30%的日、美两个经济大国，将分别取消84%和92%的进口商品关税。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>2022年，由中国、日本、韩国、澳大利亚、新西兰和东盟十国共15方签订区域全面经济伙伴关系协定（简称RCEP）</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>该协定内容共涉及削减关税、原产地原则、跨境电子交易、知识产权保护、人员移动等20个领域。其中，在商品关税方面，各成员国91%的商品关税将取消，中日贸易商品的86%、日韩贸易商品的83%将最终取消关税。其他国家间撤销关税的商品比例也将达到86%至100%。中国对日出口的服装、冷冻食品、蘑菇、绍兴酒，日本对华出口的电动汽车电池材料、车轴、农用拖拉机、部分钢铁制品、扇贝、日本清酒等均将取消关税。各国对日出口的工业品关税撤销率将达到98.6%。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>签订协定</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>双边协定</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日欧经济伙伴关系协定（JEFTA）：这是一项重要的贸易和投资协定，旨在消除日本和欧盟之间大部分商品的关税，并促进服务贸易和投资。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日美贸易协定：这是一项针对农产品、工业品和数字贸易的协定，旨在增强两国之间的经济关系。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>多边协定</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>全面与进步跨太平洋伙伴关系协定（CPTPP）：这是一个跨地区的贸易协定，旨在深化经济一体化，通过减少关税和非关税壁垒来促进成员国之间的贸易和投资。日本是CPTPP的重要成员之一。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>区域全面经济伙伴关系（RCEP）：这是一个亚太地区的重大贸易协定，包括东盟十国和其六个贸易伙伴——中国、日本、韩国、澳大利亚、新西兰和印度（尽管印度在签署前夕退出）。RCEP旨在降低成员国之间的贸易壁垒，促进区域经济一体化。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>其他协定</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本与新加坡经济伙伴关系协定：作为日本的第一个双边自由贸易协定，为两国之间的贸易和投资提供了框架。</Typography>
      <Typography paragraph sx={{ textIndent: '2em' }}>日本与墨西哥经济伙伴关系协定：这是日本与拉丁美洲国家之间的一个重要贸易协定，目的是促进贸易和投资流动。</Typography>

    </Box>
  )
}

export default Article
