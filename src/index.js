
import Menu from './components/Menu/menu.vue';


const components = [Menu];
const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install
}