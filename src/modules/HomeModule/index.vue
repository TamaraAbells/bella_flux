<template>
  <div class="flex flex-col gap-5">
    <Jumbotron
      :trending="trending"
      :latest="latest"
    />
    <SpotLight
      :items="spotlight"
    />
    <PostSection
      :post-section="postSection"
      :recent-posts="recentPosts"
      :comments="comments"
    />
    <Explore
      :items="explore"
    />
    <MoreFunStuff
      :items="moreStuffs"
    />
  </div>
</template>

<script>
export default {
  components: {
    Jumbotron: () => import('./Jumbotron'),
    SpotLight: () => import('./SpotLight'),
    PostSection: () => import('./PostSection'),
    Explore: () => import('./Explore'),
    MoreFunStuff: () => import('./MoreFunStuff'),
  },
  data(){
    return {
      trending: [],
      latest: [],
      spotlight: [],
      postSection: [],
      recentPosts: [],
      comments: [],
      explore: [],
      moreStuffs: [],
    }
  },
  created(){
    this.$axios.get('https://fakestoreapi.com/products?limit=50')
    .then(({ data }) => {
      this.trending = data.filter(item => item.id % 2 === 0).slice(0, 3)
      this.latest = data.filter(item => item.id % 2 === 1).slice(0, 15)
      this.spotlight = data.filter(item => item.id % 3 === 0).slice(0, 3)
      this.postSection = data.slice(0, 8)
      this.recentPosts = data.slice(0, 8)
      this.explore = data.filter(item => item.id % 2 === 0).slice(4, 8)
       this.moreStuffs = data.filter(item => item.id % 2 === 0).slice(7, 10)
    })
    this.$axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(({ data }) => {
      this.comments = data.slice(0, 10)
    })
  }
}
</script>