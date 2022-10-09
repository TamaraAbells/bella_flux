<template>
  <div class="relative flex flex-col justify-between items-center gap-2">
    <div class="flex flex-col justify-center items-center gap-2">
      <div class="flex flex-row justify-between items-center gap-2">
      <hr class="w-16 h-1.5 bg-orange-500 border-0">
      <h1 class="text-center text-2xl uppercase font-black">RECENT POSTS</h1>
      <hr class="w-16 h-1.5 bg-orange-500 border-0">
    </div>
      <div>
        <div v-for="item in items" :key="item.id" class="py-1">
          <router-link :to="`/post/${item.id}`">
            <div class="flex justify-start items-start gap-2 border-b">
              <div class="relative cursor-pointer">
                <div class="rounded-sm w-28 h-24">
                  <img class="rounded-sm w-28 h-20" :src="require(`../assets/posts/posts/${item.id}.jpeg`)" />
                </div>
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
              </div>
              <p class="text-base font-bold text-black cursor-pointer hover:text-red-500 hover:underline">
                {{ item.title }}
              </p>
            </div>
          </router-link>
        </div>
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