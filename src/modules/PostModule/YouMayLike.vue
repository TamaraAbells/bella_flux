<template>
  <div>
    <div class="w-full flex flex-col justify-start gap-2">
      <div class="flex justify-start items-center gap-2">
        <h2 class="uppercase text-2xl font-bold whitespace-nowrap">You May Like</h2>
        <hr class="w-full h-1.5 bg-orange-500 border-0">
      </div>
      <div class="w-full flex justify-between items-center gap-10">
        <div v-for="item in items" :key="item.id">
          <div class="flex flex-col justify-center items-center gap-5">
            <img class="w-80 h-60" :src="require(`../../assets/posts/posts/${item.id}.jpeg`)" />
            <p class="text-black text-sm font-bold leading-5">
              {{ item.title }}
            </p>
          </div>
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