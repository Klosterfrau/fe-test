import Vue from "vue";
import FeTest from "./components/FeTest.vue";
import Workplace from "./components/Workplace.vue";
import router from "./router";
import store from "./store/store";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueGoodTable from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'


Vue.use(Vuetify, {
    iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.use(VueGoodTable);


Vue.config.productionTip = false;

var app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(FeTest),
    computed: {
        catVote() {
            return store.state.catVote
        }
    },
    methods: {
        incrementCatVote: function () {
            store.commit('incrementCatVote')
        },
        decrementCatVote: function () {
            store.commit('decrementCatVote')
        }
    },
});
