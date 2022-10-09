<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('./components/Header'),
    Footer: () => import('./components/Footer')
  }
}
</script>
