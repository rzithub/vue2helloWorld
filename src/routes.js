
import showBlog from './components/blogs/showBlog.vue';
import addBlog from './components/blogs/addBlog.vue';
import login from './components/logins/weblogin.vue';
import loginMob from './components/logins/mobilelogin.vue';
import api from './components/questionAPI.vue';
import book from './components/mainbody.vue';
import singleBlog from './components/blogs/singleBlog'
import stores from './components/store/stores'
import singleStore from './components/store/singleStore.vue'
import session from './components/store/sessions.vue'
import singleSession from './components/store/singleSession.vue'
import Auth from './components/pages/Auth.vue'


export default [
    {path:'/'},
    {path:'/add',component:addBlog},
    {path:'/api',component:api},
    {path:'/login',component:login},
    {path:'/loginMob',component:loginMob},
    {path:'/books',component:book},
    {path:'/showblog',component:showBlog},
    {path:'/showblog/:id', component:singleBlog},
    {path:'/stores',name:'stores',component:stores},
    {path:'/stores/:id',component:singleStore},
    {path:'/session',name:'session', component:session},
    {path:'/session/:id', component:singleSession},
    {path:'/auth',name:'auth',component:Auth}
]