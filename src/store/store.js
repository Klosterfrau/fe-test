import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cats: {},
        catList: [],
        catDesc: '',
        catVote: 0
    },
    mutations: {
        addCats(state, cats) {
            if (!cats) {
                return;
            }
            cats.forEach(cat => {
                if (state.catList.indexOf(cat.id) === -1) {
                    state.catList.push(cat.id);
                }
                Vue.set(state.cats, cat.id, cat);
            });
        },
        setCatDesc(state, id) {
            state.catDesc = mockCats[id].desc;
        },
        incrementStateCats(state, id) {
            state.cats[id].votes++;
        },
        decrementCatVoteStateCats(state, id) {
            if (state.cats[id].votes > 0) {
                state.cats[id].votes--;
            }
        },
    },
    getters: {
        getCats(state) {
            return state.catList.map(catId => state.cats[catId]);
        },
        getCatDesc: state => state.catDesc,
        getCatVote: state => state.catVote,
        getCatVoteFromId(id) {
            return $state.cats[id].votes;
        },
    }
});

const mockCats = [];
for (let i = 0; i < 20; i++) {
    mockCats.push({
        id: i,
        name: "Kitty " + i,
        desc: "Nice Kitty " + i,
        votes: 0
    });
}

store.commit("addCats", mockCats);
store.commit("setCatDesc", 0);
store.commit("incrementStateCats", 0);

export default store;

console.log(store.state.cats[0].votes);