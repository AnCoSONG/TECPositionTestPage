<template>
  <div class="home">
    <div class="bg" :style="{ 'background-color': bgColor }"></div>
    <div
      id="viewport"
      :style="{ width: vpWidth + 'px', height: vpHeight + 'px' }"
    >
      <div id="index">
        <img class="title" src="../assets/indexMainTitle.png" />
        <img class="slogen" src="../assets/indexSubTitle.png" />
        <div class="startBtn" @click="nextProcess">
          <div class="fluentBtn"></div>
        </div>
      </div>
      <VPQBox
        id="Q1"
        :template="questions[0]"
        :imgUrl="quesBG[0]"
        @done="nextProcess"
      />
      <VPQBox
        id="Q2"
        :template="questions[1]"
        :imgUrl="quesBG[1]"
        @done="nextProcess"
      />
      <VPQBox
        id="Q3"
        :template="questions[2]"
        :imgUrl="quesBG[2]"
        @done="nextProcess"
      />
      <VPQBox
        id="Q4"
        :template="questions[3]"
        :imgUrl="quesBG[3]"
        @done="nextProcess"
      />
      <VPQBox
        id="Q5"
        :template="questions[4]"
        :imgUrl="quesBG[4]"
        @done="nextProcess"
      />
      <VPQBox
        id="Q6"
        :template="questions[5]"
        :imgUrl="quesBG[5]"
        @done="nextProcess"
      />
      <VPQBox
        id="Q7"
        :template="questions[6]"
        :imgUrl="quesBG[6]"
        @done="nextProcess"
      />
      <div id="result">
        <h1>{{ getTestResult() }}</h1>
        <img
          src="../assets/prog/dg.jpg"
          alt=""
          class="result_img"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import QBox from "@/components/QBox.vue";
