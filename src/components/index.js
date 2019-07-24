import Vue from "vue";
import identicon from "./identicon.vue";

const Components = {
    identicon
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;