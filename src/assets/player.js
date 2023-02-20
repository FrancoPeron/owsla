import { defineStore } from 'pinia'

import {ref} from 'vue'

export const playerStore = defineStore('player', () => {
  const song = ref("")

  return {song}
})