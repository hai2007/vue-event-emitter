# vue-event-emitter
为vue2.js设计的事件传播系列方法。

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=vue-event-emitter"><img src="https://img.shields.io/npm/dm/vue-event-emitter.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=vue-event-emitter"><img src="https://packagephobia.now.sh/badge?p=vue-event-emitter" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/vue-event-emitter"><img src="https://data.jsdelivr.com/v1/package/npm/vue-event-emitter/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/vue-event-emitter"><img src="https://img.shields.io/npm/v/vue-event-emitter.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/vue-event-emitter/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vue-event-emitter.svg" alt="License"></a>
  <a href="https://github.com/hai2007/vue-event-emitter" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/vue-event-emitter?style=social">
    </a>
</p>

## 如何使用

首先，在你的```vue```项目中进行安装：

```bash
npm install --save vue-event-emitter
```

安装完成以后引入并注册：

```js
import eventEmitter from 'vue-event-emitter';

// 安装
Vue.use(eventEmitter);
```

然后，我们就可以在项目中使用了：

```js
// 向上发射事件
this.$upEmitter(eventName:string,param:any);

// 向下发射事件
this.$downEmitter(eventName:string,param:any);
```

如果某个地方希望接受上面发射的事件，直接通过```$on```注册即可：

```js
this.$on(eventName:string,param:any=>{
    // todo
});
```

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/vue-event-emitter/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
