import VueRouter from 'vue-router'

import home from './component/Home.vue'
import news from './component/News.vue'
import shoppingCart from './component/ShoppingCart.vue'
import member from './component/Member.vue'
import movieList from './component/MovieList.vue'
import movieDetail from './component/MovieDetail.vue'


var router = new VueRouter({
    routes: [
        { path: '/home', component: home },
        { path: '/news', redirect: '/news/movieList'},
        { path: '/news', component: news , children: [
            {path: '/news/movieList', component: movieList},
            {path: '/news/movieDetail/:id',component: movieDetail}
        ]},
        { path: '/shoppingCart', component: shoppingCart },
        { path: '/member', component: member }
    ],
    linkActiveClass: 'm-active'
})

export default router;