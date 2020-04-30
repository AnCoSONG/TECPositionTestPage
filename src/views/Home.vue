<template>
  <div class="home">
    <div class="bg" :style="{ 'background-color': bgColor }"></div>
    <div
      id="viewport"
      :style="{ width: vpWidth + 'px', height: vpHeight + 'px' }"
    >
      <div id="index">
        <img
          class="title"
          src="https://tencentclub2020.oss-cn-beijing.aliyuncs.com/ix/indexMainTitle.png"
        />
        <img
          class="slogen"
          src="https://tencentclub2020.oss-cn-beijing.aliyuncs.com/ix/indexSubTitle.png"
        />
        <div class="startBtn" @click="nextProcess('Q1')">
          <div class="fluentBtn"></div>
        </div>
        <div class="musicBtn" @click="toggleMusic"></div>
      </div>
      <VPQBox
        id="Q1"
        :template="questions[0]"
        :imgUrl="quesBG[0]"
        @done="nextProcess('Q2')"
      />
      <VPQBox
        id="Q2"
        :template="questions[1]"
        :imgUrl="quesBG[1]"
        @done="nextProcess('Q3')"
      />
      <VPQBox
        id="Q3"
        :template="questions[2]"
        :imgUrl="quesBG[2]"
        @done="nextProcess('Q4')"
      />
      <VPQBox
        id="Q4"
        :template="questions[3]"
        :imgUrl="quesBG[3]"
        @done="nextProcess('Q5')"
      />
      <VPQBox
        id="Q5"
        :template="questions[4]"
        :imgUrl="quesBG[4]"
        @done="nextProcess('Q6')"
      />
      <VPQBox
        id="Q6"
        :template="questions[5]"
        :imgUrl="quesBG[5]"
        @done="nextProcess('Q7')"
      />
      <VPQBox
        id="Q7"
        :template="questions[6]"
        :imgUrl="quesBG[6]"
        @done="nextProcess('displaying')"
      />
      <div id="result">
        <div class="desc"></div>
        <div class="res_title"></div>
        <img
          :src="resultUrl"
          alt
          crossOrigin="*"
          class="result_img"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import QBox from "@/components/QBox.vue";
import VPQBox from "@/components/VPQBox.vue";
import { animateCSS, questions, Canvas2Image, getOSSUrl } from "../utils";
import html2canvas from "html2canvas";
import axios from "axios";
axios.defaults.baseURL = "https://www.scutongxin.club";

