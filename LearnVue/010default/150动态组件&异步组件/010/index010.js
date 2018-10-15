Vue.component('component-one', {
    template: `<div>
                    this is component one
                    <input>
                </div>`,
});

Vue.component('component-two', {
    template: `<div>
                    this is compoennt two
                    <input>
                </div>`,
});


let app = new Vue({
    el: '#app',
    data: {
        currentComponent: 'component-one',
    },
});



