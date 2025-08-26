import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRatingsStore = defineStore('Ratings', () => {
  const ratings = ref([])

  const getRatings = async () => {
    const response = await fetch('http://localhost:5000/rating')

    if (response.ok) {
      ratings.value = await response.json()
    } else {
      console.error('Failed to fetch ratings:', response.statusText)
    }
  }

  return { ratings, getRatings }
})
