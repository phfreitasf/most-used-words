<template>
  <div>
    <v-container >
      <v-form> 
        <v-file-input 
          counter
          color="#003"
          label="Selecione as Legendas SRT"
          prepend-icon="mdi-message-text"
          multiple
          outlined
          append-icon="mdi-send"
          chips
          v-model="files"
          @click:append="processSubtitles"
        />
      </v-form>
      <div class="pills">
        <v-pills
          v-for="word in groupedWords"
          :key="word.name"
          :name="word.name"
          :amount="word.amount"
          :less100="word.amount <= 100"
          :less400="word.amount <= 400 && word.amount > 100"
          :over401="word.amount >= 400"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import vPills from "./Pill.vue";
// const electron = eval('require')("electron")
const { ipcRenderer } = window.require("electron");

export default {
  name: "vHome",
  components: { vPills },

  data() {
    return {
      files: [],
      groupedWords: [],
    };
  },

  methods: {
    processSubtitles() {
      
      const paths = this.files.map(f => f.path)
      // console.log(paths)

      ipcRenderer.send('process:Subtitle', paths);
      ipcRenderer.on('process:Subtitle', (event, resp) => {
        //console.log(resp)
        this.groupedWords = resp;
      });
    },
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