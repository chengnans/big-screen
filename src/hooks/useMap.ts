// src/hooks/useMap.ts
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue'; // 使用类型导入

// 确保正确引用 AMap 命名空间
declare let AMap: any;

interface MapOptions {
    zoom: number;
    center: [number, number];
}

interface UseMapReturn {
    map: Ref<any | null>;
    initMap: () => void;
}

export function useMap(containerRef: Ref<HTMLElement | null>, options: MapOptions): UseMapReturn {
    const map = ref<any | null>(null);

    const initMap = (): void => {
        if (!containerRef.value) {
            console.error('Container element not found.');
            return;
        }

        if (AMap) {
            map.value = new AMap.Map(containerRef.value, {
                zoom: options.zoom,
                center: options.center,
                layers: [new AMap.TileLayer.Satellite()], // 设置卫星图层
            });
            // 添加缩放组件
            const toolbar = new AMap.ToolBar({
                position: 'LT', // 工具条位置，可选值：'LT'（左上）、'RT'（右上）、'LB'（左下）、'RB'（右下）
            });
            map.value.addControl(toolbar);
        } else {
            console.error('AMap is not defined. Please check your AMap script tag.');
        }

        // 这里可以添加更多的地图初始化逻辑
    };

    onMounted(() => {
        initMap();
    });

    return { map, initMap };
}
