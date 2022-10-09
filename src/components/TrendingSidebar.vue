<template>
  <div class="relative flex flex-col justify-center items-center gap-2">
    <div class="inline-flex justify-center items-center w-full">
      <div class="flex flex-row justify-between items-center gap-2">
        <hr class="w-12 h-1.5 bg-orange-500 border-0">
        <div class="flex justify-center items-center gap-3">
          <font-awesome-icon icon="fa-solid fa-arrow-trend-up" class="h-6 text-orange-500" />
          <h1 class="text-2xl uppercase font-black">Trending</h1>
        </div>
        <hr class="w-12 h-1.5 bg-orange-500 border-0">
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-5 divide-y divide-gray-200">
      <div v-for="item, i in items" :key="item.id" class="pt-5">
        <router-link :to="`/post/${item.id}`">
          <div class="flex justify-center">
            <div class="relative flex flex-col justify-center items-center gap-2 w-80 cursor-pointer hover:text-red-500">
              <img
                :src="require(`../assets/posts/trending/${i}.jpeg`)"
                class="rounded-full w-48 h-48 cursor-pointer"
              />
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
              <h4 class="font-normal text-lg tracking-6 leading-6 text-center">
                {{ item.title }}
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="mt-36 flex justify-end self-end cursor-pointer hover:bg-orange-500 hover:rounded-md">
      <div class="flex flex-row justify-start items-center gap-2 text-orange-500 hover:text-white hover:px-2 hover:py-1">
        <p class="uppercase text-sm leading-5">More Trending Stories</p>
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
  },
}
</script>