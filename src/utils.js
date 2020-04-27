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
      effect: ["A", "E"],
    },

    b: {
      text: "在南侧空旷平原降落",
      effect: ["D"],
    },
    c: {
      text: "在西侧海岸边降落",
      effect: ["B"],
    },
    d: {
      text: "在东侧居住区附近降落",
      effect: ["C"],
    },
  },
  {
    id: 2,
    q: "你走啊走,终于看到了人烟.为了更深入地了解8号星球的情况,你心想:",
    a: {
      text: "还有好多有趣的地方啊,自己接着探索吧~",
      effect: ["A", "B"],
    },

    b: {
      text: "掏出手机查查攻略",
      effect: ["C"],
    },
    c: {
      text: "可算看见人了，赶紧去问问路",
      effect: ["D"],
    },
    d: {
      text: "我是谁?我在哪?我好累我好想睡",
      effect: ["E"],
    },
  },
  {
    id: 3,
    q:
      "你来到一座城市,这里的人们非常亲切友好,突然有一位阿姨拉着你让你去她家做客,你心想:",
    a: {
      text: "???大妈你谁??快放我走!!HELP!!!",
      effect: ["C"],
    },

    b: {
      text: "欣然答应,并打算和阿姨一起打麻将",
      effect: ["B"],
    },
    c: {
      text: "冷静分析阿姨的穿着神态言行举止,确定不是坏人后再跟她去",
      effect: ["A", "D"],
    },
    d: {
      text: "立即跑走:“我突然想起来家里煤气没关，下次一定!!”",
      effect: ["E"],
    },
  },
  {
    id: 4,
    q:
      "你拗不过热情的阿姨,最终还是跟她去了.被一番款待后你也对这颗星球有了更多了解.天色渐晚,你感到有些饿,你决定:",
    a: {
      text: "找个地方美餐一顿",
      effect: ["A"],
    },

    b: {
      text: "到最近的便利店买点东西填肚子",
      effect: ["C"],
    },
    c: {
      text: "去这里的小吃街逛吃逛吃",
      effect: ["D", "E"],
    },
    d: {
      text: "我要减肥!我不吃!我不饿!(肚子:咕～)",
      effect: ["B"],
    },
  },
  {
    id: 5,
    q: "夜晚的8号星球灯火辉煌,你在大街上闲逛,突然碰到一对小情侣在吵架,你决定:",
    a: {
      text: "在旁边默默观察,开心吃瓜",
      effect: ["D"],
    },

    b: {
      text: "最看不得吵架,立刻冲上去调解",
      effect: ["A", "B"],
    },
    c: {
      text: "关我啥事,头也不回地走开",
      effect: ["C"],
    },
    d: {
      text: "和他们一起吵,看谁吵得过谁",
      effect: ["E"],
    },
  },
  {
    id: 6,
    q: "你来到一片小山丘,今晚夜色很美.你一个人躺在草地上望着满天星河,心想:",
    a: {
      text: "如此美景若是有佳人/才子与我共赏该多好",
      effect: ["B"],
    },

    b: {
      text: "从海底两万里想到上下五千年,一边想一边觉得自己能出本书",
      effect: ["A"],
    },
    c: {
      text: "太美了,一定要拍照发朋友圈",
      effect: ["C", "D"],
    },
    d: {
      text: "什么也不想,趁着月色好好睡一觉",
      effect: ["E"],
    },
  },
  {
    id: 7,
    q:
      "你躺在山丘上做了个美梦,醒来后天已经亮了.你在8号星球的探索即将结束,但这里的温暖和美好你会永远记得,旅程的最后,你决定:",
    a: {
      text: "回到地球后加入腾讯俱乐部,努力改造自己的家园!",
      effect: ["A"],
    },

    b: {
      text: "去拜访昨天那位热情的阿姨,向她安利腾讯俱乐部!",
      effect: ["D"],
    },
    c: {
      text: "立即填写腾讯俱乐部8.0报名表,入驻8号星球!",
      effect: ["C"],
    },
    d: {
      text: "和腾讯俱乐部一起创造一颗属于自己的星球!",
      effect: ["B", "E"],
    },
  },
];

