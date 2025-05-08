<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-blue-800 text-white py-20 md:py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Dự án tiêu biểu</h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto">Hơn 200 dự án đã thực hiện tại Thái Nguyên và các tỉnh lân cận</p>
      </div>
    </div>

    <!-- Projects Filter -->
    <div class="container mx-auto px-4 py-12">
      <!-- <div class="mb-8">
        <a-radio-group v-model:value="activeCategory" button-style="solid" @change="filterProjects" class="w-full overflow-x-auto pb-2">
          <a-radio-button v-for="category in categories" :key="category" :value="category" class="whitespace-nowrap">
            {{ category }}
          </a-radio-button>
        </a-radio-group>
      </div> -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in paginatedProjects" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <!-- Project Image -->
          <div class="h-48 overflow-hidden">
            <NuxtImg placeholder="/placeholder.png" :src="project.image" :alt="project.project" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>

          <div class="p-6">
            <div class="flex items-start mb-4">
              <div class="bg-blue-100 p-3 rounded-full mr-4 transition-colors duration-200 group-hover:bg-blue-200">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2 line-clamp-2">{{ shortenProjectName(project.project) }}</h3>
                <p class="text-gray-500 text-sm mb-3"><span class="font-medium">Chủ đầu tư:</span> {{ project.investor || "" }}</p>
              </div>
            </div>

            <div class="flex justify-between items-center border-t pt-4">
              <a-tag :color="project.consulting_work.includes('thiết kế') ? 'blue' : 'green'">
                {{ project.consulting_work }}
              </a-tag>
              <a-button type="link" @click="openModal(project)" class="flex items-center p-0">
                Chi tiết
                <template #icon><right-outlined /></template>
              </a-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-12" v-if="filteredProjects.length > projectsPerPage">
        <a-pagination v-model:current="currentPage" :total="filteredProjects.length" :pageSize="projectsPerPage" show-less-items />
      </div>
    </div>

    <!-- Project Modal - Redesigned -->
    <a-modal
      v-model:open="isModalOpen"
      :title="null"
      width="100%"
      :footer="null"
      @cancel="closeModal"
      class="max-w-2xl"
      :wrap-class-name="'project-modal'"
      :closable="false"
    >
      <div class="modal-content">
        <!-- Close Button (Mobile) -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 z-50 bg-white/80 rounded-full p-2 shadow-md sm:hidden"
        >
          <close-outlined class="text-lg" />
        </button>

        <!-- Image Gallery -->
        <div class="relative">
          <a-carousel 
            v-if="selectedProject?.gallery?.length > 0" 
            dots-class="custom-dots"
            class="project-gallery"
          >
            <div v-for="(img, idx) in selectedProject.gallery" :key="idx" class="carousel-image">
              <NuxtImg 
                placeholder="/placeholder.png" 
                :src="img" 
                class="w-full h-48 sm:h-64 object-cover" 
              />
            </div>
          </a-carousel>
          <div v-else class="h-48 sm:h-64 bg-gray-200 flex items-center justify-center">
            <NuxtImg 
              placeholder="/placeholder.png" 
              :src="selectedProject?.image" 
              class="w-full h-full object-cover" 
            />
          </div>
        </div>

        <!-- Project Info -->
        <div class="p-4">
          <!-- Project Title -->
          <h3 class="text-xl font-bold text-gray-800 mb-1">
            {{ selectedProject?.project }}
          </h3>
          
          <!-- Investor -->
          <p class="text-gray-600 text-sm mb-3">
            {{ selectedProject?.investor || "Không có thông tin" }}
          </p>

          <!-- Work Type Badge -->
          <a-tag 
            :color="selectedProject?.consulting_work.includes('thiết kế') ? 'blue' : 'green'"
            class="mb-4"
          >
            {{ selectedProject?.consulting_work }}
          </a-tag>

          <!-- Project Description -->
          <div class="mb-4">
            <div class="text-blue-700 font-medium mb-2">Mô tả dự án</div>
            <p class="text-gray-700 text-sm whitespace-pre-line">
              {{ selectedProject?.description || "Không có mô tả" }}
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-between mt-6">
            <a-button 
              type="primary" 
              @click="closeModal"
              class="flex-1 sm:hidden"
            >
              Đóng
            </a-button>
            <a-button 
              v-if="selectedProject?.gallery?.length > 1"
              type="default" 
              @click="openGalleryFullscreen"
              class="hidden sm:inline-flex items-center"
            >
              <picture-outlined class="mr-1" />
              Xem hình ảnh
            </a-button>
          </div>
        </div>
      </div>
    </a-modal>

    <!-- Fullscreen Gallery Modal -->
    <a-modal
      v-model:open="isGalleryFullscreen"
      :title="'Hình ảnh dự án'"
      width="100%"
      :footer="null"
      @cancel="isGalleryFullscreen = false"
      class="gallery-fullscreen"
      :wrap-class-name="'gallery-modal'"
    >
      <a-carousel 
        v-if="selectedProject?.gallery?.length > 0" 
        arrows 
        dots-class="custom-dots"
        class="fullscreen-gallery"
      >
        <div v-for="(img, idx) in selectedProject.gallery" :key="idx" class="carousel-image">
          <NuxtImg 
            placeholder="/placeholder.png" 
            :src="img" 
            class="w-full h-full object-contain" 
          />
        </div>
      </a-carousel>
    </a-modal>

    <!-- Stats Section -->
    <div class="bg-blue-500 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">200+</div>
            <div class="text-lg">Dự án đã hoàn thành</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">15+</div>
            <div class="text-lg">Năm kinh nghiệm</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">20+</div>
            <div class="text-lg">Kỹ sư, kiến trúc sư</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">10+</div>
            <div class="text-lg">Tỉnh thành hoạt động</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Bạn cần tư vấn về dự án xây dựng?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Liên hệ ngay với chúng tôi để được hỗ trợ và tư vấn miễn phí</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold"> Gửi yêu cầu </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center justify-center px-6 py-3 border border-white rounded-lg hover:bg-blue-500 transition-colors">
            <phone-outlined class="mr-2" />
            <span>0986 108 999</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RightOutlined, CloseOutlined, PictureOutlined, PhoneOutlined } from '@ant-design/icons-vue';

