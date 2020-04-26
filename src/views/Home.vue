<template>
  <div class="home">
    <div
      id="viewport"
      :style="{ width: vpWidth + 'px', height: vpHeight + 'px' }"
    >
      <div id="index">
        <div class="title">腾讯俱乐部</div>
        <div class="slogen">你最适合8号星球上的什么岗位？</div>
        <div class="startBtn" @click="nextProcess">开始测试</div>
      </div>
      <VPQBox id="Q1" :template="questions[0]" @done="nextProcess"/>
      <VPQBox id="Q2" :template="questions[1]" @done="nextProcess"/>
      <!-- <VPQBox class="next_2" :template="questions[2]" />
      <VPQBox class="next_3" :template="questions[3]" />
      <VPQBox class="next_4" :template="questions[4]" />
      <VPQBox class="next_5" :template="questions[5]" />
      <VPQBox class="next_6" :template="questions[6]" /> -->
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import QBox from "@/components/QBox.vue";
import VPQBox from "@/components/VPQBox.vue";
import { animateCSS, questions } from "../utils";
export default {
  name: "Home",
  components: {
    VPQBox,
  },
  data() {
    return {
      hello: "123",
      questions: questions,
      index: 0,
      vpWidth: 320,
      vpHeight: 480,
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
      this.vpWidth = width - 30;
      this.vpHeight = Math.floor(this.vpWidth * 1.5);
    } else {
      this.vpHeight = height - 30;
      this.vpWidth = Math.floor((this.vpHeight * 2) / 3);
    }
  },

  mounted() {
    console.log("mounted");

    //* 首屏展示逻辑
    var interval = setInterval(() => {
      // 检查
      console.log(this.curProc)
      if (window.loadDone && !(this.curProc === "index")) {
        window.$("#index").css("visibility", "visible");
        animateCSS("#index", ["slideInUp", "fast"], () => {
          setTimeout(() => {
            document.querySelector("#viewport").classList.add("box-shadow");
            window.$(".title").css("visibility", "visible");
            animateCSS(".title", ["bounceInDown"], () => {
              window.$(".slogen").css("visibility", "visible");
              animateCSS(".slogen", ["flipInX"], () => {
                window.$(".startBtn").css("visibility", "visible");
                animateCSS(".startBtn", ["bounceIn"], () => {
                  document.querySelector(".startBtn").classList.add("fluent");
                });
              });
            });
          }, 50);
        });
        this.nextProcess();
        window.clearInterval(interval);
      }
    }, 50);
    console.log(this.curProc)
    if (this.curProc === "index") {
      window.clearInterval(interval);
      window.$("#index").css("visibility", "visible");
      animateCSS("#index", ["slideInUp", "fast"], () => {
        setTimeout(() => {
          document.querySelector("#viewport").classList.add("box-shadow");
          window.$(".title").css("visibility", "visible");
          animateCSS(".title", ["bounceInDown"], () => {
            window.$(".slogen").css("visibility", "visible");
            animateCSS(".slogen", ["flipInX"], () => {
              window.$(".startBtn").css("visibility", "visible");
              animateCSS(".startBtn", ["bounceIn"], () => {
                document.querySelector(".startBtn").classList.add("fluent");
              });
            });
          });
        }, 50);
      });
    }else if(window.loadDone){
      window.clearInterval(interval)
      this.$store.commit("setProcess","index");
    }
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
          console.log("in Q1")
          window.$('#Q1').addClass("cur").css('top',"0");
          break;
        case "Q2":
          window.$("#Q1").removeClass("cur");
          window.$("#Q2").addClass("cur").css('top',"0");
          break;
        
        case "displaying":
          console.log("in displaying")
          break;
        default:
          console.error("words spell error", this.curProc);
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: FZKTJ;
  src: url("../assets/fonts/fzktj.ttf");
}
div{
  user-select: none;
  outline:none; //去掉点击效果
}
.home {
  min-width: 320px;
  background-color: #222;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#viewport {
  width: 320px; //initial width
  height: 480px; //initial height
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
  font-family: FZKTJ;

  .cur {
    z-index: 1100;
  }

  #index {
    background-image: url("../assets/prog/h5bg.jpg");
    background-image: url("../assets/prog/h5bg.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    visibility: hidden;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .title {
      visibility: hidden;
      font-size: 3rem;
      margin: 20px 0px;
    }

    .slogen {
      visibility: hidden;
      font-size: 1.3rem;
      margin: 20px 0px;
      padding-bottom: 20px;
      border-bottom: 2px dashed white;
    }

    .startBtn {
      border-radius: 30px;
      width: 200px;
      height: 60px;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #0ea9f4);
      background-size: 400%;
      z-index: 1;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: -100px;
      font-size: 1.3rem;
      cursor: pointer;
      visibility: hidden;
    }
    .startBtn::before {
      content: "";
      position: absolute;
      left: -5px;
      right: -5px;
      top: -5px;
      bottom: -5px;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #0ea9f4);
      background-size: 400%;
      filter: blur(20px);
      border-radius: 30px;
      z-index: -1;
      // visibility: hidden;
    }
    .startBtn.fluent {
      animation: fluent 8s infinite;
    }

    @keyframes fluent {
      100%{
        background-position: -400% 0;
      }
    }
  }

  .curBox {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
  }
}

.box-shadow {
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 1);
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
  #viewport {
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 1);
    // width: 100vw;
    // height: 150vw;
  }
}
</style>
