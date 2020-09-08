<template>
    <Layout >
      <template v-slot:container-box>
        //主菜单
      </template>
      <template v-slot:side-box>
        //侧边栏
      </template>
    </Layout>
</template>
<script>
import Layout from './components/Layout'
export default {
  components: { Layout }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

</style>
