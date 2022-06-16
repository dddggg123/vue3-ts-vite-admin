<template>
  <div class="map-container">
    <div id="amp-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  setup() {
    const dataMap = reactive({
      map: "",
      markerLayer: "",
      latitude: "", //纬度
      lngitude: "", //经度
    });
    const TMap = (window as any).TMap;
    onMounted(() => {
      initMap();
    });
    const initMap = () => {
      let center = new TMap.LatLng(dataMap.latitude, dataMap.lngitude);
      dataMap.map = new TMap.Map(document.getElementById("amp-container"), {
        center: center, //设置地图中心点坐标
        zoom: 11, //设置地图缩放级别
        viewMode: "2D",
      });
      (dataMap.map as any).on("click", clickHandler); // 绑定点击地图获取地理位置的事件
      markerLayer(); // 标记地图
    };
    // 重载地图
    const reloadMap = () => {
      (document.getElementById("amp-container") as any).innerHTML = "";
      dataMap.markerLayer = "";
      let center = new TMap.LatLng(dataMap.latitude, dataMap.lngitude);
      dataMap.map = new TMap.Map(document.getElementById("amp-container"), {
        center: center, //设置地图中心点坐标
        viewMode: "2D",
      });
      markerLayer();
    };
    // 点击获取经纬度
    const clickHandler = (evt: any) => {
      dataMap.latitude = evt.latLng.getLat().toFixed(6);
      dataMap.lngitude = evt.latLng.getLng().toFixed(6);
      (dataMap.map as any).setCenter(
        new TMap.LatLng(dataMap.latitude, dataMap.lngitude)
      );
      reloadMap();
    };
    //标记地图
    const markerLayer = () => {
      dataMap.markerLayer = new TMap.MultiMarker({
        map: dataMap.map, //指定地图容器
        //样式定义
        styles: {
          //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
          myStyle: new TMap.MarkerStyle({
            width: 25, // 点标记样式宽度（像素）
            height: 35, // 点标记样式高度（像素）
            // "src": '../../assets/logo.png',  //图片路径
            background: "pink",
            //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
            anchor: { x: 16, y: 32 },
          }),
        },
        //点标记数据数组
        geometries: [
          {
            id: "1", //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
            styleId: "myStyle", //指定样式id
            position: new TMap.LatLng(dataMap.latitude, dataMap.lngitude), //点标记坐标位置
          },
        ],
      });
    };
    const address = ref("");
    return {
      ...toRefs(dataMap),
      address,
    };
  },
});
</script>

<style lang="scss">
.map-container {
  padding: 5%;
}
</style>