export default {
  name: "Home",
  components: {
    VPQBox,
  },
  data() {
    return {
      hello: "123",
      questions: questions,
      vpWidth: 320,
      vpHeight: 480,
      bgColor: "#eee",
      // quesBG: [
      //   require("../assets/prog/qs/q1.jpg"),
      //   require("../assets/prog/qs/q2.jpg"),
      //   require("../assets/prog/qs/q3.jpg"),
      //   require("../assets/prog/qs/q4.jpg"),
      //   require("../assets/prog/qs/q5.jpg"),
      //   require("../assets/prog/qs/q6.jpg"),
      //   require("../assets/prog/qs/q7.jpg"),
      // ],
      quesBG: ["", "", "", "", "", "", ""],
      descBG: ["", "", "", "", "", ""],
      resultBG: ["", "", "", "", "", ""],
      descUrl: "",
      resultUrl: "",
      audio: null,
    };
  },
  computed: {
    loadDone() {
      return this.$store.state.loadDone;
    },
    points() {
      return this.$store.state.points;
    },
    curProc() {
      return this.$store.state.currentProcess;
    },
    optionsList() {
      return this.$store.state.optionsList;
    },
    result() {
      return this.getTestResult();
    },
  },
  created() {
    console.log(getOSSUrl("q1"));
    console.log("created");
    //*检测设备宽度 高度 获取比例 -> 动态计算viewport大小
    const height = window.innerHeight;
    const width = window.innerWidth;
    const ratio = width / height;
    console.log(ratio);
    if (ratio < 2 / 3) {
      this.vpWidth = width > 560 ? 560 : width;
      this.vpHeight = Math.floor(this.vpWidth * 1.5);
    } else {
      this.vpHeight = height > 840 ? 840 : height;
      this.vpWidth = Math.floor((this.vpHeight * 2) / 3);
    }
    this.audio = new Audio(
      "https://tencentclub2020.oss-cn-beijing.aliyuncs.com/The star.mp3"
    );
    this.audio.loop = true;
    this.audio.muted = true; //* 解决浏览器限制随机噪音禁止播放的问题
  },

  mounted() {
    console.log("mounted");
    console.log(window.$(".home"));
    this.$nextTick(() => {
      window.$(".home").focus();
      this.toggleMusic();
    });
    // axios
    //   .post("/api", {
    //     optionsList: ["A", "B", "A", "B", "C", "D", "A"],
    //     points: {
    //       RD: 4,
    //       PM: 3,
    //       PL: 2,
    //       OP: 0,
    //       DG: 0,
    //     },
    //     result: "RD",
    //   })
    //   .then((res) => {
    //     console.log("Success", res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    //* 首屏展示逻辑
    var interval = setInterval(() => {
      // 检查
      console.log(this.curProc);
      if (window.loadDone && !(this.curProc === "index")) {
        window.$("#index").css("visibility", "visible");

        animateCSS("#index", ["zoomIn"], () => {
          this.quesBG = [
            getOSSUrl("q1"),
            getOSSUrl("q2"),
            getOSSUrl("q3"),
            getOSSUrl("q4"),
            getOSSUrl("q5"),
            getOSSUrl("q6"),
            getOSSUrl("q7"),
          ];
          //* 在此提前缓存全部的资源
          this.descBG = [];
          this.resultBG = [];
          setTimeout(() => {
            document.querySelector("#viewport").classList.add("box-shadow");
            window.$(".title").css("visibility", "visible");
            animateCSS(".title", ["bounceInDown"], () => {
              window.$(".slogen").css("visibility", "visible");
              animateCSS(".slogen", ["bounceInDown"], () => {
                window.$(".startBtn").css("visibility", "visible");
                // document.querySelector(".startBtn").classList.add("fluent");
                animateCSS(".startBtn", ["fadeIn"], () => {
                  window.$(".startBtn").css("pointer-events", "auto");
                });
              });
            });
          }, 50);
        });
        this.nextProcess();
        window.clearInterval(interval);
      }
    }, 50);
    console.log(this.curProc);
    if (window.loadDone) {
      window.location.reload();
    }
  },

  methods: {
    showAnswer(numStr) {
      const rootPath = `#Q${numStr}`;
      console.log("current rootpath", rootPath);
      const quesPath = `${rootPath} .inner_box .qtext`;
      const APath = `${rootPath} .inner_box .A`;
      const BPath = `${rootPath} .inner_box .B`;
      const CPath = `${rootPath} .inner_box .C`;
      const DPath = `${rootPath} .inner_box .D`;
      const AEle = window.$(APath);
      const BEle = window.$(BPath);
      const CEle = window.$(CPath);
      const DEle = window.$(DPath);
      setTimeout(() => {
        window.$(quesPath).css({ visibility: "visible" });
        animateCSS(quesPath, ["bounceInRight"]);
      }, 0);
      setTimeout(() => {
        AEle.css({ visibility: "visible" });
        animateCSS(APath, ["bounceInRight"]);
      }, 500);
      setTimeout(() => {
        BEle.css({ visibility: "visible" });
        animateCSS(BPath, ["bounceInRight"], () => {});
      }, 800);
      setTimeout(() => {
        CEle.css({ visibility: "visible" });
        animateCSS(CPath, ["bounceInRight"]);
      }, 1100);
      setTimeout(() => {
        DEle.css({ visibility: "visible" });
        animateCSS(DPath, ["bounceInRight"], () => {
          AEle.css("pointer-events", "auto");
          BEle.css("pointer-events", "auto");
          CEle.css("pointer-events", "auto");
          DEle.css("pointer-events", "auto");
        });
      }, 1400);
    },
    toggleMusic() {
      if (this.audio.paused) {
        this.audio.muted = false;
        this.audio.play();
        window
          .$(".musicBtn")
          .addClass("playing")
          .removeClass("paused");
      } else {
        this.audio.muted = false;
        this.audio.pause();
        window.$(".musicBtn").addClass("paused");
      }
    },
    nextProcess(proc) {
      console.log("下一个", proc);
      if (proc === this.curProc) {
        console.log("重复请求");
        return;
      }
      console.log(typeof proc);
      this.$store.commit(
        typeof proc === "string" ? "setProcess" : "nextProcess",
        proc
      );
      console.log("current process", this.curProc);
      switch (this.curProc) {
        case "loading":
        case "index":
          break;
        case "Q1":
          console.log("in Q1");
          animateCSS("#index", ["bounceOutUp"], () => {
            window.$("#index").css("visibility", "hidden");
            window.$("#index .musicBtn").css("visibility", "hidden");
            window.$("#index .title").css("visibility", "hidden");
            window.$("#index .slogen").css("visibility", "hidden");
            window.$("#index .startBtn").css("visibility", "hidden");
            window.$("#Q1").css("visibility", "visible");
            this.bgColor = "#123";
            animateCSS("#Q1", ["fadeIn"], () => {
              this.showAnswer("1");
            });
          });
          break;
        case "Q2":
          animateCSS("#Q1", ["fadeOut"], () => {
            window.$("#Q1").css("display", "none");
          });
          setTimeout(() => {
            window.$("#Q2").css("visibility", "visible");
            this.bgColor = "#223";
            animateCSS("#Q2", ["fadeIn"], () => {
              this.showAnswer("2");
            });
          }, 200);
          break;
        case "Q3":
          animateCSS("#Q2", ["fadeOut"], () => {
            window.$("#Q2").css("display", "none");
          });
          setTimeout(() => {
            window.$("#Q3").css("visibility", "visible");
            this.bgColor = "#234";
            animateCSS("#Q3", ["fadeIn"], () => {
              this.showAnswer("3");
            });
          }, 200);
          break;
        case "Q4":
          animateCSS("#Q3", ["fadeOut"], () => {
            window.$("#Q3").css("display", "none");
          });
          setTimeout(() => {
            window.$("#Q4").css("visibility", "visible");
            this.bgColor = "#234";
            animateCSS("#Q4", ["fadeIn"], () => {
              this.showAnswer("4");
            });
          }, 200);
          break;
        case "Q5":
          animateCSS("#Q4", ["fadeOut"], () => {
            window.$("#Q4").css("display", "none");
          });
          setTimeout(() => {
            window.$("#Q5").css("visibility", "visible");
            this.bgColor = "#345";
            animateCSS("#Q5", ["fadeIn"], () => {
              this.showAnswer("5");
            });
          }, 200);
          break;
        case "Q6":
          animateCSS("#Q5", ["fadeOut"], () => {
            window.$("#Q5").css("display", "none");
          });
          setTimeout(() => {
            window.$("#Q6").css("visibility", "visible");
            this.bgColor = "#357";
            animateCSS("#Q6", ["fadeIn"], () => {
              this.showAnswer("6");
            });
          }, 200);
          break;
        case "Q7":
          animateCSS("#Q6", ["fadeOut"], () => {
            window.$("#Q6").css("display", "none");
          });
          setTimeout(() => {
            window.$("#Q7").css("visibility", "visible");
            animateCSS("#Q7", ["fadeIn"], () => {
              this.showAnswer("7");
            });
          }, 200);
          break;
        case "displaying":
          console.log("in displaying");
          //this.descUrl = `https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/${this.result.toLowerCase()}_text.png`;
          this.resultUrl = `https://tencentclub2020.oss-cn-beijing.aliyuncs.com/prog/rs/${this.result.toLowerCase()}.jpg`;
          // this.resultUrl = require(`../assets/prog/rs/${this.result.toLowerCase()}.jpg`);
          window.$("#result .desc").addClass(this.result.toLowerCase());
          window.$("#result .res_title").addClass(this.result.toLowerCase());
          // window.$("#result .res_subtitle").addClass(this.result.toLowerCase());
          //! 待完成动态排版内容
          /**
          //* 1. 根据结果动态的图片src设置 ✅
          //* 2. 根据结果动态的图片位置设置 ✅
          //* 3. 结果展示动态效果实现 ✅
          //* 4. 魔术师/建筑师等文字闪烁效果实现 ❌
          */
          animateCSS("#Q7", ["fadeOut"], () => {
            window.$("#Q7").css("display", "none");
          });
          setTimeout(() => {
            window.$("#result").css("visibility", "visible");
            //** 在这里上传数据 */
            const recordData = {
              optionsList: this.optionsList,
              points: this.points,
              result: this.result,
            };
            console.log(recordData);
            axios
              .post("/record/newRecord", {
                ...recordData,
              })
              .then((res) => {
                if (res.status === 200) {
                  console.log("Success", res);
                } else {
                  console.warn("Something went wrong", res);
                }
              })
              .catch((err) => {
                console.error(err);
              });
            //** 无阻塞上传 用户无感知 */
            animateCSS("#result", ["bounceInDown"], () => {
              window.$("#result .res_title").css("visibility", "visible");
              animateCSS("#result .res_title", ["bounceInDown"], () => {
                window.$("#result .desc").css("visibility", "visible");
                animateCSS("#result .desc", ["fadeInRight"], () => {
                  //* 展示之后把result转换成图片，新加一个img标签然后覆盖在顶层，这样微信保存的图片就是没问题的了！！！
                  //TODO 已完成图片覆盖!
                  console.log("开始转换");
                  html2canvas(document.getElementById("result"), {
                    scale:window.devicePixelRatio,
                    width:this.vpWidth,
                    height:this.vpHeight,
                    useCORS: true, //允许跨域图片
                  }).then((canvasObj) => {
                    var context = canvasObj.getContext("2d");
                    //!【重要】关闭抗锯齿
                    context.mozImageSmoothingEnabled = false;
                    context.webkitImageSmoothingEnabled = false;
                    context.msImageSmoothingEnabled = false;
                    context.imageSmoothingEnabled = false;
                    const img = Canvas2Image.convertToImage(
                      canvasObj,
                      this.vpWidth,
                      this.vpHeight,
                      "png"
                    );
                    img.style.cssText =
                      "position: absolute;top: 0;left: 0;width: 100%;opacity: 0;z-index: 20;";
                    document.getElementById("result").appendChild(img);
                    console.log("转换完成");
                  });
                });
              });
            });
          }, 200);
          break;
        default:
          console.error("words spell error", this.curProc);
          break;
      }
    },

    getTestResult() {
      const maxVal = Math.max(...Object.values(this.points));
      console.log(maxVal);
      const resultList = Object.keys(this.points)
        .filter((e) => this.points[e] === maxVal)
        .toString()
        .split(",");
      return resultList[Math.floor(Math.random() * resultList.length)];
    },
  },
};
</script>

