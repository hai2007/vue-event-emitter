
function broadcast(eventName, param) {
    var children = this.$children, i, child;
    for (i = 0; i < children.length; i++) {
        child = children[i];

        // 触发孩子结点事件
        child.$emit.call(child, eventName, param);

        // 继续向下传播
        broadcast.call(child, eventName, param);
    }
}

export default {

    install: function (Vue) {

        // 向上发射事件
        Vue.prototype.$upEmitter = function (eventName, param) {
            var parent = this.$parent || this.$root;
            while (parent) {

                // 触发父亲结点事件
                parent.$emit.call(parent, eventName, param);

                // 继续向上传播
                parent = parent.$parent;
            }
        };

        // 向下发射事件
        Vue.prototype.$downEmitter = function (eventName, param) {
            broadcast.call(this, eventName, param);
        };

    }
};
