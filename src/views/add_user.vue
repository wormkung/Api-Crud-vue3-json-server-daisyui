<template>
  <div>
    <div class="form-control mt-10">
      <label class="input-group">
        <span>Name</span>
        <input
          required
          type="text"
          placeholder="info"
          class="input input-bordered w-2/4"
          v-model="store.user.name"
        />
      </label>
    </div>
    <div class="form-control mt-5">
      <label class="input-group">
        <span>Username</span>
        <input
          required
          type="text"
          placeholder="iofo99"
          class="input input-bordered w-2/4"
          v-model="store.user.username"
        />
      </label>
    </div>
    <div class="form-control mt-5">
      <label class="input-group">
        <span>Email</span>
        <input
          required
          minlength="1"
          type="email"
          placeholder="info@site.com"
          class="input input-bordered w-2/4"
          v-model="store.user.email"
        />
      </label>
    </div>
    <button
      @click.prevent="store.add"
      class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5"
    >
      Save
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/api";
const store = useCounterStore();
</script>

<style scoped></style>
