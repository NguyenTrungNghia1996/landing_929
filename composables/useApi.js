let ENDPOINTS = {};
import { useUserStore } from "~~/stores/userStore";
class Request {
  constructor() {
    this.handler = {
      onRequest({ request, options }) {},
      onRequestError({ request, options, error }) {},
      onResponse({ request, response, options }) {
        return response._data;
      },
      async onResponseError({ request, response, options }) {
        // if (response.status == 401) {
        //   const userStore = useUserStore();
        //   userStore.logout();
        //   return await navigateTo("/auth/login");
        // }
        return response._data;
      },
    };
    const userStore = useUserStore();
    this.TOKEN = `Bearer ${userStore.user.token}`;
  }
  
}
