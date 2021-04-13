<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$on("test", data => {
      console.log("5:" + data);
    });
  }
};
</script>
