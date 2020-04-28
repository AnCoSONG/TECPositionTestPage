<template>
  <div class="qbox">
    <h4 class="qtext">{{ template.q }}</h4>
    <h5 class="qAnswer" @click="done(template.a.effect)">
      A : {{ template.a.text }}
    </h5>
    <h5 class="qAnswer" @click="done(template.b.effect)">
      B : {{ template.b.text }}
    </h5>
    <h5 class="qAnswer" @click="done(template.c.effect)">
      C : {{ template.c.text }}
    </h5>
    <h5 class="qAnswer" @click="done(template.d.effect)">
      D : {{ template.d.text }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "QBox",
  props: {
    template: Object,
  },

  computed: {},
  mounted() {
    console.log("mounted");
    console.log(this.template);
  },

  methods: {
    done(answer) {
      console.log(answer);
      if (Array.isArray(answer)) {
        this.$store.commit("addPoints", answer);
      } else {
        console.log("Error answer effects");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: FZKTJ;
  src: url("../assets/fonts/fzktj.ttf");
}
.qbox {
  width: 320px;
  height: 480px;
  background-color: white;
  // background-image: url("../assets/prog/h5bg.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 1);
  color: #ddd;
  box-sizing: border-box;
  padding: 0px 20px;
  text-shadow: 0 0px 1px;
  font-family: FZKTJ;

  .qtext {
    margin-top: 120px;
    letter-spacing: 3px;
    text-align: left;
    margin-left: 3px;
    line-height: 20px;
  }

  .qAnswer {
    cursor: pointer;
    text-align: left;
    letter-spacing: 3px;
    margin-left: 3px;
  }
}
</style>
