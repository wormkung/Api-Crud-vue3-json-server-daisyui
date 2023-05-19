<template>
  <div>
    <div class="form-control mt-10">
      <label class="input-group">
        <span>Name</span>
        <input
          type="text"
          placeholder="info"
          class="input input-bordered w-2/4"
          v-model="store.user2.name"
        />
      </label>
    </div>
    <div class="form-control mt-5">
      <label class="input-group">
        <span>Username</span>
        <input
          type="text"
          placeholder="iofo99"
          class="input input-bordered w-2/4"
          v-model="store.user2.username"
        />
      </label>
    </div>
    <div class="form-control mt-5">
      <label class="input-group">
        <span>Email</span>
        <input
          type="email"
          placeholder="info@site.com"
          class="input input-bordered w"
          v-model="store.user2.email"
        />
      </label>
    </div>
    <button
      @click="store.edit"
      class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5"
    >
      Edit
    </button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/api";

const store = useCounterStore();
onMounted(() => {
  store.select();
});
</script>

<style scoped></style>
