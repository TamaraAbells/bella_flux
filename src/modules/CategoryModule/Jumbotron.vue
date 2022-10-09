<template>
  <div>
    <div class="flex flex-col gap-10 px-16 pt-10 h-full">
      <div class="w-full flex flex-row justify-center items-start gap-5 border-b border-gray-100">
        <div class="basis-1/4">
          <RecentComments :comments="comments" />
        </div>
        <div class="flex flex-col justify-center gap-7" style="width:550px">
          <div class="relative cursor-pointer" style="width:550px">
            <img style="width:700px; height:500px"
              :src="require('../../assets/GLITZ-560x600.jpg')" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
            <div class="absolute bottom-0 __gardient-class pb-5 pt-16 px-3">
              <h2 class="text-2xl text-white font-semibold">
                See The Full Schedule For Glitz Africa Fashion Week 2022
              </h2>
            </div>
          </div>
          <div class="relative cursor-pointer">
            <img style="width:600px; height:300px"
              :src="require('../../assets/pexels-monstera-9490629-2-560x426.jpg')" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
            <div class="py-1">
              <h2 class="text-2xl text-black font-semibold">
                How the Private Sector can Help Students During ASUU Strike
              </h2>
            </div>
          </div>
        </div>
        <div class="basis-1/4">
          <RecentPosts :items="recentPosts" />
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
    },
    recentPosts: {
      type: Array,
      default: () => []
    },
  },
  components: {
    RecentPosts: () => import('../../components/RecentPosts'),
    RecentComments: () => import('../../components/RecentComments'),
  }
}
</script>

<style scoped>
.__gardient-class {
  background-image: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.6) 50%,rgba(0,0,0,.9) 100%);
}
._hero-class {
  width: 50vw !important;
}
</style>