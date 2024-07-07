<template>
  <NuxtSignaturePad
    ref="signature"
    height="400px"
    width="950px"
    :max-width="options.maxWidth"
    :min-width="options.minWidth"
    :options="{
      penColor: options.penColor, backgroundColor: options.backgroundColor,
    }"
  />
</template>

<script setup>
const options = ref({
  penColor: 'rgb(0,0,0)',
  backgroundColor: 'rgb(255, 255, 255)',
  maxWidth: 2,
  minWidth: 2,
})
const signature = ref()
</script>
