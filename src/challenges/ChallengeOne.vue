<template>
  <h1>Point Box</h1>
  <div class="buttons">
    <button @click="undoPoint">Undo Point</button>
    <button @click="redoPoint">Redo Point</button>
  </div>
  <div class="point-box" @click="plotPoint">
    <div
      v-for="point in points"
      class="point"
      :style="{ top: `${point.y}%`, left: `${point.x}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const points = ref([]);
const deletedPoints = ref([]);

const plotPoint = (e) => {
  points.value.push({
    x: (e.offsetX / window.innerWidth) * 100,
    y: (e.offsetY / window.innerHeight) * 100,
  });
};

const undoPoint = () => {
  const deletedPoint = points.value.pop();
  deletedPoints.value.push(deletedPoint);
};

const redoPoints = () => {
  const reAddedPoint = deletedPoints.value.pop();
  points.value.push(reAddedPoint);
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 48px;
  margin-bottom: 16px;
}

.point-box {
  position: relative;
  height: 100vh;
  background-color: gray;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.point {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
}

.buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}
</style>
