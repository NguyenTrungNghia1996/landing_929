<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">Công Ty Cổ Phần Tư Vấn Xây Dựng 929</h1>
        <p class="text-xl md:text-2xl max-w-3xl">Uy tín - Chất lượng - Tiến độ - Giá thành và hiệu quả</p>
      </div>
    </div>
    <!-- About Section -->
    <About_Section />
    <About_Activity />
    <!-- Experience Section -->
    <div class="container mx-auto px-4 py-12 md:py-16">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">Dự án tiêu biểu</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.TT" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" @click="openModal(project)">
          <NuxtImg placeholder="/placeholder.png" :src="project.image" :alt="project.project" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.project }}</h3>
            <p class="text-gray-600 mb-3">{{ project.investor }}</p>
            <p class="text-gray-700">{{ project.consulting_work }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <NuxtLink to="/project" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Xem thêm dự án </NuxtLink>
      </div>
    </div>

    <!-- Project Modal using AntDV -->
    <a-modal v-model:open="isModalOpen" :title="selectedProject?.name" width="80%" :footer="null" @cancel="closeModal">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <a-carousel arrows autoplay>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
              </div>
            </template>
            <div v-for="(image, index) in selectedProject?.gallery" :key="index">
              <NuxtImg placeholder="/placeholder.png" :src="image" :alt="`${selectedProject?.name} - Ảnh ${index + 1}`" class="w-full h-auto rounded-lg" />
            </div>
          </a-carousel>
        </div>
        <div>
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-blue-700 mb-2">Thông tin dự án</h4>
            <div class="space-y-2">
              <p class="text-gray-700"><span class="font-medium">Địa điểm:</span> {{ selectedProject?.investor }}</p>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-lg font-semibold text-blue-700 mb-2">Mô tả dự án</h4>
            <p class="text-gray-700">{{ selectedProject?.description }}</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-700 mb-2">Dịch vụ cung cấp</h4>
            <p class="text-gray-700">{{ selectedProject?.consulting_work }}</p>
          </div>
        </div>
      </div>
    </a-modal>
    <About_Team />
    <About_Working />
    <About_Contact />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Modal as AModal, Carousel as ACarousel } from "ant-design-vue";

const isModalOpen = ref(false);
const selectedProject = ref(null);

const projects = ref([
  {
    TT: 1,
    project: "Cải tạo, nâng cấp đường Hương Sơn, TP Thái Nguyên",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND P.Hương Sơn",
    image: "/images/projects/duong-huong-son.jpg",
    gallery: ["/images/projects/duong-huong-son.jpg", "/images/projects/duong-huong-son-1.jpg"],
    description: "Dự án cải tạo, nâng cấp đường Hương Sơn với chiều dài 1.2km, mặt đường rộng 7m. Bao gồm các hạng mục: san lấp mặt bằng, hệ thống thoát nước, chiếu sáng công cộng.",
  },
  {
    TT: 2,
    project: "Xử lý đất thừa, kè ốp mái ta luy dương và bổ sung rãnh thoát nước nút giao Tân Lập trên QL3 mới tỉnh Thái Nguyên",
    consulting_work: "Tư vấn thiết kế",
    investor: "Sở Giao thông vận tải Thái Nguyên",
    image: "/images/projects/tan-lap-ql3.jpg",
    gallery: ["/images/projects/tan-lap-ql3.jpg", "/images/projects/tan-lap-ql3-1.jpg", "/images/projects/tan-lap-ql3-2.jpg"],
    description: "Dự án xử lý đất thừa, kè ốp mái taluy dương và bổ sung rãnh thoát nước tại nút giao Tân Lập trên QL3, giúp cải thiện an toàn giao thông và hệ thống thoát nước.",
  },
  // {
  //   TT: 4,
  //   project: "Cải tạo, nâng cấp đường Lưu Nhân Chú và trục đường vào phường Hương Sơn TPTN",
  //   consulting_work: "Tư vấn thiết kế",
  //   investor: "UBND phường Hương Sơn",
  //   image: "/images/projects/luu-nhan-chu.jpg",
  //   gallery: ["/images/projects/luu-nhan-chu-1.jpg", "/images/projects/luu-nhan-chu-2.jpg"],
  //   description: "Dự án cải tạo, nâng cấp đường Lưu Nhân Chú và trục đường vào phường Hương Sơn với mục tiêu cải thiện giao thông khu vực, tăng cường kết nối hạ tầng đô thị.",
  // },
  {
    TT: 5,
    project: "Các công trình cải tạo đường GTNT, cầu bê tông cốt thép tại Thái Nguyên, Bắc Kạn",
    consulting_work: "Tư vấn thiết kế",
    investor: "Thành phố Thái Nguyên - Bắc Kạn",
    image: "/images/projects/gtnt-bac-kan.jpg",
    gallery: ["/images/projects/gtnt-bac-kan-2.jpg", "/images/projects/gtnt-bac-kan-3.jpg", "/images/projects/gtnt-bac-kan-4.jpg"],
    description: "Tập hợp các công trình tư vấn thiết kế tại Thái Nguyên và Bắc Kạn, bao gồm cải tạo đường giao thông nông thôn, xây dựng cầu bê tông cốt thép và hạ tầng liên quan.",
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
/* Custom style for carousel dots */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}

.ant-carousel :deep(.slick-dots li) {
  width: auto;
  height: auto;
  margin: 0 4px;
}

.ant-carousel :deep(.slick-dots li button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
}

.ant-carousel :deep(.slick-dots li.slick-active button) {
  background: #1890ff;
}
</style>
