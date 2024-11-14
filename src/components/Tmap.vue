<!--<template>-->

<!--  <div id="tdt"></div>-->

<!--</template>-->

<!--<script lang="ts" setup>-->
<!--import { onMounted } from "vue";-->

<!--const init = () => {-->
<!--  var map = null;-->
<!--  var T = window.T;-->
<!--  map = new T.Map("tdt");-->
<!--  map.setMapType(window.TMAP_SATELLITE_MAP);-->
<!--  map.centerAndZoom(new T.LngLat(119.999, 36.620), 17);-->
<!--};-->
<!--onMounted(() => {-->
<!--  init();-->
<!--});-->

<!--</script>-->


<!--<style>-->
<!--#tdt {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--</style>-->

<template>
  <div id="tdt"></div>
</template>

<script lang="ts" setup>
import { onMounted, render, createVNode } from "vue";
import demo from './demo.vue';
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

  // 创建自定义信息窗口
  // const content = '<div style="text-align:center; padding:10px;">大河岔村基地</div>';
  // const content = '<!DOCTYPE html>\n' +
  //     '<html lang="zh-CN">\n' +
  //     '<head>\n' +
  //     '    <meta charset="UTF-8">\n' +
  //     '    <title>大河岔村基地信息</title>\n' +
  //     '    <style>\n' +
  //     '        body {\n' +
  //     '            font-family: Arial, sans-serif;\n' +
  //     '            background-color: #f0f0f0;\n' +
  //     '        }\n' +
  //     '\n' +
  //     '        .container {\n' +
  //     '            width: 300px;\n' +
  //     '            margin: 50px auto;\n' +
  //     '            padding: 20px;\n' +
  //     '            border-radius: 10px;\n' +
  //     '            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n' +
  //     '            background-color: #0a7d9c;\n' +
  //     '            color: white;\n' +
  //     '        }\n' +
  //     '\n' +
  //     '        h1 {\n' +
  //     '            font-size: 24px;\n' +
  //     '            margin-bottom: 20px;\n' +
  //     '            text-align: center;\n' +
  //     '        }\n' +
  //     '\n' +
  //     '        p {\n' +
  //     '            font-size: 20px;\n' +
  //     '            line-height: 1.5;\n' +
  //     '        }\n' +
  //     '\n' +
  //     '        .highlight {\n' +
  //     '            color: #ffcc00;\n' +
  //     '        }\n' +
  //     '    </style>\n' +
  //     '</head>\n' +
  //     '<body>\n' +
  //     '<div class="container">\n' +
  //     '    <h1>大河岔村基地</h1>\n' +
  //     '    <p>面积：<span class="highlight">422.81亩 (28.19公顷)</span></p>\n' +
  //     '    <p>设备：<span class="highlight">44台</span></p>\n' +
  //     '    <p>种植作物：暂无</p>\n' +
  //     '</div>\n' +
  //     '</body>\n' +
  //     '</html>\n';

  //默认信息窗口
  // const infoWindow = new T.InfoWindow(content);


// 创建自定义信息窗口
//   const infoWindow = new T.InfoWindow(content, {
//     size: { width: 300, height: 200 }, // 设置信息窗口的大小
//     anchor: 'BOTTOM_CENTER', // 设置信息窗口的锚点位置
//     offset: { x: 0, y: -30 } // 设置信息窗口的偏移量
//   });
//   // 打开信息窗口
//   map.openInfoWindow(infoWindow, new T.LngLat(119.999, 36.620));
//
//   // 绑定点击事件，打开信息窗口
//   marker.on("click", () => {
//     map.openInfoWindow(infoWindow, new T.LngLat(119.999, 36.620));
//   });


// 创建虚拟节点并传参
  const infoWindowContent = createVNode(demo)
  let node = document.createElement('div') // 创建一个div节点
  render(infoWindowContent, node) // 实例组件挂载到node节点上
  // 监听组件点击事件
  // infoWindowContent.el.addEventListener('click', () => {})
    marker.on("click", () => {
    map.openInfoWindow(infoWindow, new T.LngLat(119.999, 36.620));
  });
  // 创建天地图信息窗口 infoWindowContent.el：test模板dom
  let infoWindow = new T.InfoWindow(infoWindowContent.el, {
    closeButton: false // 关闭天地图弹框默认关闭图标
  })
  // 设置信息窗口经纬度(地图坐标) 成都
  // infoWindow.setLngLat(new T.LngLat(104.08394, 30.576625))
  // 地图添加信息窗口，地图自己去初始化哈，别直接复制说代码跑不起来，这里只是示例
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
