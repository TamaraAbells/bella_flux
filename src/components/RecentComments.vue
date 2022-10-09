<template>
  <div class="relative flex flex-col justify-between items-center gap-2">
    <div class="flex flex-col justify-center items-center gap-2">
      <div class="flex flex-row justify-between items-center gap-2">
        <hr class="w-10 h-1.5 bg-orange-500 border-0">
        <h1 class="text-center text-2xl uppercase font-black">RECENT COMMENTS</h1>
        <hr class="w-10 h-1.5 bg-orange-500 border-0">
      </div>
      <div>
        <div v-for="comment in comments" :key="comment.id" class="py-1">
          <p class="text-sm text-black leading-5 tracking-5 pr-10 pb-2 border-b cursor-pointer hover:text-red-500 hover:underline">
            {{ comment.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  }
}
</script>