<style lang="scss">
@import url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/fonts/fzktj-embed.css");
div {
  outline: none; //去掉点击效果
  user-select: none;
}
.home {
  min-width: 320px;
  // background-color: #444;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
}

.bg {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  transition: all 0.5s ease-in-out;
}

#viewport {
  width: 320px; //initial width
  height: 480px; //initial height
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
  font-family: FZKTJ;
  // border:4px solid white;
  #index {
    background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/prog/ix/indexpro.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    visibility: hidden;
    color: white;

    z-index: 1;

    .musicBtn {
      position: absolute;
      bottom: 5%;
      left: 50%;
      cursor: pointer;
      pointer-events: none;
      width: 9%;
      height: 6%;
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/ix/music.svg");
      background-size: contain;
      background-repeat: no-repeat;
      transform: translateX(-50%);
      animation-fill-mode: forwards;
      transition: filter 0.5s linear;
      &.playing {
        animation: musicDiscRotation 4s linear infinite;
        filter: drop-shadow(0 0 0.75rem #0cb9f4);
        pointer-events: auto;
      }
      &.paused {
        animation-play-state: paused;
        filter: drop-shadow(0 0 0.1rem #0cb9f4);
      }
    }

    @keyframes musicDiscRotation {
      0% {
        transform: translateX(-50%) rotate(0deg);
      }
      100% {
        transform: translateX(-50%) rotate(360deg);
      }
    }

    .title {
      visibility: hidden;
      width: 25.9375%;
      height: 55.4167%;
      position: absolute;
      top: 8.79%;
      left: 7.48%;
      user-select: none;
    }

    .slogen {
      visibility: hidden;
      position: absolute;
      width: 5.3125%;
      height: auto;
      top: 6.502%;
      right: 15.2484%;
      user-select: none;
    }

    .startBtn {
      width: 22.8125%;
      height: 12.5%;
      // background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #0ea9f4);
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/ix/indexbtn_big.png");
      background-size: contain;
      z-index: 1;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 50%;
      left: 50%;
      transform: translate(-40%, -70%);
      font-size: 1.3rem;
      cursor: pointer;
      visibility: hidden;
      user-select: none;
      pointer-events: none;
    }
    .fluentBtn {
      position: absolute;
      left: -5px;
      right: -5px;
      top: -5px;
      bottom: -5px;
      background-color: rgba(245, 236, 207);
      background-size: 200%;
      filter: blur(20px);
      border-radius: 30px;
      z-index: -1;
      opacity: 0.3;
      user-select: none;
      animation: fluent 2s ease-in-out infinite alternate;
    }

    @keyframes fluent {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0.3;
      }
    }
  }

  #Q1 {
    z-index: 1001;
    text-shadow: rgb(255, 247, 130, 0.5) 0px 0px 12px;
  }

  #Q2 {
    z-index: 1002;
    text-shadow: rgb(255, 247, 130, 0.5) 0px 0px 12px;
  }
  #Q3 {
    z-index: 1003;
    text-shadow: rgb(255, 247, 130, 0.5) 0px 0px 12px;
  }
  #Q4 {
    z-index: 1004;
    text-shadow: rgb(255, 247, 130, 0.5) 0px 0px 12px;
  }
  #Q5 {
    z-index: 1005;
    text-shadow: #111 0px 0px 12px;
  }
  #Q6 {
    z-index: 1006;
    text-shadow: #111 0px 0px 12px;
  }
  #Q7 {
    z-index: 1007;
    text-shadow: #111 0px 0px 12px;
  }

  @keyframes textshadowAnim {
    0% {
      text-shadow: rgb(255, 247, 130) 0px 0px 12px;
    }
    50% {
      text-shadow: #111 0px 0px 12px;
    }
    100% {
      text-shadow: rgb(255, 247, 130) 0px 0px 12px;
    }
  }

  #result {
    z-index: 1008;
    // background-size: contain;
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    visibility: hidden;
    font-size: 1.6rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .result_img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .desc {
    position: absolute;
    width: 61.5625%;
    height: 32.70833%;
    background-size: contain;
    background-repeat: no-repeat;
    visibility: hidden;
    &.dg {
      top: 2.9918%;
      right: 6.9009%;
      width: 61.5625%;
      height: 32.70833%;
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/dg_text.png");
    }
    &.rd {
      bottom: 18.1485%;
      right: 10.2879%;
      width: 81.71875%;
      height: 21.875%;
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/rd_text.png");
    }
    &.pl {
      top: 10.019757%;
      right: 3.51397%;
      width: 61.09375%;
      height: 34.270833%;
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/pl_text.png");
    }
    &.pm {
      bottom: 18.6328%;
      right: 11.176968%;
      width: 83.234375%;
      height: 24.0625%;
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/pm_text.png");
    }
    &.op {
      top: 12.55997%;
      right: 3.51397%;
      width: 56.5625%;
      height: 31.66667%;
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/op_text.png");
    }
  }
  .res_title {
    // font-size: 30px;
    // writing-mode: vertical-lr;
    // text-shadow: #fff78280 0px 0px 24px;
    // color:black;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    visibility: hidden;
    &.rd {
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/rd_title.png");
      top: 35.111487440022579735%;
      right: 7.9170194750211685013%;
      width: 18.59375%;
      height: 31.25%;
    }
    &.dg {
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/dg_title.png");
      top: 44.284504657070279424%;
      left: 6.3787750493931696303%;
      width: 18.75%;
      height: 26.979166666666666667%;
    }
    &.pl {
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/pl_title.png");
      width: 19.0625%;
      height: 31.041666666666666667%;
      top: 6.0118543607112616427%;
      right: 74.21676545300592718%;
    }
    &.pm {
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/pm_title.png");
      top: 7.9311318092012418854%;
      right: 70.53344623200677392%;
      width: 19.53125%;
      height: 29.375%;
    }
    &.op {
      background-image: url("https://tencentclub2020.oss-cn-beijing.aliyuncs.com/rs/op_title.png");
      top: 5.7860570138300874965%;
      right: 74.470787468247248095%;
      width: 19.0625%;
      height: 26.979166666666666667%;
    }
  }

  .res_subtitle {
    font-size: 20px;
    writing-mode: vertical-lr;
    &.rd {
    }
    &.dg {
    }
    &.pl {
    }
    &.pm {
    }
    &.op {
    }
  }
}

.box-shadow {
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);
  // animation: livelyShadow 4s alternate ease-in-out infinite;
}

@keyframes livelyShadow {
  0% {
    box-shadow: 0 0px 0px 0 rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0px 24px 0 rgba(255, 255, 255, 0.2);
  }
}

/* @media screen and (min-width: 640px ){

  .box {
    width:640px;
    height: 960px;
  }
  
} */

@media screen and (max-width: 400px) {
  #viewport #index .title {
    visibility: hidden;
    font-size: 1.8rem;
    margin: 10px 0px;
  }

  #viewport #index .slogen {
    visibility: hidden;
    font-size: 16px;
    margin: 20px 0px;
    padding-bottom: 20px;
    border-bottom: none;
  }

  #viewport #index .startBtn {
    width: 27.43%;
    height: 15.86%;
    font-size: 14px;
    bottom: 10vh;
    border-radius: 22px;
  }
}
</style>
