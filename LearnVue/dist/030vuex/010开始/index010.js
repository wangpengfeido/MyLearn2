'use strict';

/**
 * Created by dell on 2017/8/27.
 */

var store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        addCount: function addCount(state) {
            state.count++;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: function data() {
        return {};
    },

    computed: {
        count: function count() {
            return store.state.count;
        }
    },
    methods: {
        addCount: function addCount() {
            store.commit('addCount');
        }
    }

});
//# sourceMappingURL=index010.js.map