
const install = function (Vue, opts = {}) {
    Vue.directive('lazyload', {
        inserted: function (el) {
            console.log('lazyload自定义指令');
        }
    });
}

export default {
    install
}