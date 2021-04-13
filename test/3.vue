<template>
  <div>
    <demo4></demo4>
    <demo-more></demo-more>
    <button @click='doUpEmitter'>upEmitter</button>
    <button @click='doDownEmitter'>downEmitter</button>
  </div>
</template>
<script>
import demo4 from "./4.vue";
import demo4_1 from "./4-1.vue";
export default {
  components: {
    demo4,
    demoMore: demo4_1
  },
  created() {
    this.$on("test", data => {
      console.log("3:" + data);
    });
  },
  methods: {
    doUpEmitter() {
      this.$upEmitter("test", "upEmitter");
    },
    doDownEmitter() {
      this.$downEmitter("test", "downEmitter");
    }
  }
};
</script>
