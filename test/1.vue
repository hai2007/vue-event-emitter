<template>
  <div>
    <demo2></demo2>
  </div>
</template>
<script>
import demo2 from "./2.vue";
export default {
  components: {
    demo2
  },
  created() {
    this.$on("test", data => {
      console.log("1:" + data);
    });
  }
};
</script>
