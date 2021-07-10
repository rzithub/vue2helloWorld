
import showBlog from './components/blogs/showBlog.vue';
import addBlog from './components/blogs/addBlog.vue';
import login from './components/logins/weblogin.vue';
import loginMob from './components/logins/mobilelogin.vue';
import api from './components/questionAPI.vue';
import book from './components/mainbody.vue';
import singleBlog from './components/blogs/singleBlog'


export default [
    {path:'/'},
    {path:'/add',component:addBlog},
    {path:'/api',component:api},
    {path:'/login',component:login},
    {path:'/loginMob',component:loginMob},
    {path:'/books',component:book},
    {path:'/showblog',component:showBlog},
    {path:'/showblog/:id', component:singleBlog}
]