// src/global.d.ts
declare namespace AMap {
    interface Map {
        new (container: HTMLElement | string, options?: MapOptions): Map;
        setZoom(zoom: number): void;
        setCenter(center: LngLat): void;
        // 其他方法和属性
    }

    interface MapOptions {
        zoom?: number;
        center?: LngLat;
        // 其他选项
    }

    interface LngLat {
        lng: number;
        lat: number;
    }

    // 其他接口和类型
}
