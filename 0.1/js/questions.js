const questions = [
  {
    id: 1,
    dimension: "RM",
    text: "你需要初步了解一个陌生领域（比如写作业或满足好奇），第一步更接近？",
    optionA: "快速浏览，有印象就好，不纠结细节",
    optionB: "遇到不懂的会停下来深挖，想搞明白",
    scoreA: { R: 1 },
    scoreB: { M: 1 }
  },
  {
    id: 2,
    dimension: "RM",
    text: "规划一个新任务，方向还不明确，你会？",
    optionA: "先列出多个可能的切入点，比较优劣",
    optionB: "快速锁定一条最可行的，先做起来",
    scoreA: { R: 1 },
    scoreB: { M: 1 }
  },
  {
    id: 3,
    dimension: "RM",
    text: "过去一年的学习/阅读轨迹更接近？",
    optionA: "涉猎多个方向，每个懂一点但不深",
    optionB: "大部分时间花在一两个方向，脉络清楚",
    scoreA: { R: 1 },
    scoreB: { M: 1 }
  },
  {
    id: 4,
    dimension: "RM",
    text: "读到与自己任务无关但有趣的冷知识？",
    optionA: "多看两眼，存下来，说不定有用",
    optionB: "扫一眼过去，精力放正事上",
    scoreA: { R: 1 },
    scoreB: { M: 1 }
  },
  {
    id: 5,
    dimension: "ET",
    text: "快速了解一篇长文章/论文的大致内容，你会？",
    optionA: "只抓核心观点和整体框架",
    optionB: "逐段看，对关键细节特别注意",
    scoreA: { E: 1 },
    scoreB: { T: 1 }
  },
  {
    id: 6,
    dimension: "ET",
    text: "做学习/工作记录时，你更接近？",
    optionA: "记关键步骤和核心结果，能看懂就行",
    optionB: "详细记录过程、条件和当时想法",
    scoreA: { E: 1 },
    scoreB: { T: 1 }
  },
  {
    id: 7,
    dimension: "ET",
    text: "发现某人表述前后有细微矛盾时？",
    optionA: "注意到但不影响结论就不追究",
    optionB: "会指出来或自己琢磨",
    scoreA: { E: 1 },
    scoreB: { T: 1 }
  },
  {
    id: 8,
    dimension: "ET",
    text: "对实验室/办公室/宿舍的公共物品态度？",
    optionA: "大家自觉就好，偶尔乱一点可以接受",
    optionB: "希望有明确归位规则，井井有条",
    scoreA: { E: 1 },
    scoreB: { T: 1 }
  },
  {
    id: 9,
    dimension: "PA",
    text: "接到新任务，目标和范围还不清晰，第一反应？",
    optionA: "先自己画张“地图”，框定可能方向，哪怕会推翻",
    optionB: "先找更多信息，没搞清楚前不贸然动手",
    scoreA: { P: 1 },
    scoreB: { A: 1 }
  },
  {
    id: 10,
    dimension: "PA",
    text: "实验中/研究中出现预期外的结果？",
    optionA: "脑子里立刻冒出几种解释，觉得可能是新方向",
    optionB: "先重复确认不是失误，查文献，不急着下判断",
    scoreA: { P: 1 },
    scoreB: { A: 1 }
  },
  {
    id: 11,
    dimension: "PA",
    text: "导师给你模糊反馈，如“这个思路再想想”？",
    optionA: "自己揣摩几个可能方向，改一版再给导师看",
    optionB: "追问具体哪里有问题、希望往哪改",
    scoreA: { P: 1 },
    scoreB: { A: 1 }
  },
  {
    id: 12,
    dimension: "PA",
    text: "面对还有较长时间才截止的任务（如毕业论文）？",
    optionA: "先搭粗糙框架，后面慢慢填内容调整",
    optionB: "先花时间收集足够信息，胸有成竹再动笔",
    scoreA: { P: 1 },
    scoreB: { A: 1 }
  },
  {
    id: 13,
    dimension: "VC",
    text: "对某个方向有模糊想法，想进一步理清思路？",
    optionA: "先把各种可能性列出来，看看有什么方向",
    optionB: "先找最现实、最能落地的切入点",
    scoreA: { V: 1 },
    scoreB: { C: 1 }
  },
  {
    id: 14,
    dimension: "VC",
    text: "写报告/作业的最后一部分（总结与展望）？",
    optionA: "把可能延伸方向都写上，脑洞大一点",
    optionB: "紧扣已写内容，不写太飘没把握的",
    scoreA: { V: 1 },
    scoreB: { C: 1 }
  },
  {
    id: 15,
    dimension: "VC",
    text: "看到很酷但不成熟的新技术/新理论？",
    optionA: "马上联想可能带来的改变，脑补成熟场景",
    optionB: "觉得想法好但为时过早，等能用再看",
    scoreA: { V: 1 },
    scoreB: { C: 1 }
  },
  {
    id: 16,
    dimension: "VC",
    text: "任务/作业做到什么程度觉得“可以交出去了”？",
    optionA: "核心验证了、故事讲圆了就行，细节后续磨",
    optionB: "数据逻辑没漏洞，能解释每个选择",
    scoreA: { V: 1 },
    scoreB: { C: 1 }
  },
  {
    id: 17,
    dimension: "energy",
    text: "高强度学习/工作后，终于有一天完全属于自己？",
    optionA: "一个人待着，看书刷剧打游戏发呆",
    optionB: "约朋友同学吃饭聊天，和人待一起才放松",
    scoreA: {},
    scoreB: {}
  },
  {
    id: 18,
    dimension: "energy",
    text: "学习/工作中卡住了，一时想不出办法？",
    optionA: "自己消化，查资料、问AI，尽量自己解决",
    optionB: "找身边人聊一聊，说着说着可能就通了",
    scoreA: {},
    scoreB: {}
  },
  {
    id: 19,
    dimension: "check",
    text: "整理手机/电脑文件时，通常是？",
    optionA: "定期整理，每个文件有固定文件夹",
    optionB: "能用就行，桌面堆满但大概知道在哪",
    scoreA: {},
    scoreB: {}
  },
  {
    id: 20,
    dimension: "check",
    text: "到陌生城市旅行，探索方式更接近？",
    optionA: "大致定几个区域，随性走，发现有意思就拐进去",
    optionB: "提前规划好每天路线和地点",
    scoreA: {},
    scoreB: {}
  },
  {
    id: 21,
    dimension: "trap",
    text: "你认为优秀研究者最重要的品质？",
    optionA: "扎实严谨，每一步经得起推敲",
    optionB: "想象力丰富，能提出别人没想到的问题",
    optionC: "都重要，但偏严谨",
    optionD: "都重要，但偏想象力",
    scoreA: {},
    scoreB: {},
    scoreC: {},
    scoreD: {}
  },
  {
    id: 22,
    dimension: "validity",
    text: "做完测试，你觉得结果描述的你？",
    optionA: "非常准确",
    optionB: "部分准确",
    optionC: "不太准确",
    optionD: "不确定",
    scoreA: {},
    scoreB: {},
    scoreC: {},
    scoreD: {}
  }
];