const projects = ref([
  {
    TT: 1,
    project: "Cải tạo, nâng cấp đường Hương Sơn, TP Thái Nguyên",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND phường Hương Sơn – TPTN",
    image: "/images/projects/duong-huong-son.jpg",
    gallery: ["/images/projects/duong-huong-son.jpg", "/images/projects/duong-huong-son-1.jpg"],
    description: "Dự án cải tạo, nâng cấp đường Hương Sơn dài 1.2km, mặt đường rộng 7m, gồm san lấp mặt bằng, hệ thống thoát nước, chiếu sáng công cộng.",
  },
  {
    TT: 2,
    project: "Xử lý đất thừa, kè ốp mái taluy dương và bổ sung rãnh thoát nước nút giao Tân Lập trên QL3 mới tỉnh Thái Nguyên",
    consulting_work: "Tư vấn thiết kế",
    investor: "Sở Giao thông vận tải Thái Nguyên",
    image: "/images/projects/tan-lap-ql3.jpg",
    gallery: ["/images/projects/tan-lap-ql3.jpg", "/images/projects/tan-lap-ql3-1.jpg", "/images/projects/tan-lap-ql3-2.jpg"],
    description: "Dự án xử lý đất thừa, kè mái taluy dương và bổ sung rãnh thoát nước tại nút giao Tân Lập, giúp cải thiện an toàn giao thông và hệ thống thoát nước.",
  },
  {
    TT: 3,
    project: "Xây dựng, nâng cấp doanh trại Ban CHQS huyện Phú Lương",
    consulting_work: "Tư vấn thiết kế",
    investor: "Bộ Chỉ huy Quân Sự tỉnh Thái Nguyên",
    image: "/images/projects/ban-chqs-phu-luong.jpg",
    gallery: ["/images/projects/ban-chqs-phu-luong.jpg"],
    description: "Dự án xây dựng, nâng cấp doanh trại Ban CHQS huyện Phú Lương gồm đường vào đơn vị, cổng chính, sân, cải tạo nhà bếp ăn, nâng cao cơ sở vật chất.",
  },
  {
    TT: 4,
    project: "Cải tạo, nâng cấp đường Lưu Nhân Chú và nhánh đường vào UBND phường Hương Sơn – TPTN",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND phường Hương Sơn – TPTN",
    image: "/images/projects/luu-nhan-chu.jpg",
    gallery: ["/images/projects/luu-nhan-chu-1.jpg", "/images/projects/luu-nhan-chu-2.jpg"],
    description: "Dự án cải tạo, nâng cấp đường Lưu Nhân Chú và nhánh vào UBND phường Hương Sơn nhằm cải thiện giao thông và hạ tầng khu vực.",
  },
  {
    TT: 5,
    project: "Sửa chữa, nâng cấp tuyến đường giao thông từ trụ sở UBND xã Tân Khánh đi Hoàng Mai huyện Phú Bình",
    consulting_work: "Tư vấn thiết kế",
    investor: "Ban QLDA ĐTXD huyện Phú Bình, tỉnh Thái Nguyên",
    image: "/images/projects/_5.jpg",
    gallery: ["/images/projects/_5.jpg"],
    description: "Dự án nâng cấp tuyến đường giao thông kết nối UBND xã Tân Khánh đi Hoàng Mai, nâng cao chất lượng hạ tầng giao thông nông thôn.",
  },
  {
    TT: 6,
    project: "Nâng cấp, mở rộng tuyến đường Lương Thế Vinh – TP Thái Nguyên",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND phường Quang Trung",
    image: "/images/projects/6.jpg",
    gallery: ["/images/projects/6.jpg"],
    description: "Dự án nâng cấp, mở rộng tuyến đường Lương Thế Vinh, giúp mở rộng lưu thông, giảm ùn tắc giao thông đô thị.",
  },
  {
    TT: 7,
    project: "Cải tạo, nâng cấp khuôn viên đài tưởng niệm liệt sỹ xã Quyết Thắng TPTN",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND xã Quyết Thắng",
    image: "/images/projects/_7.jpg",
    gallery: ["/images/projects/_7.jpg"],
    description: "Cải tạo, nâng cấp khuôn viên đài tưởng niệm liệt sỹ xã Quyết Thắng TPTN",
  },
  {
    TT: 8,
    project: "Đường GTNT xã Thịnh Đức – TP Thái Nguyên",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND xã Thịnh Đức – TPTN",
    image: "/images/projects/_8.jpg",
    gallery: ["/images/projects/_8.jpg"],
    description: "Dự án đường giao thông nông thôn tại xã Thịnh Đức gồm các xóm Ao Sen, Cây Thị, Đồng Chanh, Đức Cường, Đầu Phần, Tân Đức, góp phần phát triển hạ tầng nông thôn.",
  },
  {
    TT: 9,
    project: "Nâng cấp, cải tạo đường vào Công ty CP Giấy Hoàng Văn Thụ, phường Quan Triều – TP Thái Nguyên",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND phường Quan Triều - TPTN",
    image: "/images/projects/9.jpg",
    gallery: ["/images/projects/9.jpg"],
    description: "Dự án cải tạo, nâng cấp tuyến đường vào Công ty CP Giấy Hoàng Văn Thụ giúp đảm bảo giao thông thuận lợi cho hoạt động sản xuất kinh doanh.",
  },
  {
    TT: 10,
    project: "Khu tái định cư tổ 4 Tân Thịnh thuộc dự án đường Bắc Sơn kéo dài – TP Thái Nguyên",
    consulting_work: "Tư vấn giám sát",
    investor: "Ban QLDA ĐTXD TP Thái Nguyên, tỉnh Thái Nguyên",
    image: "/images/projects/_10.jpg",
    gallery: ["/images/projects/_10.jpg"],
    description: "Dự án khu tái định cư tổ 4 Tân Thịnh thuộc tuyến đường Bắc Sơn kéo dài nhằm bố trí chỗ ở mới cho các hộ dân bị ảnh hưởng bởi giải phóng mặt bằng.",
  },
  {
    TT: 11,
    project: "Xây dựng cầu tổ 12, phường Hương Sơn, TPTN",
    consulting_work: "Tư vấn thiết kế",
    investor: "UBND phường Hương Sơn",
    image: "/images/projects/11.jpg",
    gallery: ["/images/projects/11.jpg"],
    description: "Xây dựng cầu tổ 12, phường Hương Sơn, TPTN",
  },
]);

