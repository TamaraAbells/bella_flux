<template>
  <div>
    <div class="flex flec-row justify-between items-start gap-20 py-5 px-10">
      <div class="flex flex-col justify-start gap-5">
        <div class="flex flex-col justify-start gap-2">
          <div class="flex flex-row">
            <p class="bg-red-500 text-black px-5 py-2 text-xs font-bold uppercase rounded">
            {{ post.category }}
          </p>
          </div>
          <h1 class="text-5xl font-bold">
            {{ post.title }}
          </h1>
        </div>
        <div class="flex flex-row justify-start items-start gap-2">
          <img class="w-12 h-12 rounded-full border-2" :src="post.image" />
          <div class="flex flex-col justify-start items-start gap-1">
            <p class="text-sm text-gray-400 font-semibold">Published 1 hour ago  on October 7, 2022</p>
            <p class="text-sm text-black-800 font-semibold">By: BNTV</p>
          </div>
        </div>
        <div class="flex justify-center items-center gap-5">
          <font-awesome-icon
            icon="fa-brands fa-facebook-f"
            class="h-5 text-white bg-blue-700 px-16 py-1 rounded"
          />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="h-5 text-white bg-blue-500 px-16 py-1 rounded"
          />
          <font-awesome-icon
            icon="fa-brands fa-youtube"
            class="h-5 text-white bg-red-700 px-16 py-1 rounded"
          />
        </div>
        <div class="flex flex-col justify-start gap-5 tracking-6 leading-6">
          <img style="width:800px;height:600px" :src="post.image" />
          <p class="text-gray-700 text-lg whitespace-wrap">
            {{ post.description }}
          </p>
        </div>
        <div class="flex flex-col gap-20 w-auto">
          <CommentBox :comments="comments" />
          <YouMayLike :items="favourites" />
        </div>
      </div>
      <div>
        <RecentPosts :items="recentPosts" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    RecentPosts: () => import('../../components/RecentPosts'),
    CommentBox: () => import('./CommentBox'),
    YouMayLike: () => import('./YouMayLike'),
  },
  data(){
    return {
      recentPosts: [],
      comments: [],
      favourites: [],
      post: {}
    }
  },
  created(){
    this.$axios.get('https://fakestoreapi.com/products')
    .then(({ data }) => {
      this.recentPosts = data.slice(0, 15)
      this.favourites = data.slice(0, 3)
    })
    this.$axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
    .then(({ data }) => { this.post = data })
    this.$axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(({ data }) => {
      this.comments = data.slice(0, 10)
      console.log('COMMENTS', this.comments)
    })
  }
}
</script>