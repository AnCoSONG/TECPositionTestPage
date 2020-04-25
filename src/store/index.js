import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const exchange = {
  A: "PM",
  B: "DG",
  C: "RD",
  D: "OP",
  E: "PL",
};

export default new Vuex.Store({
  state: {
    loadDone: false,
    points: {
      //*根据这个分数去得出用户最匹配的
      RD: 0, // 研发
      PM: 0, // 产品
      PL: 0, // 策划
      DG: 0, // 设计
      OP: 0, // 运营
    },
  },
  mutations: {
    loaded(state) {
      state.loadDone = true;
    },
    addPoints(state, payload) {
      if (Array.isArray(payload)) {
        payload.forEach((p) => {
          state.points[exchange[p]] += 1;
        });
      } else {
        state.points[exchange[payload]] += 1;
      }
    },
  },
  actions: {},
  modules: {},
});
