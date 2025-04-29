<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="(slide, idx) in props.data" :key="idx">
        <NuxtLink :to="slide.url" class="w-full h-full flex items-center justify-center">
          <NuxtImg
          :src="slide.img"
          :alt="slide.img"
          class="w-full h-full object-cover"
        />
        </NuxtLink>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    // required: true,
    default: () => [
      {
        img: 'https://fe.nguyenanh-est.com/Slide/Hocvathitructuyen.png',
        alt: 'Slide 1',
        url: '/Slide/bannertet.png',
      },
      {
        img: 'https://fe.nguyenanh-est.com/Slide/Hocvathitructuyen.png',
        alt: 'Slide 2',
        url: '/Slide/Congthongtin.png',
      },
      {
        img: 'https://fe.nguyenanh-est.com//Slide/Hocvathitructuyen.png',
        alt: 'Slide 3',
        url: '/Slide/Hocvathitructuyen.png',
      },
      {
        img: 'https://fe.nguyenanh-est.com/Slide/Hocvathitructuyen.png',
        alt: 'Slide 4',
        url: '/Slide/Thediemdanhthongminh.png',
      },
      {
        img: 'https://fe.nguyenanh-est.com/Slide/Hocvathitructuyen.png',
        alt: 'Slide 5',
        url: '/Slide/Thongtingiaoduc.png',
      },
    ],
  },
})
const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  effect: 'Pagination',
  loop: true,
  autoplay: {
    delay: 5000,
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>