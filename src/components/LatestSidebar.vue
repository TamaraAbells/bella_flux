<template>
  <div class="relative flex flex-col justify-between items-center gap-2">
    <div class="flex flex-col justify-center items-center gap-2">
      <div class="inline-flex justify-center items-center w-full">
        <div class="flex flex-row justify-between items-center gap-2">
          <hr class="w-12 h-1.5 bg-orange-500 border-0">
          <h1 class="text-2xl uppercase font-black">Latest</h1>
          <hr class="w-12 h-1.5 bg-orange-500 border-0">
        </div>
      </div>
      <div>
        <div v-for="item in items" :key="item.id" class="py-2">
          <p class="text-sm text-black leading-5 tracking-5 pt-5 border-t cursor-pointer hover:text-red-500 hover:underline">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-44 flex justify-end items-end cursor-pointer hover:bg-orange-500 hover:rounded-md">
      <div class="flex flex-row justify-start items-center gap-2 text-orange-500 hover:text-white hover:px-2 hover:py-1">
        <p class="uppercase text-sm leading-5">More Latest Stories</p>
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="h-5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>