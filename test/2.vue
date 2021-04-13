<template>
  <div>
    <demo3></demo3>
  </div>
</template>
<script>
import demo3 from "./3.vue";
export default {
  components: {
    demo3
  },
  created() {
    this.$on("test", data => {
      console.log("2:" + data);
    });
  }
};
</script>
