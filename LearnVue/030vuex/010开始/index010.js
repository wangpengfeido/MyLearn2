/**
 * Created by dell on 2017/8/27.
 */

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        addCount(state){
            state.count++;
        }
    }
});

let app = new Vue({
    el: '#app',
    data(){
        return {};
    },
    computed: {
        count(){
            return store.state.count;
        }
    },
    methods: {
        addCount(){
            store.commit('addCount');
        }
    },

});


