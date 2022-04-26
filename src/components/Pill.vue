<template>
  <div class="pill" :class="{less100, less400, over401}">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  name: "vPills",

  // props: ['name','amount'],

  props: {
    name: String,
    amount: Number,
    less100: { type: Boolean },
    less400: { type: Boolean },
    over401: { type: Boolean }
    }
}
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.pill {
  background-color: #92529b;
  color: #fff;
  margin: 10px;

  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
}

.pill .name {
  margin-left: 15px;
}

.pill .amount {
  margin: 15px;
  height: 35px;
  width: 60px;
  border-radius: 15px;
  background-color: rgb(94, 88, 180);
  color: rgb(255, 255, 255);
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.less100 {
  background-color: #8e8fbb;
  color: #fff;
  margin: 10px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
}

.less400 {
  background-color: #4245d3;
  color: #fff;
  margin: 10px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
}

.over401 {
  background-color: #b8353c;
  color: #fff;
  margin: 10px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
}
</style>