<template>
  <div>
    <div class="flex flex-col gap-10 px-16 pt-10 h-full">
      <div class="w-full flex flex-row justify-center items-start gap-5 border-b border-gray-100">
        <div class="basis-1/4">
          <TrendingSidebar :items="trending" />
        </div>
        <div class="flex flex-col justify-center gap-7 basis-1/2">
          <router-link :to="`/post/${latest[0].id}`">
            <div class="relative w-full cursor-pointer">
              <img style="" :src="require('../../assets/posts/jumbotron/1.jpeg')" />
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
              <div class="absolute bottom-0 __gardient-class pb-5 pt-16 px-3">
                <h2 class="text-2xl text-white font-semibold capitalize">
                  {{ latest[0].title }}
                </h2>
              </div>
            </div>
          </router-link>
          <router-link :to="`/post/${latest[1].id}`">
            <div class="relative cursor-pointer hover:text-red-500">
              <img style="width:600px; height:300px" :src="require('../../assets/posts/jumbotron/2.jpeg')" />
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="background-color: rgba(251, 251, 251, 0.2)"></div>
              <div class="py-1">
                <h2 class="text-2xl text-black font-semibold hover:text-red-500">
                  {{ latest[1].title }}
                </h2>
              </div>
            </div>
          </router-link>
        </div>
        <div class="basis-1/4">
          <LatestSidebar :items="latest" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trending: {
      type: Array,
      default: () => []
    },
    latest: {
      type: Array,
      default: () => []
    },
  },
  components: {
    TrendingSidebar: () => import('../../components/TrendingSidebar'),
    LatestSidebar: () => import('../../components/LatestSidebar')
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