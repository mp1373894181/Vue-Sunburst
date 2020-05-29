import VueRouter from 'vue-router'

import home from './component/Home.vue'
import news from './component/News.vue'
import shoppingCart from './component/ShoppingCart.vue'
import member from './component/Member.vue'


var router = new VueRouter({
    routes: [
        { path: '/home', component: home },
        { path: '/news', component: news },
        { path: '/shoppingCart', component: shoppingCart },
        { path: '/member', component: member }
    ],
    linkActiveClass: 'm-active'
})

export default router;