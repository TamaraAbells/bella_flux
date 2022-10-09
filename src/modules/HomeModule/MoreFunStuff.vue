<template>
  <div>
    <div class="_bg-explore flex flex-col justify-center items-center gap-10 py-10">
      <div class="flex flex-col justify-center items-center gap-1">
        <h2 class="text-black uppercase text-3xl font-bold">NEED MORE FUN STUFF?</h2>
        <p class="text-red-600 text-sm">Checkout these stories from our network</p>
      </div>
      <div class="w-full flex flex-row justify-center">
        <div class="flex flex-row justify-evenly items-center gap-10">
          <div v-for="item in items" :key="item.id">
            <VerticalCard :item="item" link tag  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    VerticalCard: () => import('../../components/VerticalCard'),
  },
  data(){
    return {
      spotlights: [
        { topText: 'Sweet Spot', moreText: 'More Sweet Spot' },
        { topText: 'Events', moreText: 'More Events' },
        { topText: 'Nollywood', moreText: 'More Nollywood' },
      ]
    }
  }
}
</script>

<style scoped>
._bg-explore {
  background: #dfdddd !important;
  padding-top: 40px !important;
}
</style>