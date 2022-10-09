<template>
  <div class="relative w-48 flex flex-col justify-center align-center gap-2">
    <img class="w-48 h-48 z-10 mt-10 relative cursor-pointer" :src="item.image" />
    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
    <div class="image_placement z-0 flex justify-between items-end -ml-4">
      <div class="w-20 h-20 bg-red-600" />
      <p class="uppercase font-bold text-base flex self-end p-0 -mb-1">{{ item.category }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.image_placement {
  position: relative;
  bottom: 70px;
}
</style>