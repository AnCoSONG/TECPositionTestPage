<template>
  <div class="home">
    <div id="viewport">
      <VPQBox class="cur" :template="questions[index]" />
      <VPQBox class="next" :template="questions[index+1]" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import QBox from "@/components/QBox.vue";
import VPQBox from '@/components/VPQBox.vue';
import { questions } from "../utils";
export default {
  name: "Home",
  components: {
    VPQBox
  },
  data() {
    return {
      hello: "123",
      questions: questions,
      index: 0
    };
  },
  computed: {
    loadDone() {
      return this.$store.state.loadDone;
    },
    points() {
      return this.$store.state.points;
    }
  },
  created() {
    console.log("created");
  },

  mounted() {
    console.log("mounted");

    //* 首屏展示逻辑
    // let interval = setInterval(() => {
    //   // 检查
    //   if (window.loadDone && !this.loadDone) {
    //     window.$("#box").css("visibility", "visible");
    //     animateCSS("#box", ["bounceInUp",'fast']);
    //     this.$store.commit("loaded");
    //     clearInterval(interval);
    //   }
    // }, 100);

    // if (this.loadDone) {
    //   window.$("#box").css("visibility", "visible");
    //   animateCSS("#box", ["bounceInUp",'fast']);
    // }
  }
};
</script>

<style lang="scss" scoped>
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
  width:320px;
  height: 480px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,1);
  overflow: hidden;
  
  .curBox {
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
  }

  div {
    position: absolute;
    width:100%;
    height: 100%;
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 1);
  visibility: hidden;
  color: white;
}

/* @media screen and (min-width: 640px ){

  .box {
    width:640px;
    height: 960px;
  }
  
} */

@media screen and (max-width:320px){
  #viewport {
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 1);

  }
}
</style>
