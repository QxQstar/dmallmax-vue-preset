<template>
  <div
    class="g-slider"
    :class="['g-slider_'+sliderSize]"
  >
    <div class="g-slider-inner">
      slider bar
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              // 可选值 large,small
              sliderSize:'large'
            }
        }
    }
</script>

<style scoped>

</style>
