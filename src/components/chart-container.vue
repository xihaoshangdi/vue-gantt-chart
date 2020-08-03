<template>
    <div
            class="container"
            :style="containerStyle">
        <template v-for="track in tracks" >
            <div class="track" :key="track">
                <span :style="blockStyle">{{track}}</span>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  name: 'chart-container',
  props: {
    containerStyle: {
      default: function () {
        return {
          width: '50px',
          height: '60px'
        }
      }
    },
    blockStyle: {
      type: Object,
      default: function () {
        return {
          width: '50px',
          height: '60px'
        }
      }
    }
  },
  data () {
    return {
      tracks: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped lang="scss">
.container{
    background-color: silver;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
</style>
