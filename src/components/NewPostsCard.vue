<template>
  <div>
    <div class="relative flex flex-row justify-start gap-5 cursor-pointer">
      <div class="w-1/3 h-60 cursor-pointer">
        <img :src="item.image" class="w-80 h-60 cursor-pointer" />
      </div>
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
      <div class="w-2/3 flex flex-col justify-start items-start gap-1 py-2">
        <div class="flex flex-col justify-start">
          <p class="font-semibold uppercase text-xs text-gray-500 cursor-pointer">{{ item.category }}</p>
          <h1 class="font-normal capitalize text-base text-black text-2xl cursor-pointer">
            {{ item.title }}
          </h1>
        </div>
        <p class="font-normal text-sm text-gray-500">
          {{ item.description }}
        </p>
      </div>
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