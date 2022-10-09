<template>
  <div>
    <div class="_bg-explore flex flex-col justify-center items-center gap-0">
      <h2 class="text-red-600 uppercase text-2xl font-bold">Explore</h2>
      <div class="w-full flex flex-row justify-center">
        <div class="flex flex-row justify-evenly items-center gap-20">
          <div v-for="item in items" :key="item.id">
            <SquaredCard :item="item" />
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
    SquaredCard: () => import('../../components/SquaredCard'),
  },
}
</script>

<style scoped>
._bg-explore {
  background: #f4f4f4 !important;
  padding-top: 40px !important;
}
</style>