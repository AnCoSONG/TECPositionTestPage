<template>
  <div class="home">
    <!-- <div id="box">
      <h2>hello</h2>
    </div> -->
    <QBox :template="questions[index]" />
  </div>
</template>
<script>
// @ is an alias to /src
import QBox from "@/components/QBox.vue";
import { questions } from "../utils";
export default {
  name: "Home",
  components: {
    QBox,
  },
  data() {
    return {
      hello: "123",
      questions: questions,
      index: 0,
    };
  },
  computed: {
    loadDone() {
      return this.$store.state.loadDone;
    },
    points() {
      return this.$store.state.points;
    },
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
  },
};
</script>

<style scoped>
.home {
  min-width: 320px;
  background-color: #222;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
