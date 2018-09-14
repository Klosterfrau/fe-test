import Vue from "vue";
import FeTest from "./components/FeTest.vue";
import router from "./router";
import store from "./store/store";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueGoodTable from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'


Vue.use(Vuetify);
Vue.use(VueGoodTable);


Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(FeTest)
});
