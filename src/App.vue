<template>
    <Layout >
      <template v-slot:container-box>
        <chart-container/>
      </template>
      <template v-slot:side-box>
        //侧边栏
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

<style>
  *{
    margin: 0;
    padding: 0;
  }

</style>
