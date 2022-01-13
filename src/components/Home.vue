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
import Pill from './Pill.vue'

export default {
    components: { Pill },
    data: function () {
        return {
            files: [],
            grupedWords: [
                {name: 'you', amount: 900},
                {name: 'he', amount: 853},
                {name: 'i', amount: 123},
                {name: 'you1', amount: 900},
                {name: 'he1', amount: 853},
                {name: '1i', amount: 123},
                {name: 'you2', amount: 900},
                {name: 'he2', amount: 853},
                {name: 'i2', amount: 123}
            ]
        }
    },
    methods: {
      processSubtitles() {
        console.log(this.files);
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