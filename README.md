## 外贸网站

### 技术框架

react + mui

### 项目详情

```
    ├─component // 相关组件
    ├─pages // 具体页面
    │  ├─AIPage // AI工具 
    │  ├─AssessmentPage // 测评
    │  ├─NewsPage // 本周快讯
    │  ├─RegionPage // 地区查询
    │  │  └─Articles 
    │  │      └─USA // 美国的文章，共有三个板块
    │  │          ├─Column1
    │  │          ├─Column2
    │  │          └─Column3
    │  └─TeamPage // 专业团队
    └─pic // 静态资源
```

### 使用方法

本项目使用github pages进行挂载，具体使用方法如下：

```shell
// 启动项目
npm install 
npm start

// 发布更新的页面
npm run deploy
```

本项目存储在一个公开的组织中，完全开源，使用时请注意开源协议