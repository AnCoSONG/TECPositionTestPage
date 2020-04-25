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
      effect: ["A", "E"]
    },

    b: {
      text: "在南侧空旷平原降落",
      effect: ["D"]
    },
    c: {
      text: "在西侧海岸边降落",
      effect: ["B"]
    },
    d: {
      text: "在东侧居住区附近降落",
      effect: ["C"]
    }
  }
];
