<template>
  <div class="base-list-container">
    <div class="header">
      <span class="arrow">&gt;&gt;&gt;&gt;&gt;</span>
      <h1>基地列表（点击可快速导航）</h1>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="请输入" />
      <button>搜 索</button>
      <button>重 置</button>
    </div>
    <div class="base-item">
      <div class="base-name">大河岔村基地</div>
      <div class="base-details">
        <div>种植：无</div>
        <div>设备数量：44</div>
        <div>面积：422.81亩</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseList",
  data() {
    return {
      searchTerm: "",
      bases: [
        {
          name: "大河岔村基地",
          crops: "无",
          equipmentCount: 44,
          area: "422.81"
        }
      ]
    };
  },
  methods: {
    search() {
      console.log("Search triggered");
    },
    reset() {
      console.log("Reset triggered");
    }
  }
};
</script>

<style scoped>
.base-list-container {
  padding: 20px;
  color: white;
  background-color: #2c3e50;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.arrow {
  margin-right: 10px;
  font-size: 24px;
  color: #2ecc71;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-bar input {
  width: calc(100% - 200px);
  padding: 10px;
  color: white;
  background-color: #34495e;
  border: none;
  outline: none;
}

.search-bar button {
  padding: 10px 20px;
  margin-left: 10px;
  color: white;
  cursor: pointer;
  background-color: #2ecc71;
  border: none;
}

.base-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.base-name {
  font-size: 18px;
  font-weight: bold;
}

.base-details div {
  margin-top: 5px;
}
</style>