const selectedProject = ref(null);
const isModalOpen = ref(false);
const isGalleryFullscreen = ref(false);
const activeCategory = ref("Tất cả");
const currentPage = ref(1);
const projectsPerPage = 6;

const categories = ref(["Tất cả", "Tư vấn thiết kế", "Giám sát thi công", "Khảo sát địa hình", "Hạ tầng giao thông", "Công trình dân dụng"]);

// Lọc dự án theo danh mục
const filteredProjects = computed(() => {
  let filtered = projects.value;

  if (activeCategory.value !== "Tất cả") {
    filtered = projects.value.filter(project => project.consulting_work.includes(activeCategory.value));
  }

  return filtered;
});

// Phân trang
const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * projectsPerPage;
  return filteredProjects.value.slice(startIndex, startIndex + projectsPerPage);
});

// Các hàm hỗ trợ
const shortenProjectName = (name) => {
  if (name.length > 50) {
    return name.substring(0, 50) + "...";
  }
  return name;
};

// Các hàm xử lý modal
const openModal = (project) => {
  selectedProject.value = JSON.parse(JSON.stringify(project));
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};

const openGalleryFullscreen = () => {
  isGalleryFullscreen.value = true;
};

const filterProjects = () => {
  currentPage.value = 1;
};
</script>

