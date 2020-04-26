<template>
  <div class="vpQBox">
    <div class="qtext">{{ template.id + " " + template.q }}</div>
    <div class="qAnswer" @click="done(template.a.effect)">
      A : {{ template.a.text }}
    </div>
    <div class="qAnswer" @click="done(template.b.effect)">
      B : {{ template.b.text }}
    </div>
    <div class="qAnswer" @click="done(template.c.effect)">
      C : {{ template.c.text }}
    </div>
    <div class="qAnswer" @click="done(template.d.effect)">
      D : {{ template.d.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VPQBox",
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
      this.$emit("done",'1');
    },
  },
};
</script>

<style lang="scss" scoped>
.vpQBox {
  position: absolute;
  top:101%;
  transition: all 1000ms ease-in-out;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url("../assets/prog/h5bg.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  color: #eee;
  box-sizing: border-box;
  padding: 0px 20px;
  // text-shadow: 0 2px 4px;
  font-family: FZKTJ;
  user-select: none;
  z-index:1000;

  // .inner_box {
  //   height: 400px;
  //   width: 100%;
  // }

  .qtext {
    margin-top: 120px;
    letter-spacing: 3px;
    text-align: left;
    margin-left: 3px;
    line-height: 20px;
    user-select: none;
  }

  .qAnswer {
    cursor: pointer;
    text-align: left;
    letter-spacing: 3px;
    margin-left: 3px;
    user-select: none;
  }
}
</style>
