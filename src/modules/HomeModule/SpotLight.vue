<template>
  <div class="_bg-spotlight flex flex-row justify-center">
    <div class="flex flex-row justify-evenly items-center gap-10">
      <div v-for="item in items" :key="item.id">
        <div class="flex flex-col justify-center items-center gap-5">
          <h2 class="text-white font-bold text-lg leading-5 uppercase">
            {{ item.category }}
          </h2>
          <VerticalCard :item="item" />
          <div class="flex flex-row justify-start items-center gap-2">
            <p class="text-white text-sm leading-5 uppercase">More in {{ item.category }}</p>
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="h-3 text-white" />
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
    VerticalCard: () => import('../../components/VerticalCard')
  },
}
</script>

<style scoped>
._bg-spotlight {
  background: #fc9435 !important;
  padding: 3rem 1rem !important;
}
</style>