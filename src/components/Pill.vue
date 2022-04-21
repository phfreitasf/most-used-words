<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  name: "vPills",

  props: ["name", "amount"],
};
</script>

<style scoped>
*
{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.pill {
  background-color: #ca314f;
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
    width: 45px;
    border-radius: 15px;
    background-color: rgb(94, 88, 180);
    color: rgb(255, 255, 255);
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>>

