<template>
  <div class="gantt">
    <header class="header">
      <div class="header__side">
        <div>当前日期</div>
        <div>时间刻度</div>
      </div>
      <div class="header__container">
        <div class="header__container__content">----</div>
      </div>
    </header>
    <main class="main">
      <aside class="aside__container">
        <div class="aside__container__content">
          ssssss
        </div>
      </aside>
      <article>
        <div>xxxxxxxxxxxxx</div>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Gantt'
}
</script>

<style scoped lang="scss">
.gantt{
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}
.header{
  height: 60px;//动态
  display: grid;
  grid-template-columns: 100px 1fr;
}
.header__side{
  border: 1px solid red;
}
.header__container{
  overflow: auto;
}
.header__container__content{
  width: 5000px;
  background-color: red;
}
.main{
  display: grid;
  grid-template-columns: 100px 1fr;
}
.aside__container{
  height: 540px;//动态   ganttHeight-headerHeight
  overflow: auto;
}
.aside__container__content{
  height: 2000px;
}
</style>
