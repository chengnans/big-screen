<!--<template>-->
<!--  <div ref="container" class="base-turbine">-->
<!--    <div class="base-turbine-left">-->
<!--      <div class="map-panels">-->
<!--        <slot name="left"> </slot>-->
<!--      </div>-->
<!--      <div class="map-controls">-->
<!--        <slot name="control"> </slot>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="base-turbine-right">-->
<!--      <div class="map-panels">-->
<!--        <slot name="right"></slot>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-if="loading" class="loading">-->
<!--      <IconLoading spin class="icon" />-->
<!--      <span>加载中,请耐心等待...</span>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->
<!--<script setup lang="ts">-->
<!--import { provide } from 'vue'-->
<!--import { IconLoading } from '@arco-design/web-vue/es/icon'-->
<!--import { useTurbine } from './hooks/useTurbine'-->
<!--const {-->
<!--  container,-->
<!--  loading,-->
<!--  equipmentComposeAnimation,-->
<!--  equipmentDecomposeAnimation,-->
<!--} = useTurbine()-->

<!--provide('turbineActions', {-->
<!--// 设备合成动画-->
<!--  equipmentComposeAnimation,-->
<!--// 设备分解动画-->
<!--  equipmentDecomposeAnimation,-->
<!--})-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--.base-turbine {-->
<!--  width: 100%;-->
<!--  height: 100%;-->

<!--  .base-turbine-left,-->
<!--  .base-turbine-right {-->
<!--    position: absolute;-->
<!--    top: 70px;-->
<!--    z-index: 999;-->
<!--    display: flex;-->
<!--    grid-gap: 10px;-->
<!--    height: calc(100% - 90px);-->
<!--    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);-->

<!--    &.base-turbine-left {-->
<!--      left: 10px;-->
<!--    }-->

<!--    &.base-turbine-right {-->
<!--      right: 10px;-->
<!--    }-->

<!--    .map-panels {-->
<!--      display: grid;-->
<!--      grid-template-rows: repeat(3, 1fr);-->
<!--      grid-gap: 10px;-->
<!--      height: 100%;-->
<!--      overflow: hidden;-->
<!--    }-->
<!--  }-->

<!--  .map-controls {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    grid-gap: 10px;-->
<!--  }-->

<!--  .loading {-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    left: 0;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    font-size: 20px;-->
<!--    color: #fff;-->

<!--    .icon {-->
<!--      margin-bottom: 10px;-->
<!--      font-size: 26px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->


<!-- src/components/BaseTurbine/index.vue -->
<template>
  <div ref="mapContainer" class="map-container">
<!--    天地图-->
    <Tmap />
    <div v-if="chunkModules.left" class="base-turbine-left">
      <div class="map-panels">
      <component :is="Widgets[item]" v-for="item in chunkModules.left" :key="item" />
      </div>
    </div>
    <div v-if="chunkModules.right" class="base-turbine-right">
      <div class="map-panels">
      <component :is="Widgets[item]" v-for="item in chunkModules.right" :key="item" />
      </div>
    </div>
    <div class="map-controls">
<!--      <Widgets.ControlPanel />-->
<!--      注销掉风机控制-->
<!--      <Widgets.ControlTurbine />-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import type { Ref } from 'vue'; // 使用类型导入
import { useLayoutStore } from '@/stores/modules/layout';
import { storeToRefs } from 'pinia';
import Widgets from '../../widgets';
// import { useMap } from '@/hooks/useMap';

import Tmap from '@/components/Tmap.vue';

const layoutStore = useLayoutStore();
const { chunkModules } = storeToRefs(layoutStore);

</script>

<style>
.map-container {
  position: relative;
  width: 100%;
  height: 100%;

  .base-turbine-left,
  .base-turbine-right {
    position: absolute;
    top: 70px;
    z-index: 999;
    display: flex;
    grid-gap: 10px;
    height: calc(100% - 90px);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &.base-turbine-left {
      left: 10px;
    }

    &.base-turbine-right {
      right: 10px;
    }

    .map-panels {
      z-index: 999;
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 10px;
      height: 100%;
      overflow: hidden;
    }
  }

  .map-controls {
    position: absolute;
    z-index: 1000; /* 确保高于地图和其他内容 */
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
  }
}
</style>
