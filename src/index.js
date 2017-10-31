
import Lazyload from './directives/lazyload.js';

import Loading from './components/Loading/index.vue';

const components = [];
const install = function (Vue, opts = {}) {
    Vue.use(Lazyload);
}

export default {
    install
}


// console.log(11);