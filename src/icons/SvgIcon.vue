<template>
    <svg class="svg-icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String, 
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: #F56C6C;
  padding-right: 0.5em;
}
</style>