import ComponentOne from './component-one';

export default {
    template: `<div>
                    <div>this is component two（level {{levelData}}）</div>
                    <component-one
                        v-if="levelData<6"
                        :level="levelData+1"></component-one>
                </div>`,
    props: ['level'],
    data: function () {
        return {
            levelData: this.level || 0,
        }
    },
    components: {
        ComponentOne,
    }
};



