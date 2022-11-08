import Vue from 'vue';

export default {
    install: (vue) => {
        vue.prototype.$eventBus = new Vue();
    },
};