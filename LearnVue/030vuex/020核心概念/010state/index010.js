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

const componentOne = {
    data(){
        return {};
    },
    computed: {
        count(){
            return store.state.count;
        }
    },
    template: '<div @click="addCount">count:{{count}}</div>',
    methods: {
        addCount(){
            //在计算属性中取得状态
            store.commit('addCount');
        }
    },
};

const componentTwo = {
    data(){
        return {};
    },
    store,       //将store注入组件及子组件
    computed: {
        count(){
            //通过注入来访问store
            return this.$store.state.count;
        }
    },
    template: '<div @click="addCount">count:{{count}}</div>',
    methods: {
        addCount(){
            this.$store.commit('addCount');
        }
    },
};

const componentThree = {
    data(){
        return {
            a: 'aaa'
        };
    },
    store,
    //使用Vuex.mapState()辅助函数
    computed: Vuex.mapState({
        count: state => state.count,
        countAlias: 'count',          //使用字符串，相当于 state => state.count
        countPlusLocalState(state){
            return state.count + this.a;       //使用this时必须使用常规函数
        }
    }),
    //当计算属性名与state属性名相同时，可以使用字符串数组
    // computed: Vuex.mapState(['count']),
    //当mapState()函数与其他计算属性混用时，使用对象展开运算符
    // computed:{
    //     ...Vuex.mapState(['count']),
    //     localComputed:()=>'this is local computed',
    // },
    template: '<div @click="addCount">count:{{count}}<br/>' +
    'countAlias:{{countAlias}}<br/>' +
    'countPlusLocalState:{{countPlusLocalState}}<br/>' +
    'localComputed:{{localComputed}}</div>',
    methods: {
        addCount(){
            this.$store.commit('addCount');
        }
    },
};

let app = new Vue({
    el: '#app',
    components: {
        componentOne,
        componentTwo,
        componentThree
    }
});


