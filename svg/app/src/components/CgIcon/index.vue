<template>
  <svg :class="svgClass">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "cg-icon",
  props: {
    name: {
      type: String,
      required: true,
    },
    svgClass: {
      type: String,
    },
  },
};
</script>