import VPQBox from "@/components/VPQBox.vue";
import { animateCSS, questions, Canvas2Image } from "../utils";
import html2canvas from "html2canvas";
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
      quesBG: [
        require("../assets/prog/q1.jpg"),
        require("../assets/prog/q2.jpg"),
        require("../assets/prog/q3.jpg"),
        require("../assets/prog/q4.jpg"),
        require("../assets/prog/q5.jpg"),
        require("../assets/prog/q6.jpg"),
        require("../assets/prog/q7.jpg"),
      ],
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
  },
  created() {
    console.log("created");
    //*检测设备宽度 高度 获取比例 -> 动态计算viewport大小
    const height = window.innerHeight;
    const width = window.innerWidth;
    const ratio = width / height;
    console.log(ratio);
    if (ratio < 2 / 3) {
      this.vpWidth = width;
      this.vpHeight = Math.floor(this.vpWidth * 1.5);
    } else {
      this.vpHeight = height;
      this.vpWidth = Math.floor((this.vpHeight * 2) / 3);
    }
  },

  mounted() {
    console.log("mounted");

    //* 首屏展示逻辑
    var interval = setInterval(() => {
      // 检查
      console.log(this.curProc);
      if (window.loadDone && !(this.curProc === "index")) {
        window.$("#index").css("visibility", "visible");
        animateCSS("#index", ["zoomIn"], () => {
          setTimeout(() => {
            document.querySelector("#viewport").classList.add("box-shadow");
            window.$(".title").css("visibility", "visible");
            animateCSS(".title", ["bounceInDown"], () => {
              window.$(".slogen").css("visibility", "visible");
              animateCSS(".slogen", ["bounceInDown"], () => {
                window.$(".startBtn").css("visibility", "visible");
                // document.querySelector(".startBtn").classList.add("fluent");
                animateCSS(".startBtn", ["fadeIn"]);
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
    // if (this.curProc === "index" || window.loadDone) {
    //   this.$store.commit("setProcess", "index");
    //   window.clearInterval(interval);
    //   window.$("#index").css("visibility", "visible");
    //   animateCSS("#index", ["slideInUp", "fast"], () => {
    //     setTimeout(() => {
    //       // document.querySelector("#viewport").classList.add("box-shadow");
    //       window.$(".title").css("visibility", "visible");
    //       animateCSS(".title", ["bounceInDown"], () => {
    //         window.$(".slogen").css("visibility", "visible");
    //         animateCSS(".slogen", ["flipInX"], () => {
    //           window.$(".startBtn").css("visibility", "visible");
    //           animateCSS(".startBtn", ["bounceIn"], () => {
    //             document.querySelector(".startBtn").classList.add("fluent");
    //           });
    //         });
    //       });
    //     }, 50);
    //   });
    // }
  },

  methods: {
    nextProcess() {
      this.$store.commit("nextProcess");
      console.log("current process", this.curProc);
      switch (this.curProc) {
        case "loading":
        case "index":
          break;
        case "Q1":
          console.log("in Q1");
          animateCSS("#index", ["bounceOutUp"], () => {
            window.$("#index").css("visibility", "hidden");
            window.$("#index .title").css("visibility", "hidden");
            window.$("#index .slogen").css("visibility", "hidden");
            window.$("#index .startBtn").css("visibility", "hidden");
            window.$("#Q1").css("visibility", "visible");
            this.bgColor = "#123";
            animateCSS("#Q1", ["fadeIn"]);
          });
          break;
        case "Q2":
          animateCSS("#Q1", ["fadeOut"], () => {
            window.$("#Q1").css("visibility", "hidden");
          });
          setTimeout(() => {
            window.$("#Q2").css("visibility", "visible");
            this.bgColor = "#223";
            animateCSS("#Q2", ["fadeIn"]);
          }, 200);
          break;
        case "Q3":
          animateCSS("#Q2", ["fadeOut"], () => {
            window.$("#Q2").css("visibility", "hidden");
          });
          setTimeout(() => {
            window.$("#Q3").css("visibility", "visible");
            this.bgColor = "#234";
            animateCSS("#Q3", ["fadeIn"]);
          }, 200);
          break;
        case "Q4":
          animateCSS("#Q3", ["fadeOut"], () => {
            window.$("#Q3").css("visibility", "hidden");
          });
          setTimeout(() => {
            window.$("#Q4").css("visibility", "visible");
            this.bgColor = "#234";
            animateCSS("#Q4", ["fadeIn"]);
          }, 200);
          break;
        case "Q5":
          animateCSS("#Q4", ["fadeOut"], () => {
            window.$("#Q4").css("visibility", "hidden");
          });
          setTimeout(() => {
            window.$("#Q5").css("visibility", "visible");
            this.bgColor = "#345";
            animateCSS("#Q5", ["fadeIn"]);
          }, 200);
          break;
        case "Q6":
          animateCSS("#Q5", ["fadeOut"], () => {
            window.$("#Q5").css("visibility", "hidden");
          });
          setTimeout(() => {
            window.$("#Q6").css("visibility", "visible");
            this.bgColor = "#357";
            animateCSS("#Q6", ["fadeIn"]);
          }, 200);
          break;
        case "Q7":
          animateCSS("#Q6", ["fadeOut"], () => {
            window.$("#Q6").css("visibility", "hidden");
          });
          setTimeout(() => {
            window.$("#Q7").css("visibility", "visible");
            animateCSS("#Q7", ["fadeIn"]);
          }, 200);
          break;
        case "displaying":
          console.log("in displaying");
          animateCSS("#Q7", ["fadeOut"], () => {
            window.$("#Q7").css("visibility", "hidden");
          });
          setTimeout(() => {
            window.$("#result").css("visibility", "visible");
            animateCSS("#result", ["flipInY"], () => {
              //* 展示之后把result转换成图片，新加一个img标签然后覆盖在顶层，这样微信保存的图片就是没问题的了！！！
              //TODO 已完成图片覆盖!
              console.log("开始转换");
              html2canvas(document.getElementById("result")).then(
                (canvasObj) => {
                  var context = canvasObj.getContext("2d");
                  //!【重要】关闭抗锯齿
                  context.mozImageSmoothingEnabled = false;
                  context.webkitImageSmoothingEnabled = false;
                  context.msImageSmoothingEnabled = false;
                  context.imageSmoothingEnabled = false;
                  const img = Canvas2Image.convertToImage(
                    canvasObj,
                    this.vpWidth * 2,
                    this.vpHeight * 2,
                    "png"
                  );
                  img.style.cssText =
                    "position: absolute;top: 0;left: 0;width: 100%;opacity: 0;z-index: 20;";
                  document.getElementById("result").appendChild(img);
                }
              );
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
      return Object.keys(this.points)
        .filter((e) => this.points[e] === maxVal)
        .toString()
        .split(",")[0];
    },
  },
};
</script>

<style lang="scss">
@import url("../assets/fonts/fzktj-embed.css");
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
  // background-image: url("../assets/prog/h5bg.jpg");
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
    background-image: url("../assets/prog/indexpro.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    visibility: hidden;
    color: white;

    z-index: 1;

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
      background-image: url("../assets/indexbtn_big.png");
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
    // background-image: url("../assets/prog/dg.jpg");
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

/* 首box展示 */
#first_box {
  width: 320px;
  height: 480px;
  background-color: white;
  background-image: url("../assets/prog/h5bg.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 1);
  visibility: hidden;
  color: white;
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
