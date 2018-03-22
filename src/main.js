import Vue from "vue";
import FeTest from "./FeTest.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(FeTest)
}).$mount("#app");
