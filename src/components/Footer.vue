<template>
  <div>
    <div class="divide-y divide-black mx-24 mb-5">
      <div class="_bg-explore flex flex-col justify-center gap-10 py-2">
        <div class="flex justify-center items-center gap-10">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-5" />
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="h-5" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="h-5" />
          <font-awesome-icon icon="fa-brands fa-instagram" class="h-5" />
          <font-awesome-icon icon="fa-brands fa-youtube" class="h-5" />
        </div>
        <nav class="text-xs font-semibold uppercase">
          <ul class="flex justify-center items-center gap-10">
            <li>NEWS</li>
            <li>MUSIC</li>
            <li>WEDDINGS</li>
            <li>STYLE</li>
            <li>RELATIONSHIPS</li>
            <li>NOLLYWOOD EVENTS</li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-row items-center justify-between gap-24 py-5">
        <p class="text-sm text-bold whitespace-nowrap">© 2022 BellaNaija. All rights reserved</p>
        <p class="text-xs font-normal text-center w-80">
          BellaNaija is not responsible for the content of external sites and news culled therefrom.
        </p>
        <div>
          <img :src="require('../assets/logo-word-black-small@2x.png')" class="h-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  }
</script>

<style scoped>
._bg-explore {
  background: #ffffff !important;
  padding-top: 80px !important;
}
</style>