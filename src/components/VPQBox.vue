<template>
  <div class="vpQBox" :style="{ 'background-image': 'url(' + imgUrl + ')' }">
    <div class="inner_box">
      <div class="qtext">{{ template.id + " " + template.q }}</div>
      <div class="qAnswer A" @click="done('A',template.a.effect)">
        <div style="display:inline-block;margin-right:5px;">A:</div>
        <div>
          {{ template.a.text }}
        </div>
      </div>
      <div class="qAnswer B" @click="done('B',template.b.effect)">
        <div style="display:inline-block;margin-right:5px;">B:</div>
        <div>
          {{ template.b.text }}
        </div>
      </div>
      <div class="qAnswer C" @click="done('C',template.c.effect)">
        <div style="display:inline-block;margin-right:5px;">C:</div>
        <div>
          {{ template.c.text }}
        </div>
      </div>
      <div class="qAnswer D" @click="done('D',template.d.effect)">
        <div style="display:inline-block;margin-right:5px;">D:</div>
        <div>
          {{ template.d.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {animateCSS } from '../utils'
export default {
  name: "VPQBox",
  props: {
    template: Object,
    imgUrl: String,
  },

  computed: {},
  mounted() {
    console.log("mounted");
    console.log(this.template);
  },

  methods: {
    done(answer, effect) {
      console.log(answer, effect);
      if(typeof answer === 'string'){
        this.$store.commit("pushOption",answer);
      }
      if (Array.isArray(effect)) {
        this.$store.commit("addPoints", effect);
      } else {
        console.log("Error answer effects");
      }
      animateCSS(`#Q${this.template.id} .inner_box .qAnswer.${answer}`,["pulse"],()=>{
        setTimeout(()=>{
          this.$emit("done");
        },10)
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.vpQBox {
  position: absolute;
  visibility: hidden;
  top: 0;
  // transition: all 1000ms ease-in-out;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  color: #eee;
  box-sizing: border-box;
  padding: 0px 20px;
  // text-shadow: 0 2px 4px;
  font-family: FZKTJ;
  user-select: none;
  z-index: 1000;

  .inner_box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  // .inner_box {
  //   height: 400px;
  //   width: 100%;
  // }

  .qtext {
    letter-spacing: 3px;
    text-align: left;
    margin-left: 3px;
    line-height: 2rem;
    user-select: none;
    font-size: 1.4rem;
    pointer-events: none;
    visibility: hidden;
  }

  .qAnswer {
    cursor: pointer;
    text-align: left;
    letter-spacing: 3px;
    margin-left: 3px;
    margin-top: 30px;
    line-height: 1.4rem;
    font-size: 1.2rem;
    margin-bottom: 30px;
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    &.A,
    &.B,
    &.C,
    &.D {
      pointer-events: none;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 400px) {
    .qtext {
      font-size: 20px;
      line-height: 24px;
    }

    .qAnswer {
      font-size: 17px;
      line-height: 20px;
    }
  }
}
</style>
