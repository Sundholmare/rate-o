<template>
  <div class="home-content">
    <div class="image-container">
      <img
        src="@/assets/images/home-content-image.jpg"
        alt="Home Content Image"
      />
      <h1>
        {{ title }}
      </h1>
      <div class="button-container">
        <ROPrimaryButton
          text="Click me"
          icon="house"
          @click="() => console.log('Button clicked!')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ROPrimaryButton } from '.'
  interface HomeContentProps {
    title: string
  }

  withDefaults(defineProps<HomeContentProps>(), {
    title: 'Hello world!',
  })
</script>

<style scoped lang="scss">
  .home-content {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border: 1px solid var(--border-color);
    min-width: 15rem;
    max-height: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--bs-100);
  }

  .image-container {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;

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
    }

    .button-container {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      display: flex;
    }
  }
</style>
