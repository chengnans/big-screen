// src/hooks/useMap.ts
// @ts-ignore
import { ref, onMounted, Ref } from 'vue';

interface MapOptions {
    zoom: number;
    center: [number, number];
}

interface UseMapReturn {
    // @ts-ignore
    map: Ref<AMap.Map | null>;
    initMap: () => void;
}

export function useMap(containerRef: Ref<HTMLElement | null>, options: MapOptions): UseMapReturn {
    // @ts-ignore
    const map = ref<AMap.Map | null>(null);

    const initMap = (): void => {
        if (!containerRef.value) {
            console.error('Container element not found.');
            return;
        }

        // @ts-ignore
        map.value = new AMap.Map(containerRef.value, {
            zoom: options.zoom,
            center: options.center,
        });

        // 这里可以添加更多的地图初始化逻辑
    };

    onMounted(() => {
        // @ts-ignore
        if (window.AMap) {
            initMap();
        } else {
            console.error('AMap is not defined. Please check your AMap script tag.');
        }
    });

    return { map, initMap };
}