export const results = {
  PM: {
    title: "发明家——产品经理",
    strong: "你是8号星球上的发明家。",
    text:
      "你乐于思考，善于分析，富于创新，敢于实践。你既有洞悉全局的掌控力，也能够沉下心分析细节上的问题。你通过思考与实践，能够在8号星球创造出许多有趣又实用的新鲜科技。",
  },
  DG: {
    title: "魔术师——设计",
    strong: "你是8号星球上的魔术师。",
    text:
      "你心思细腻，柔软善良，极富创意，捕捉美丽。你的眼睛是大千世界的万花筒，双手仿佛具有魔法。你带着才华和对美的向往，在8号星球追逐无限的可能。",
  },
  RD: {
    title: "建筑师——开发工程师",
    strong: "你是8号星球上的建筑师。",
    text:
      "你聪敏踏实，专注努力，逻辑清晰，思维缜密。逻辑是你的泥土，数据是你的砖瓦，8号星球是你的沙盘，无数日夜终能打造出未来城市的新图景。",
  },
  OP: {
    title: "政治家——运营",
    strong: "你是8号星球上的政治家。",
    text:
      "你乐于洞察，善于分析，目标明确，富有耐心。你能够第一时间捕捉时事动态，通过深入观察和思考，用简洁准确的方式获得公众支持。你会在8号星球收获一大批小粉丝。",
  },
  PL: {
    title: "冒险家——游戏策划",
    strong: "你是8号星球上的冒险家。",
    text:
      "你极具创意，逻辑清晰，重视策略，敢于冒险。上高山、下深海，你对于各类游戏了如指掌，冒险精神是你的标签。在8号星球，让思维和创意疯狂碰撞，未来的故事将由你谱写。",
  },
};

/**
 * covert canvas to image
 * and save the image file
 */

