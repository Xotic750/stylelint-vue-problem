<template>
  <div>
    <h5 v-if="title">{{ title }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="less">
</style>
