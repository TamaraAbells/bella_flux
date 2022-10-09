<template>
  <div>
    <div class="flex flex-col">
      <div class="flex flex-col justify-start gap-2">
        <div class="flex justify-start items-center gap-2">
          <h2 class="uppercase text-2xl font-bold whitespace-nowrap">LEAVE A REPLY</h2>
          <hr class="w-full h-1.5 bg-red-500 border-0">
        </div>
        <div class="flex flex-col gap-2">
          <label for="comment">Comment <span class="text-red-600">*</span></label>
            <textarea name="comment" class="bg-gray-100 rounded w-full h-48"></textarea>
        </div>
        <div class="flex flex-col gap-2">
          <label for="name">Name <span class="text-red-600">*</span></label>
            <input name="name" class="bg-gray-100 rounded w-1/2 h-10 border border-black" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email">Email <span class="text-red-600">*</span></label>
            <input name="email" class="bg-gray-100 rounded w-1/2 h-10 border border-black" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="website">Website <span class="text-red-600">*</span></label>
            <input name="website" class="bg-gray-100 rounded w-1/2 h-10 border border-black" />
        </div>
        <button class="w-1/4 h-8 rounded mt-5 text-sm uppercase bg-gray-300 border border-gray-500">
          Post a Comment
        </button>
      </div>
      <div class="mt-10 flex flex-col gap-5 w-full">
        <p class="text-2xl font-bold">COMMENTS:</p>
        <div v-for="comment in comments" :key="comment.id">
          <div class="flex flex-col justify-start items-start gap-1 border-b pb-2">
            <div class="flex flex-col justify-start items-start gap-0 w-full">
              <p class="text-base text-black-800 font-semibold">Name: {{ comment.name }}</p>
              <p class="text-sm text-gray-400 font-semibold">Email: {{ comment.email }}</p>
            </div>
            <p class="text-sm text-black-800 font-semibold">{{ comment.body }}</p>
          </div>
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
  },
}
</script>