<style>
/* Project Modal Styles */
.project-modal .ant-modal-content {
  @apply p-0 overflow-hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.project-modal .ant-modal-body {
  @apply p-0 flex-1 overflow-y-auto;
}

.project-gallery .slick-slide {
  @apply h-48 sm:h-64;
}

/* Fullscreen Gallery Styles */
.gallery-modal .ant-modal-content {
  @apply h-full flex flex-col;
}

.gallery-modal .ant-modal-body {
  @apply flex-1 p-0;
}

.fullscreen-gallery {
  @apply h-full;
}

.fullscreen-gallery .slick-slide {
  @apply h-[calc(100vh-110px)] flex items-center justify-center;
}

/* Custom dots for carousel */
.ant-carousel .slick-dots.custom-dots li button {
  @apply bg-gray-400;
}

.ant-carousel .slick-dots.custom-dots li.slick-active button {
  @apply bg-blue-600 w-4;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .project-modal {
    @apply top-0 m-0 w-full max-w-none h-full;
  }
  
  .project-modal .ant-modal-content {
    @apply rounded-none h-full;
  }
  
  .project-gallery .slick-slide {
    @apply h-48;
  }
  
  .ant-radio-button-wrapper {
    @apply px-2 text-sm;
  }
}

/* Pagination styles */
.ant-pagination-item-active {
  @apply border-blue-600 bg-blue-600 text-white;
}

.ant-pagination-item-active a {
  @apply text-white;
}

.ant-pagination-item:hover {
  @apply border-blue-400;
}

.ant-pagination-item:hover a {
  @apply text-blue-600;
}

.ant-tag {
  @apply m-0;
}
</style>