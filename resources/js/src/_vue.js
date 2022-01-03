import Vue from "vue";
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
import {Notyf} from "notyf";
import { BootstrapVue } from 'bootstrap-vue'


import plug from "./_plugin";
import VueTablerIcons from "vue-tabler-icons";
import VueSweetalert2 from "vue-sweetalert2";
import VueMeta from "vue-meta";
import VueTextareaAutosize from 'vue-textarea-autosize'
import VueMoment from 'vue-moment'
import * as moment from 'moment';
import 'moment/locale/tr'

//region Vue plugins initialize
InertiaProgress.init()
Vue.prototype.$notyf = new Notyf({
    position: {x:'right',y:'bottom'},
    duration: 3500,
    types: [
        {
            type: 'info',
            background: '#4299e1',
            icon: {
                className: 'notyf__icon--info',
                tagName: 'i',
                text: ''
            }
        },
        {
            type: 'warning',
            background: 'orange',
            icon: {
                className: 'notyf__icon--warning',
                tagName: 'i',
                text: ''
            }
        },
    ]
})

Vue.use(VueTablerIcons)
Vue.use(VueSweetalert2,{confirmButtonText:'Tamam',cancelButtonText:'Vazgeç'});
Vue.use(VueMeta)
Vue.use(VueTextareaAutosize)
Vue.use(BootstrapVue)

Vue.use(VueMoment, {
    moment
});

//end plugin
Vue.use(plug)
//endregion

createInertiaApp({
    resolve: name => require(`../Pages/${name}`),
    setup({ el, app, props }) {
        new Vue({
            metaInfo: {
                titleTemplate: title => (title ? `${title} - Quattro` : 'Quattro'),
                htmlAttrs: {
                    lang: 'tr',
                    amp: false
                }
            },
            render: h => h(app, props),
        }).$mount(el)
    },
})
