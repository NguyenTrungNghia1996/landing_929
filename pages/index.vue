<template>
  <div class="">
    <!-- Hero Section -->
    <div class="bg-blue-800 text-white overflow-hidden relative">
      <div class="container mx-auto px-4 py-20 md:py-32">
        <div class="z-10 max-w-2xl relative">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Giải pháp xây dựng toàn diện</h1>
          <p class="text-xl md:text-2xl mb-8">Với hơn 15 năm kinh nghiệm trong lĩnh vực tư vấn, thiết kế và giám sát xây dựng</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/introduce/about_us" class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"> Dịch vụ của chúng tôi </NuxtLink>
            <NuxtLink to="/contact" class="px-6 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"> Liên hệ ngay </NuxtLink>
          </div>
        </div>
        <div class="absolute right-0 top-0 h-full w-1/2 bg-blue-700 transform skew-x-12 origin-top-right hidden lg:block"></div>
      </div>
    </div>

    <!-- Services Section -->
    <Index_Services />

    <!-- About Section -->
    <Index_About />

    <!-- Projects Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">Dự án tiêu biểu</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Chúng tôi đã thực hiện hơn 100 dự án từ quy mô nhỏ đến lớn tại Thái Nguyên và các tỉnh lân cận</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in projects" :key="index" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" @click="openModal(project)">
          <NuxtImg placeholder="/placeholder.png" :src="project.images[0]" :alt="project.name" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
            <p class="text-gray-600 mb-3">{{ project.location }}</p>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-blue-600">{{ project.year }}</span>
              <span class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết →</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <NuxtLink to="/project" class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-block"> Xem tất cả dự án </NuxtLink>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <Index_Choose/>
    <!-- CTA Section -->
    <div class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Bạn cần tư vấn về dự án xây dựng?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Liên hệ ngay với chúng tôi để được hỗ trợ và tư vấn miễn phí</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold"> Gửi yêu cầu </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center justify-center px-6 py-3 border border-white rounded-lg hover:bg-blue-500 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>0986 108 999</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Project Modal using Ant Design -->
    <a-modal v-model:open="isModalOpen" :title="selectedProject?.name" width="80%" :footer="null" @cancel="closeModal">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <a-carousel arrows autoplay>
            <div v-for="(image, index) in selectedProject?.images" :key="index">
              <NuxtImg placeholder="/placeholder.png" :src="image" :alt="`${selectedProject?.name} - Ảnh ${index + 1}`" class="w-full h-auto rounded-lg" />
            </div>
          </a-carousel>
        </div>
        <div>
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-blue-700 mb-2">Thông tin dự án</h4>
            <div class="space-y-2">
              <p class="text-gray-700"><span class="font-medium">Địa điểm:</span> {{ selectedProject?.location }}</p>
              <!-- <p class="text-gray-700"><span class="font-medium">Năm thực hiện:</span> {{ selectedProject?.year }}</p> -->
              <!-- <p class="text-gray-700"><span class="font-medium">Chủ đầu tư:</span> {{ selectedProject?.investor }}</p> -->
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-lg font-semibold text-blue-700 mb-2">Mô tả dự án</h4>
            <p class="text-gray-700">{{ selectedProject?.description }}</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-700 mb-2">Dịch vụ cung cấp</h4>
            <p class="text-gray-700">{{ selectedProject?.services }}</p>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Modal as AModal, Carousel as ACarousel } from "ant-design-vue";

const isModalOpen = ref(false);
const selectedProject = ref(null);

const projects = ref([
  {
    name: "Cải tạo, nâng cấp đường Hương Sơn, TP Thái Nguyên",
    location: "Thái Nguyên",
    year: "",
    investor: "UBND P.Hương Sơn",
    description: "Dự án cải tạo, nâng cấp đường Hương Sơn với chiều dài 1.2km, mặt đường rộng 7m. Bao gồm các hạng mục: san lấp mặt bằng, hệ thống thoát nước, chiếu sáng công cộng.",
    services: "Tư vấn thiết kế",
    images: ["/images/projects/duong-huong-son.jpg", "/images/projects/duong-huong-son-1.jpg"],
  },
  {
    name: "Xử lý đất thừa, kè ốp mái ta luy dương và bổ sung rãnh thoát nước nút giao Tân Lập trên QL3 mới tỉnh Thái Nguyên",
    location: "Thái Nguyên",
    year: "",
    investor: "Sở Giao thông vận tải Thái Nguyên",
    description: "Dự án xử lý đất thừa, kè ốp mái taluy dương và bổ sung rãnh thoát nước tại nút giao Tân Lập trên QL3, giúp cải thiện an toàn giao thông và hệ thống thoát nước.",
    services: "Tư vấn thiết kế",
    images: ["/images/projects/tan-lap-ql3.jpg", "/images/projects/tan-lap-ql3-1.jpg", "/images/projects/tan-lap-ql3-2.jpg"],
  },
  {
    name: "Các công trình cải tạo đường GTNT, cầu bê tông cốt thép tại Thái Nguyên, Bắc Kạn",
    location: "Thành phố Thái Nguyên - Bắc Kạn",
    year: "",
    investor: "Ban CHQS huyện Phú Lương",
    description: "Các công trình cải tạo đường GTNT, cầu bê tông cốt thép tại Thái Nguyên, Bắc Kạn",
    services: "Tư vấn thiết kế",
    images: ["/images/projects/gtnt-bac-kan-2.jpg", "/images/projects/gtnt-bac-kan-3.jpg", "/images/projects/gtnt-bac-kan-4.jpg"],
  },
]);

const openModal = project => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style>
/* Custom styles for Ant Design components */
.ant-modal-title {
  @apply text-2xl font-bold text-blue-800;
}

.ant-carousel .slick-slide {
  @apply px-2;
}

.ant-carousel .slick-arrow {
  @apply text-blue-600;
}

.ant-carousel .slick-arrow:hover {
  @apply text-blue-800;
}
</style>
