<template>
  <div>
    <demo5></demo5>
  </div>
</template>
<script>
import demo5 from "./5.vue";
export default {
  components: {
    demo5
  },
  created() {
    this.$on("test", data => {
      console.log("4:" + data);
    });
  }
};
</script>
