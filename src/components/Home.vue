<template>
  <v-container fluid>
     <v-form>
      <v-file-input 
        label="Select the subtitles"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple 
        chips 
        v-model="files"
        @click:append-outer="processSubtitles"
      />

     </v-form>
      <div class="pills">
          <Pill v-for="word in grupedWords" :key="word.name"
           :name="word.name" :amount="word.amount"/>
      </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron';
import Pill from './Pill.vue';

export default {
    components: { Pill },
    data: function () {
        return {
            files: [],
            grupedWords: []
        }
    },
    methods: {
      processSubtitles() {
        const paths = this.files.map(f => f.path)
        ipcRenderer.send('process-subtitles', paths);
        ipcRenderer.on('process-subtitles', (event, resp) => {
          this.grupedWords = resp
        });
      }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>