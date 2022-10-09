<template>
  <div class="shadow px-10 py-4">
    <div class="flex justify-between items-center">
      <div>
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" class="h-8" />
      </div>
      <div>
        <img :src="require('../assets/logo-word-black-small@2x.png')" class="h-10" />
      </div>
      <nav class="text-sm font-bold uppercase">
        <ul class="flex justify-evenly items-center gap-7">
          <li>NEWS</li>
          <li>MUSIC</li>
          <li>WEDDINGS</li>
          <li>STYLE</li>
          <li>RELATIONSHIPS</li>
          <li>NOLLYWOOD EVENTS</li>
        </ul>
      </nav>
      <div class="flex justify-center items-center gap-5">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-5" />
        <font-awesome-icon icon="fa-brands fa-facebook-f" class="h-5" />
        <font-awesome-icon icon="fa-brands fa-twitter" class="h-5" />
        <font-awesome-icon icon="fa-brands fa-instagram" class="h-5" />
        <font-awesome-icon icon="fa-brands fa-youtube" class="h-5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>