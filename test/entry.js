import Vue from 'vue';

// 引入启动界面
import App from './App.vue';

// 引入基础样式
import '@hai2007/style/normalize.css';

// 引入事件插件
import eventEmitter from '../libs/index';
Vue.use(eventEmitter);

//根对象
window.vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启动vue
    render: function (createElement) {
        return createElement(App);
    }
});
