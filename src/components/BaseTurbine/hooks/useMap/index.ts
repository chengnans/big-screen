// 高德地图hooks
import AMapLoader from "@amap/amap-jsapi-loader";
// 这里我示例用的是vantUI组件库进行提示的
import "vant/es/toast/style";
import { showFailToast } from "vant";
import { onUnmounted, ref } from "vue";
import useTurbine from "@/components/BaseTurbine/hooks/useTurbine";

/**
 * 高德地图hooks
 * @param domId 地图容器id
 */
export const useMap = ({ domId }: { domId?: string } = {}) => {
    const AMap = ref();
    const map = ref();
    async function initMap() {
        try {
            // @ts-ignore
            window._AMapSecurityConfig = {
                // 二者选其一，无serviceHost就优先使用securityJsCode
                // 高德地图密匙
                securityJsCode: '0f7a51d8a0805f3a3e61dc6e07679d46'
            //     // 后台远程服务地址
            //     // serviceHost: AMAP_MAP_SERVICE_HOST
            };
            AMap.value = await AMapLoader.load({
                key: '6b35d31f0369f9d8bf310ea9f80c96e3', // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0", // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
                plugins: [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            });
            // 如果传入地图容器id，直接创建地图实例
            map.value = domId && new AMap.value.Map(domId);
        } catch (error) {
            console.log(error);
            // 提示错误
            // showFailToast((error as any)?.message || "Has Error");
        }
    }
    // 销毁地图
    function destroyMap() {
        map.value && map.value.destroy();
    }
    onUnmounted(() => {
        destroyMap();
    });
    return {
        map,
        AMap,
        initMap
    };
};
export default useMap
