let app = new Vue({
    el: '#app',
    data: {
        list1: [
            {value: 3},
            {value: 5},
            {value: 1},
            {value: 4},
            {value: 2},
        ],
    },
    computed: {
        sortedList1: function () {
            let list = _.cloneDeep(this.list1);
            return list.sort((a, b) => a.value - b.value);
        }
    },
    methods: {
        sortList:function (list) {
            let clonedList = _.cloneDeep(list);
            return clonedList.sort((a, b) => a.value - b.value);
        }
    },
});



