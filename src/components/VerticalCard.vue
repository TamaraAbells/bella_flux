<template>
  <div class="w-80 flex flex-col justify-center align-center gap-2 bg-white hover:text-red-500">
    <div class="relative cursor-pointer">
      <img class="w-80 h-80 hover:scale-110 transition duration-300 ease-in-out" :src="item.image" />
      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
      <div v-if="tag" class="absolute -bottom-3 left-1/3 hover:text-red-500 cursor-pointer">
        <div class="bg-red-500 text-black px-3 py-1 text-xs font-bold uppercase cursor-pointer hover:text-red-500">
          {{ item.category }}
        </div>
      </div>
    </div>
    <div class="my-7">
      <p class="font-semibold text-base capitalize leading-5 text-center">
        Watch Episode 11 of Neptune3’s “Best Friends in the World: Senior Year”
      </p>
      <template v-if="link">
        <div class="flex justify-center items-center gap-2 mt-5">
          <p class="text-black text-sm font-bold uppercase">TAKE ME THERE</p>
          <font-awesome-icon icon="fa-solid fa-caret-right" class="h-5 text-red-500" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    link: {
      type: Boolean,
      default: false
    },
     tag: {
      type: Boolean,
      default: false
    }
  }
}
</script>