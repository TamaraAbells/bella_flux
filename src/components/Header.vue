<template>
  <div class="shadow px-10 py-4">
    <div class="flex justify-between items-center">
      <div class="cursor-pointer hover:text-orange-500" @click="menuOpen = true">
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" class="h-8" />
      </div>
      <div>
       <router-link to="/">
          <img :src="require('../assets/logo-word-black-small@2x.png')" class="h-10" />
       </router-link>
      </div>
      <nav class="text-sm font-bold uppercase">
        <ul class="flex justify-evenly items-center gap-7">
          <li class="hover:underline hover:text-orange-500">
            <router-link to="/category/news">NEWS</router-link>
          </li>
          <li class="hover:underline hover:text-orange-500">
            <router-link to="/category/music">MUSIC</router-link>
          </li>
         <li class="hover:underline hover:text-orange-500">
           <router-link to="/category/weddings">WEDDINGS</router-link>
          </li>
          <li class="hover:underline hover:text-orange-500">
            <router-link to="/category/style">STYLE</router-link>
          </li>
          <li class="hover:underline hover:text-orange-500">
            <router-link to="/category/relationships">RELATIONSHIPS</router-link>
          </li>
          <li class="hover:underline hover:text-orange-500">
            <router-link to="/category/events">NOLLYWOOD EVENTS</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex justify-center items-center gap-5">
        <div @click="searchOpen = true" class="cursor-pointer hover:text-orange-500">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-5" />
        </div>
        <font-awesome-icon icon="fa-brands fa-facebook-f" class="h-5" />
        <font-awesome-icon icon="fa-brands fa-twitter" class="h-5" />
        <font-awesome-icon icon="fa-brands fa-instagram" class="h-5" />
        <font-awesome-icon icon="fa-brands fa-youtube" class="h-5" />
      </div>
    </div>
    <template v-if="searchOpen">
      <div class="fixed inset-0 flex z-40">
        <transition name="fade">
          <div class="flex-1 bg-black bg-opacity-75 active:outline-none z-10 p-8">
            <div class="flex flex-col gap-10">
              <div class="flex justify-end self-end text-white cursor-pointer" @click="searchOpen = false">
                <font-awesome-icon icon="fa-solid fa-close" class="h-8" />
              </div>
              <div class="flex flex-col justify-center items-center mt-20 gap-5">
                <h1 class="text-4xl text-white">SEARCH</h1>
                <div class="pt-2 relative mx-auto text-gray-600">
                  <input class="w-[600px] border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search">
                  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                      width="512px" height="512px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div> 
    </template>
    <template v-if="menuOpen">
      <div class="fixed inset-0 flex z-40">
        <transition name="fade">
          <div class="flex-1 bg-black bg-opacity-75 active:outline-none z-10">
            <div class="w-96 bg-white h-screen flex flex-col justify-start pb-10 px-3 py-2">
              <div class="flex flex-row justify-between ml-28">
                <div class="flex self-end h-8">
                  <router-link to="/">
                    <img :src="require('../assets/logo-word-black-small@2x.png')" class="h-8" />
                  </router-link>
                </div>
                <div class="flex justify-end self-end text-orange-500 cursor-pointer" @click="menuOpen = false">
                  <font-awesome-icon icon="fa-solid fa-close" class="h-10" />
                </div>
              </div>
              <nav class="text-lg font-bold uppercase flex flex-col mb-40 mt-10">
                <ul class="flex flex-col gap-3 divide-y">
                  <li class="hover:underline hover:text-orange-500 pt-3">
                    <router-link to="/category/news">NEWS</router-link>
                  </li>
                  <li class="hover:underline hover:text-orange-500 pt-3">
                    <router-link to="/category/music">MUSIC</router-link>
                  </li>
                <li class="hover:underline hover:text-orange-500 pt-3">
                  <router-link to="/category/weddings">WEDDINGS</router-link>
                  </li>
                  <li class="hover:underline hover:text-orange-500 pt-3">
                    <router-link to="/category/style">STYLE</router-link>
                  </li>
                  <li class="hover:underline hover:text-orange-500 pt-3">
                    <router-link to="/category/relationships">RELATIONSHIPS</router-link>
                  </li>
                  <li class="hover:underline hover:text-orange-500 pt-3">
                    <router-link to="/category/events">NOLLYWOOD EVENTS</router-link>
                  </li>
                </ul>
              </nav>
              <div class="flex justify-center items-center gap-5">
                <font-awesome-icon icon="fa-brands fa-facebook-f" class="h-5" />
                <font-awesome-icon icon="fa-brands fa-twitter" class="h-5" />
                <font-awesome-icon icon="fa-brands fa-instagram" class="h-5" />
                <font-awesome-icon icon="fa-brands fa-youtube" class="h-5" />
              </div>
            </div>
          </div>
        </transition>
      </div> 
    </template>
  </div>
</template>

<script>
export default {
  data() {
		return {
			searchOpen: false,
      menuOpen: false,
		};
	},
}
</script>

<style scoped>
html {
	background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>