export function animateCSS(element, animationNameList, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", ...animationNameList);
  function handleAnimationEnd() {
    node.classList.remove("animated", ...animationNameList);

    node.removeEventListener("animationend", handleAnimationEnd);
    if (typeof callback === "function") callback();
  }
  node.addEventListener("animationend", handleAnimationEnd);
}

export const questions = [
  {
    id: 1,
    q:
      "经过九九八十一天的宇宙航行,你终于从飞船中看到了此次航行的目标——8号星球,你决定:",
    a: {
      text: "在北侧不知名山顶降落",
      effect: ["A", "E"]
    },

    b: {
      text: "在南侧空旷平原降落",
      effect: ["D"]
    },
    c: {
      text: "在西侧海岸边降落",
      effect: ["B"]
    },
    d: {
      text: "在东侧居住区附近降落",
      effect: ["C"]
    }
  },
  {
    id: 2,
    q: "你走啊走,终于看到了人烟.为了更深入地了解8号星球的情况,你心想:",
    a: {
      text: "还有好多有趣的地方啊,自己接着探索吧~",
      effect: ["A", "B"]
    },

    b: {
      text: "掏出手机查查攻略",
      effect: ["C"]
    },
    c: {
      text: "可算看见人了，赶紧去问问路",
      effect: ["D"]
    },
    d: {
      text: "我是谁?我在哪?我好累我好想睡",
      effect: ["E"]
    }
  },
  {
    id: 3,
    q:
      "你来到一座城市,这里的人们非常亲切友好,突然有一位阿姨拉着你让你去她家做客,你心想:",
    a: {
      text: "???大妈你谁??快放我走!!HELP!!!",
      effect: ["C"]
    },

    b: {
      text: "欣然答应,并打算和阿姨一起打麻将",
      effect: ["B"]
    },
    c: {
      text: "冷静分析阿姨的穿着神态言行举止,确定不是坏人后再跟她去",
      effect: ["A", "D"]
    },
    d: {
      text: "立即跑走:“我突然想起来家里煤气没关，下次一定!!”",
      effect: ["E"]
    }
  },
  {
    id: 4,
    q:
      "你拗不过热情的阿姨,最终还是跟她去了.被一番款待后你也对这颗星球有了更多了解.天色渐晚,你感到有些饿,你决定:",
    a: {
      text: "找个地方美餐一顿",
      effect: ["A"]
    },

    b: {
      text: "到最近的便利店买点东西填肚子",
      effect: ["C"]
    },
    c: {
      text: "去这里的小吃街逛吃逛吃",
      effect: ["D", "E"]
    },
    d: {
      text: "我要减肥!我不吃!我不饿!(肚子:咕～)",
      effect: ["B"]
    }
  },
  {
    id: 5,
    q: "夜晚的8号星球灯火辉煌,你在大街上闲逛,突然碰到一对小情侣在吵架,你决定:",
    a: {
      text: "在旁边默默观察,开心吃瓜",
      effect: ["D"]
    },

    b: {
      text: "最看不得吵架,立刻冲上去调解",
      effect: ["A", "B"]
    },
    c: {
      text: "关我啥事,头也不回地走开",
      effect: ["C"]
    },
    d: {
      text: "和他们一起吵,看谁吵得过谁",
      effect: ["E"]
    }
  },
  {
    id: 6,
    q: "你来到一片小山丘,今晚夜色很美.你一个人躺在草地上望着满天星河,心想:",
    a: {
      text: "如此美景若是有佳人/才子与我共赏该多好",
      effect: ["B"]
    },

    b: {
      text: "从海底两万里想到上下五千年,一边想一边觉得自己能出本书",
      effect: ["A"]
    },
    c: {
      text: "太美了,一定要拍照发朋友圈",
      effect: ["C", "D"]
    },
    d: {
      text: "什么也不想,趁着月色好好睡一觉",
      effect: ["E"]
    }
  },
  {
    id: 7,
    q:
      "你躺在山丘上做了个美梦,醒来后天已经亮了.你在8号星球的探索即将结束,但这里的温暖和美好你会永远记得,旅程的最后,你决定:",
    a: {
      text: "回到地球后加入腾讯俱乐部,努力改造自己的家园!",
      effect: ["A"]
    },

    b: {
      text: "去拜访昨天那位热情的阿姨,向她安利腾讯俱乐部!",
      effect: ["D"]
    },
    c: {
      text: "立即填写腾讯俱乐部8.0报名表,入驻8号星球!",
      effect: ["C"]
    },
    d: {
      text: "和腾讯俱乐部一起创造一颗属于自己的星球!",
      effect: ["B", "E"]
    }
  }
];

export const results = {
  PM: {
    title: "发明家——产品经理",
    strong: "你是8号星球上的发明家。",
    text:
      "你乐于思考，善于分析，富于创新，敢于实践。你既有洞悉全局的掌控力，也能够沉下心分析细节上的问题。你通过思考与实践，能够在8号星球创造出许多有趣又实用的新鲜科技。"
  },
  DG: {
    title: "魔术师——设计",
    strong: "你是8号星球上的魔术师。",
    text:
      "你心思细腻，柔软善良，极富创意，捕捉美丽。你的眼睛是大千世界的万花筒，双手仿佛具有魔法。你带着才华和对美的向往，在8号星球追逐无限的可能。"
  },
  RD: {
    title: "建筑师——开发工程师",
    strong: "你是8号星球上的建筑师。",
    text:
      "你聪敏踏实，专注努力，逻辑清晰，思维缜密。逻辑是你的泥土，数据是你的砖瓦，8号星球是你的沙盘，无数日夜终能打造出未来城市的新图景。"
  },
  OP: {
    title: "政治家——运营",
    strong: "你是8号星球上的政治家。",
    text:
      "你乐于洞察，善于分析，目标明确，富有耐心。你能够第一时间捕捉时事动态，通过深入观察和思考，用简洁准确的方式获得公众支持。你会在8号星球收获一大批小粉丝。"
  },
  PL: {
    title: "冒险家——游戏策划",
    strong: "你是8号星球上的冒险家。",
    text:
      "你极具创意，逻辑清晰，重视策略，敢于冒险。上高山、下深海，你对于各类游戏了如指掌，冒险精神是你的标签。在8号星球，让思维和创意疯狂碰撞，未来的故事将由你谱写。"
  }
};
