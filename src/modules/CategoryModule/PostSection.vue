<template>
  <div class="px-10">
    <div class="flex flex-row justify-between items-center gap-2">
      <hr class="w-full h-1.5 bg-orange-500 border-0">
      <h1 class="w-96 text-center text-2xl uppercase font-black">NEW POSTS</h1>
      <hr class="w-full h-1.5 bg-orange-500 border-0">
    </div>
    <div class="w-full flex flex-row justify-between gap-10">
      <div class="w-2/3">
        <div v-for="item in postSection" :key="item.id" class="py-2">
          <NewPostsCard :item="item" />
        </div>
      </div>
      <div class="w-1/3 flex flex-col gap-5">
        <div class="py-2">
          <RecentComments :comments="comments" />
        </div>
        <div class="py-2">
          <RecentPosts :items="recentPosts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postSection: {
      type: Array,
      default: () => []
    },
    recentPosts: {
      type: Array,
      default: () => []
    },
    comments: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NewPostsCard: () => import('../../components/NewPostsCard'),
    RecentComments: () => import('../../components/RecentComments'),
    RecentPosts: () => import('../../components/RecentPosts')
  }
}
</script>