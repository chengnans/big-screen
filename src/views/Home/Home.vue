<template>
  <Layout>
    <BaseTurbine />
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layout/index.vue';
import BaseTurbine from '@/components/BaseTurbine/index.vue';
import { useLayoutStore } from '@/stores/modules/layout';
import { storeToRefs } from 'pinia';

const layoutStore = useLayoutStore();
const { chunkModules } = storeToRefs(layoutStore);
</script>
