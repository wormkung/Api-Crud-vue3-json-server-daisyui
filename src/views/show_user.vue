<template>
  <div>
    <div class="overflow-x-auto">
      <table class="table w-full mt-5">
        <!-- head -->
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th class="p-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="hover" v-for="(user, index) in store.users" :key="index">
            <th>{{ index + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link :to="`/edit_user/${user.id}`"
                ><button class="btn btn-link">Edit</button></router-link
              >
              <button
                @click="store.de(user.id)"
                class="btn btn-link text-red-500"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/api";
import { onMounted } from "vue";

const store = useCounterStore();

onMounted(() => {
  store.show();
});
</script>

<style lang="scss" scoped></style>
