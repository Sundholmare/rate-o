<template>
  <div class="home-content">
    <!-- Hero content -->
    <div
      @mouseenter="inFocus = true"
      @mouseleave="inFocus = false"
      class="image-container"
    >
      <img
        src="@/assets/images/home-content-image.jpg"
        alt="Home Content Image"
      />
      <TransitionGroup name="fade">
        <h1 v-if="inFocus">
          {{ title }}
        </h1>
        <div
          v-if="inFocus"
          class="button-container"
        >
          <ROPrimaryButton
            text="Click me"
            icon="house"
            @click="() => console.log('Button clicked!')"
          />
        </div>
      </TransitionGroup>
    </div>

    <!-- List content -->
    <div class="rating-list">
      <ul>
        <h2 class="list-header">The Horus Heresy books</h2>
        <li>
          <RORateItem v-bind="mockBook" />
        </li>
        <li>
          <RORateItem v-bind="mockBook" />
        </li>
        <li>
          <RORateItem v-bind="mockBook" />
        </li>
        <li>
          <RORateItem v-bind="mockBook" />
        </li>
        <li>
          <RORateItem v-bind="mockBook" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ROPrimaryButton, RORateItem } from '.'
  import { ref, TransitionGroup } from 'vue'

  interface HomeContentProps {
    title: string
  }

  withDefaults(defineProps<HomeContentProps>(), {
    title: 'Hello world!',
  })

  const mockBook = {
    title: 'Fear to Tread',
    author: 'James Swallow',
    rating: 4.8,
    review: 'A story in epic proportions that gave you a glimpse into the ferocity of the Blood Angels and their own internal struggles.',
    description: 'The story of the Blood Angels and their first encounter with the heresy.',
  }

  const inFocus = ref(false)
</script>

<style scoped lang="scss">
  .home-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--white);
    border: 1px solid var(--border-color);
    min-width: 15rem;
    max-height: 100%;
    border-radius: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: var(--bs-100);
  }

  .image-container {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 1rem;

    img {
      width: 100%;
      border-radius: 0.5rem;
      max-height: 500px;
      object-fit: cover;
    }

    h1 {
      font-size: 3rem;
      color: #fff;
      position: absolute;
      top: 0;
      border-radius: 0.5rem;
      transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out;
    }

    .button-container {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      display: flex;
    }
  }

  .rating-list {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
