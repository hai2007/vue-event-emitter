<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$on("test", data => {
      console.log("4-1:" + data);
    });
  }
};
</script>
