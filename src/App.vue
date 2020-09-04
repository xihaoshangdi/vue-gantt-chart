<template>
    <Layout>
      <template v-slot:container-box>
        <chart-container/>
      </template>

    </Layout>
</template>
<script>
import ChartContainer from './components/chart-container'
import Layout from './components/Layout'
export default {
  components: { Layout, ChartContainer }
}
</script>

<style lang="scss">

</style>
