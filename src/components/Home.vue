<template>
  <div>
    <v-container fluid></v-container>
    <div class="pills">
      <v-pills
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </div>
</template>

<script>
import vPills from "./Pill.vue";
export default {
  name: "vHome",
  components: { vPills },

  data() {
    return {
      groupedWords: [
        { name: "i", amount: 1234 },
        { name: "you", amount: 900 },
        { name: "he", amount: 115 },
      ],
    };
  },
};
</script>

<style>
.pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>