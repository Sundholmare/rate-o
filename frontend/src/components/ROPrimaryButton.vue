<template>
  <button
    @click="onClick"
    class="ro-primary-button"
  >
    {{ text }}
    <img class="icon"
      @if="icon"
      :src="resolvedSrc"
    />
  </button>
  {{ console.log(resolvedSrc) }}
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface ROPrimaryButtonProps {
    text: string
    icon?: string
    onClick: () => void
  }

  const props = withDefaults(defineProps<ROPrimaryButtonProps>(), {
    text: 'Click me',
    onClick: () => console.log('Button clicked!'),
  })

  const resolvedSrc = computed(() => {
    return new URL(`../assets/icons/${props.icon}.svg`, import.meta.url).href
  })
</script>

<style scoped lang="scss">
  .ro-primary-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1.25rem;
    transition: background-color 0.3s ease;
    box-shadow: var(--bs-100);

    &:hover {
      background-color: var(--hover-color);
      color: var(--dark-color);
    }

    &:active {
      background-color: var(--hover-color);
    }

    .icon {
      width: 1.25rem;
      height: 1.25rem;
      color: red;
    }
  }
</style>
