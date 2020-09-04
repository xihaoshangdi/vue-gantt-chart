<template>
  <div>
    <div class="time-date">
      <template v-for="section in day">
        <div :style="handleStyle('day')" :key="section">{{section}}</div>
      </template>
    </div>
    <div class="time-scale">
      <template v-for="section in hour">
        <div :style="handleStyle('hour')" :key="section">{{section}}</div>
      </template>
    </div>
    <div class="block">
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'chart-container',
  data () {
    return {}
  },
  computed: {
    day () {
      return Math.ceil(1000 / 50 / 12)
    },
    hour () {
      const hours = Math.ceil(1000 / 50)
      console.log([...Array.from({ length: hours }).keys()])
      return hours
    }
  },
  methods: {
    handleStyle (type) {
      let StyleObj
      switch (type) {
        case 'hour':
          StyleObj = { width: `${50}px` }
          break
        case 'day':
          StyleObj = { width: `${50 * 12}px` }
          break
        case 'week':
          StyleObj = { width: `${50 * 12 * 7}px` }
          break
        case 'month':
          StyleObj = { width: `${50 * 12 * 7 * 4}px` }
          break
      }
      return StyleObj
    }
  }

}
</script>

<style scoped lang="scss">
  .block {
    width: 1000px;
    height: 40px;
    background: url("../assets/background.png") 0 0;
  }

  .time-date {
    width: 1000px;
    height: 40px;
    background-color: #7BB9FE;
    opacity: 0.7;

    display: flex;
    flex-direction: row;
    flex-flow: nowrap;

    text-align: center;
    margin-bottom: 1px;
  }

  .time-scale {
    width: 1000px;
    height: 40px;
    background-color: #7BB9FE;
    opacity: 0.8;

    display: flex;
    flex-direction: row;
    flex-flow: nowrap;

    text-align: center;
  }

  .block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .bar {
    width: 100px;
    height: 24px;
    background-color: red;
    margin-left: 28.8px;
  }
</style>
