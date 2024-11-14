<template>
  <div id="tdt"></div>
</template>

<script lang="ts" setup>
import { onMounted, render, createVNode } from "vue";
import demo from './baseWindow.vue';
const init = () => {
  // 确保 T 是全局对象
  const T = window.T;

  // 创建地图实例
  const map = new T.Map("tdt");
  map.setMapType(window.TMAP_SATELLITE_MAP);
  map.centerAndZoom(new T.LngLat(119.999, 36.620), 17);

  // 创建标记点
  const marker = new T.Marker(new T.LngLat(119.999, 36.620));
  // map.addOverLay(marker);

// 创建虚拟节点
  const infoWindowContent = createVNode(demo);
  let node = document.createElement('div'); // 创建一个div节点
  render(infoWindowContent, node); // 实例组件挂载到node节点上

  // 监听组件点击事件
  //   marker.on("click", () => {
  //   map.openInfoWindow(infoWindow, new T.LngLat(119.999, 36.620));
  // });

  // 创建天地图信息窗口 infoWindowContent.el：test模板dom
  let infoWindow = new T.InfoWindow(infoWindowContent.el, {
    closeButton: false // 关闭天地图弹框默认关闭图标
  })

  // 打开信息窗口
  map.openInfoWindow(infoWindow, new T.LngLat(119.999, 36.620));

  // 地图添加标识及信息窗口
    map.addOverLay(marker,infoWindow)

//   天地图窗口隐藏原有样式及隐藏logo信息放在src/assets/styles/global.scss下

};


onMounted(() => {
  init()
});
</script>

<style>
#tdt {
  width: 100%;
  height: 100%;
}
</style>