export const Canvas2Image = (function() {
  // check if support sth.
  var $support = (function() {
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");

    return {
      canvas: !!ctx,
      imageData: !!ctx.getImageData,
      dataURL: !!canvas.toDataURL,
      btoa: !!window.btoa,
    };
  })();

  var downloadMime = "image/octet-stream";

  function scaleCanvas(canvas, width, height) {
    var w = canvas.width,
      h = canvas.height;
    if (width == undefined) {
      width = w;
    }
    if (height == undefined) {
      height = h;
    }

    var retCanvas = document.createElement("canvas");
    var retCtx = retCanvas.getContext("2d");
    retCanvas.width = width;
    retCanvas.height = height;
    retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
    return retCanvas;
  }

  function getDataURL(canvas, type, width, height) {
    canvas = scaleCanvas(canvas, width, height);
    return canvas.toDataURL(type);
  }

  function saveFile(strData) {
    document.location.href = strData;
  }

  function genImage(strData) {
    var img = document.createElement("img");
    img.src = strData;
    return img;
  }
  function fixType(type) {
    type = type.toLowerCase().replace(/jpg/i, "jpeg");
    var r = type.match(/png|jpeg|bmp|gif/)[0];
    return "image/" + r;
  }
  function encodeData(data) {
    if (!window.btoa) {
      throw "btoa undefined";
    }
    var str = "";
    if (typeof data == "string") {
      str = data;
    } else {
      for (var i = 0; i < data.length; i++) {
        str += String.fromCharCode(data[i]);
      }
    }

    return btoa(str);
  }
  function getImageData(canvas) {
    var w = canvas.width,
      h = canvas.height;
    return canvas.getContext("2d").getImageData(0, 0, w, h);
  }
  function makeURI(strData, type) {
    return "data:" + type + ";base64," + strData;
  }

  /**
   * create bitmap image
   * 按照规则生成图片响应头和响应体
   */
  var genBitmapImage = function(oData) {
    //
    // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
    // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
    //

    var biWidth = oData.width;
    var biHeight = oData.height;
    var biSizeImage = biWidth * biHeight * 3;
    var bfSize = biSizeImage + 54; // total header size = 54 bytes

    //
    //  typedef struct tagBITMAPFILEHEADER {
    //  	WORD bfType;
    //  	DWORD bfSize;
    //  	WORD bfReserved1;
    //  	WORD bfReserved2;
    //  	DWORD bfOffBits;
    //  } BITMAPFILEHEADER;
    //
    var BITMAPFILEHEADER = [
      // WORD bfType -- The file type signature; must be "BM"
      0x42,
      0x4d,
      // DWORD bfSize -- The size, in bytes, of the bitmap file
      bfSize & 0xff,
      (bfSize >> 8) & 0xff,
      (bfSize >> 16) & 0xff,
      (bfSize >> 24) & 0xff,
      // WORD bfReserved1 -- Reserved; must be zero
      0,
      0,
      // WORD bfReserved2 -- Reserved; must be zero
      0,
      0,
      // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
      54,
      0,
      0,
      0,
    ];

    //
    //  typedef struct tagBITMAPINFOHEADER {
    //  	DWORD biSize;
    //  	LONG  biWidth;
    //  	LONG  biHeight;
    //  	WORD  biPlanes;
    //  	WORD  biBitCount;
    //  	DWORD biCompression;
    //  	DWORD biSizeImage;
    //  	LONG  biXPelsPerMeter;
    //  	LONG  biYPelsPerMeter;
    //  	DWORD biClrUsed;
    //  	DWORD biClrImportant;
    //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
    //
    var BITMAPINFOHEADER = [
      // DWORD biSize -- The number of bytes required by the structure
      40,
      0,
      0,
      0,
      // LONG biWidth -- The width of the bitmap, in pixels
      biWidth & 0xff,
      (biWidth >> 8) & 0xff,
      (biWidth >> 16) & 0xff,
      (biWidth >> 24) & 0xff,
      // LONG biHeight -- The height of the bitmap, in pixels
      biHeight & 0xff,
      (biHeight >> 8) & 0xff,
      (biHeight >> 16) & 0xff,
      (biHeight >> 24) & 0xff,
      // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
      1,
      0,
      // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
      // has a maximum of 2^24 colors (16777216, Truecolor)
      24,
      0,
      // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
      0,
      0,
      0,
      0,
      // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
      biSizeImage & 0xff,
      (biSizeImage >> 8) & 0xff,
      (biSizeImage >> 16) & 0xff,
      (biSizeImage >> 24) & 0xff,
      // LONG biXPelsPerMeter, unused
      0,
      0,
      0,
      0,
      // LONG biYPelsPerMeter, unused
      0,
      0,
      0,
      0,
      // DWORD biClrUsed, the number of color indexes of palette, unused
      0,
      0,
      0,
      0,
      // DWORD biClrImportant, unused
      0,
      0,
      0,
      0,
    ];

    var iPadding = (4 - ((biWidth * 3) % 4)) % 4;

    var aImgData = oData.data;

    var strPixelData = "";
    var biWidth4 = biWidth << 2;
    var y = biHeight;
    var fromCharCode = String.fromCharCode;

    do {
      var iOffsetY = biWidth4 * (y - 1);
      var strPixelRow = "";
      for (var x = 0; x < biWidth; x++) {
        var iOffsetX = x << 2;
        strPixelRow +=
          fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
          fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
          fromCharCode(aImgData[iOffsetY + iOffsetX]);
      }

      for (var c = 0; c < iPadding; c++) {
        strPixelRow += String.fromCharCode(0);
      }

      strPixelData += strPixelRow;
    } while (--y);

    var strEncoded =
      encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) +
      encodeData(strPixelData);

    return strEncoded;
  };

  /**
   * saveAsImage
   * @param canvasElement
   * @param {String} image type
   * @param {Number} [optional] png width
   * @param {Number} [optional] png height
   */
  var saveAsImage = function(canvas, width, height, type) {
    if ($support.canvas && $support.dataURL) {
      if (typeof canvas == "string") {
        canvas = document.getElementById(canvas);
      }
      if (type == undefined) {
        type = "png";
      }
      type = fixType(type);
      var strData;
      if (/bmp/.test(type)) {
        var data = getImageData(scaleCanvas(canvas, width, height));
        strData = genBitmapImage(data);
        saveFile(makeURI(strData, downloadMime));
      } else {
        strData = getDataURL(canvas, type, width, height);
        saveFile(strData.replace(type, downloadMime));
      }
    }
  };

  var convertToImage = function(canvas, width, height, type) {
    if ($support.canvas && $support.dataURL) {
      if (typeof canvas == "string") {
        canvas = document.getElementById(canvas);
      }
      if (type == undefined) {
        type = "png";
      }
      type = fixType(type);
      var strData;
      if (/bmp/.test(type)) {
        var data = getImageData(scaleCanvas(canvas, width, height));
        strData = genBitmapImage(data);
        return genImage(makeURI(strData, "image/bmp"));
      } else {
        strData = getDataURL(canvas, type, width, height);
        return genImage(strData);
      }
    }
  };

  return {
    saveAsImage: saveAsImage,
    saveAsPNG: function(canvas, width, height) {
      return saveAsImage(canvas, width, height, "png");
    },
    saveAsJPEG: function(canvas, width, height) {
      return saveAsImage(canvas, width, height, "jpeg");
    },
    saveAsGIF: function(canvas, width, height) {
      return saveAsImage(canvas, width, height, "gif");
    },
    saveAsBMP: function(canvas, width, height) {
      return saveAsImage(canvas, width, height, "bmp");
    },

    convertToImage: convertToImage,
    convertToPNG: function(canvas, width, height) {
      return convertToImage(canvas, width, height, "png");
    },
    convertToJPEG: function(canvas, width, height) {
      return convertToImage(canvas, width, height, "jpeg");
    },
    convertToGIF: function(canvas, width, height) {
      return convertToImage(canvas, width, height, "gif");
    },
    convertToBMP: function(canvas, width, height) {
      return convertToImage(canvas, width, height, "bmp");
    },
  };
})();
