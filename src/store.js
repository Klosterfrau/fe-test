import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
 Sample Cat Object
{
  id: 1,
  name: 'Kitty 1',
  desc: 'Nice Kitty 1',
  votes: 0
}
*/

const store = new Vuex.Store({
  state: {
    cats: {},
    catList: []
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
    }
  },
  getters: {
    getCats(state) {
      return state.catList.map(catId => state.cats[catId]);
    }
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

export default store;
