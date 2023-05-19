import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { useRoute } from "vue-router";

export const useCounterStore = defineStore("api", () => {
  const users = ref({});

  const show = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}`)
      .then((res) => {
        users.value = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const user = ref({
    name: "",
    username: "",
    email: "",
  });

  const route = useRoute();

  const add = async () => {
    await axios
      .post(`${import.meta.env.VITE_API}`, {
        name: user.value.name,
        username: user.value.username,
        email: user.value.email,
      })
      .then((res) => {
        alert("successfully added information");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const user2 = ref({
    name: "",
    username: "",
    email: "",
  });

  const select = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}/${route.params.id}`)
      .then((res) => {
        user2.value.name = res.data.name;
        user2.value.username = res.data.username;
        user2.value.email = res.data.email;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const edit = async () => {
    await axios
      .put(`${import.meta.env.VITE_API}/${route.params.id}`, {
        name: user2.value.name,
        username: user2.value.username,
        email: user2.value.email,
      })
      .then((res) => {
        alert("successfully edit information");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const de = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_API}/${id}`)
      .then((res) => {
        
        show();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { show, users, add, user, user2, select, edit, de };
});
