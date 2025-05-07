<template>
  <header class="h-[70px] md:h-[80px] w-full bg-white z-[100] border-b border-gray-300 fixed">
    <div class="container mx-auto h-full flex justify-between items-center px-4">
      <NuxtLink to="/" class="group flex items-center gap-1 hover:opacity-90 transition-opacity" aria-label="Trang chủ">
        <div class="text-center">
          <span class="block text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors"> CÔNG TY CỔ PHẦN TƯ VẤN </span>
          <span class="block text-lg md:text-xl font-extrabold text-primary tracking-wider mt-[-2px] relative">
            <span class="relative z-10">XÂY DỰNG 929</span>
            <span class="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 z-0 opacity-70 transform translate-y-1"></span>
          </span>
          <div class="h-[3px] bg-gradient-to-r from-blue-500 to-teal-400 mt-1 w-full transition-transform origin-left"></div>
        </div>
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="md:hidden p-2 focus:outline-none" aria-label="Menu mobile" aria-expanded="isMobileMenuOpen">
        <div class="w-6 h-6 relative">
          <span
            class="block absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ease-out"
            :class="{
              'rotate-45 top-1/2 -translate-y-1/2': isMobileMenuOpen,
              'top-1': !isMobileMenuOpen,
            }"
          ></span>
          <span
            class="block absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ease-out"
            :class="{
              'opacity-0': isMobileMenuOpen,
              'top-1/2 -translate-y-1/2': !isMobileMenuOpen,
            }"
          ></span>
          <span
            class="block absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ease-out"
            :class="{
              '-rotate-45 top-1/2 -translate-y-1/2': isMobileMenuOpen,
              'bottom-1': !isMobileMenuOpen,
            }"
          ></span>
        </div>
      </button>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center h-full">
        <ul class="flex h-full">
          <li v-for="(item, index) in mainMenuItems" :key="index" class="relative group h-full">
            <NuxtLink :to="item.url" class="h-full relative flex items-center px-3 lg:px-4 hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-teal-400 after:transition-all after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100" active-class="text-primary after:scale-x-100" exact-active-class="text-primary after:scale-x-100">
              <span class="font-medium text-sm lg:text-base">
                {{ item.label }}
              </span>
            </NuxtLink>
            <div v-if="item.children.length > 0" class="absolute left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white shadow-lg rounded-b-md py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
              <NuxtLink v-for="(child, childIndex) in item.children" :key="childIndex" :to="child.url" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 transition-colors duration-200" active-class="bg-blue-50 font-medium">
                {{ child.label }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <transition enter-active-class="transition-all duration-300 ease-out" leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-show="isMobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-[9999] overflow-hidden max-h-[calc(100vh-70px)] overflow-y-auto" @click.self="isMobileMenuOpen = false">
        <ul class="py-2">
          <li v-for="(item, index) in mainMenuItems" :key="index" class="border-b border-gray-100 last:border-0">
            <div v-if="item.children.length > 0" @click="toggleMobileSubmenu(index)" class="flex justify-between items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <span class="text-sm font-medium">{{ item.label }}</span>
              <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-90': activeMobileSubmenu === index }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <NuxtLink v-else :to="item.url" @click="isMobileMenuOpen = false" class="flex justify-between items-center px-4 py-3 hover:bg-gray-50 transition-colors text-sm font-medium" active-class="bg-gray-50">
              {{ item.label }}
            </NuxtLink>

            <transition @before-enter="beforeSubmenuEnter" @enter="submenuEnter" @leave="submenuLeave" :css="false">
              <ul v-if="item.children.length > 0 && activeMobileSubmenu === index" class="bg-gray-50 pl-6 overflow-hidden">
                <li v-for="(child, childIndex) in item.children" :key="childIndex" class="border-b border-gray-100 last:border-0">
                  <NuxtLink :to="child.url" @click="isMobileMenuOpen = false" class="block px-4 py-3 hover:bg-gray-100 transition-colors text-sm" active-class="bg-gray-100 font-medium">
                    {{ child.label }}
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false);
const activeMobileSubmenu = ref(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    activeMobileSubmenu.value = null;
  }
};

const toggleMobileSubmenu = index => {
  activeMobileSubmenu.value = activeMobileSubmenu.value === index ? null : index;
};

// Animation functions for submenu
const beforeSubmenuEnter = el => {
  el.style.height = "0";
  el.style.overflow = "hidden";
};

const submenuEnter = (el, done) => {
  const height = el.scrollHeight;
  el.style.transition = "height 0.3s ease-out";
  el.style.height = `${height}px`;

  el.addEventListener("transitionend", done, { once: true });
};

const submenuLeave = (el, done) => {
  el.style.transition = "height 0.2s ease-in";
  el.style.height = "0";

  el.addEventListener("transitionend", done, { once: true });
};

// Menu data
const mainMenuItems = ref([
  {
    label: "Trang chủ",
    url: "/",
    children: [],
  },
  {
    label: "Giới thiệu",
    url: "/introduce",
    children: [
      { label: "Về chúng tôi", url: "/introduce/about_us" },
      { label: "Lịch sử hình thành", url: "/introduce/history" },
    ],
  },
  {
    label: "Dự án",
    url: "/project",
    children: [
      // { label: "Dự án đã hoàn thành", url: "/project/hoan-thanh" },
      // { label: "Dự án đang thực hiện", url: "/project/dang-thuc-hien" },
    ],
  },
  {
    label: "Liên hệ",
    url: "/contact",
    children: [],
  },
]);

// Close menu when route changes
const route = useRoute();
watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
    activeMobileSubmenu.value = null;
  },
);
</script>
