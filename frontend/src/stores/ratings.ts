import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'

export const useRatingsStore = defineStore('Ratings', () => {
  const ratings = ref([])

  const getRatings = async () => {
    const url = 'http://localhost:5000/rating'
    const { error, data } = await useFetch(url).json()

    if (data.value) {
      ratings.value = data.value
    } else {
      console.error('Failed to fetch ratings:', error)
    }
  }

  return { ratings, getRatings }
})
