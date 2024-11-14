<!--首页弹窗自定义-->
<template>
  <a href="/base_index">
  <div class="container" >
    <h1>大河岔村基地</h1>
    <p>面积：<span class="highlight">422.81亩 (28.19公顷)</span></p>
    <p>设备：<span class="highlight">44台</span></p>
    <p>种植作物：暂无</p>
  </div>
  </a>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.container {
  width: 300px;
  padding: 20px;
  margin: 50px auto;
  color: white;
  background-color: #0a7d9c;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

p {
  font-size: 20px;
  line-height: 1.5;
}

.highlight {
  color: #fc0;
}
</style>
