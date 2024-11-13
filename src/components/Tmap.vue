<template>

  <div id="tdt"></div>

</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const init = () => {
  var map = null;
  var T = window.T;
  map = new T.Map("tdt");
  map.setMapType(window.TMAP_SATELLITE_MAP);
  map.centerAndZoom(new T.LngLat(119.999, 36.620), 15);
};
onMounted(() => {
  init();
});

</script>


<style>
#tdt {
  width: 100%;
  height: 100%;
}
</style>
