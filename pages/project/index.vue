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
      <!-- <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button v-for="(category, index) in categories" :key="index" @click="filterProjects(category)" :class="['px-4 py-2 rounded-full font-medium transition-colors duration-200', activeCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-white border border-gray-300 hover:bg-gray-100']">
          {{ category }}
        </button>
      </div> -->

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in paginatedProjects" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
          <div class="flex items-start mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4 transition-colors duration-200 group-hover:bg-blue-200">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2 line-clamp-2">{{ shortenProjectName(project.project) }}</h3>
              <p class="text-gray-500 text-sm mb-3"><span class="font-medium">Chủ đầu tư:</span> {{ project.investor || "" }}</p>
              <p class="text-sm text-gray-500 mb-4">
                <span v-if="getProjectYear(project.project)" class="bg-gray-100 px-2 py-1 rounded transition-colors duration-200 hover:bg-gray-200"> Năm: {{ getProjectYear(project.project) }} </span>
                <span v-else class="bg-gray-100 px-2 py-1 rounded transition-colors duration-200 hover:bg-gray-200"> Đã hoàn thành </span>
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center border-t pt-4">
            <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full transition-colors duration-200 hover:bg-blue-200">
              {{ project.consulting_work }}
            </span>
            <button @click="openModal(project)" class="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-200">
              Chi tiết
              <svg class="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Pagination with ellipsis -->
      <div class="flex justify-center mt-12" v-if="filteredProjects.length > projectsPerPage">
        <nav class="flex items-center space-x-2">
          <button @click="prevPage" :disabled="currentPage === 1" class="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200" :class="currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>

          <template v-for="(page, index) in visiblePages" :key="index">
            <button v-if="page === '...'" disabled class="w-10 h-10 flex items-center justify-center rounded-full text-gray-500">...</button>
            <button v-else @click="goToPage(page)" class="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200" :class="page === currentPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'">
              {{ page }}
            </button>
          </template>

          <button @click="nextPage" :disabled="currentPage === totalPages" class="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200" :class="currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </nav>
      </div>
    </div>

    <!-- Project Modal -->
    <transition enter-active-class="transition-opacity duration-300 ease-out" leave-active-class="transition-opacity duration-200 ease-in" enter-from-class="opacity-0" leave-to-class="opacity-0">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click.self="closeModal">
        <transition enter-active-class="transition-all duration-300 ease-out" leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 translate-y-4" leave-to-class="opacity-0 translate-y-4">
          <div v-if="selectedProject" class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl transform transition-all duration-300">
            <div class="p-6">
              <div class="flex justify-between items-start mb-6">
                <div>
                  <h3 class="text-2xl font-bold">{{ selectedProject.project }}</h3>
                  <p class="text-gray-600 mt-2">{{ selectedProject.investor }}</p>
                </div>
                <button @click="closeModal" class="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div class="space-y-6">
                <div class="bg-gray-50 p-4 rounded-lg transition-colors duration-200 hover:bg-gray-100">
                  <h4 class="font-semibold text-lg mb-3 text-blue-700">Thông tin dự án</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p class="text-gray-700"><span class="font-medium">Năm thực hiện:</span> {{ getProjectYear(selectedProject.project) || "Đã hoàn thành" }}</p>
                      <p class="text-gray-700"><span class="font-medium">Chủ đầu tư:</span> {{ selectedProject.investor || "Không có thông tin" }}</p>
                    </div>
                  </div>
                </div>

                <div class="bg-gray-50 p-4 rounded-lg transition-colors duration-200 hover:bg-gray-100">
                  <h4 class="font-semibold text-lg mb-3 text-blue-700">Dịch vụ cung cấp</h4>
                  <p class="text-gray-700">{{ selectedProject.consulting_work }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>

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
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>0986 108 999</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  {
    TT: 1,
    project: "Dự án xây dựng nhà máy gạch liên hoàn xóm Ao Sen xã Thành Công huyện Phổ  Yên, TP Thái Nguyên.",
    consulting_work: "Khảo sát địa hình",
    investor: "C.ty TNHH  HồngTrang",
  },
  {
    TT: 2,
    project: "Trường mầm non 19-5 thành phố Thái Nguyên",
    consulting_work: "Tư vấn giám sát",
    investor: "Trường MN 19-5 TP TN",
  },
]);
const selectedProject = ref(null);
const isModalOpen = ref(false);
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

// Tính tổng số trang
const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / projectsPerPage);
});

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const range = 2; // Số trang hiển thị xung quanh trang hiện tại
  let pages = [];

  // Luôn hiển thị trang đầu tiên
  if (total > 1) {
    pages.push(1);
  }

  // Thêm dấu ... nếu cần
  if (current - range > 2) {
    pages.push("...");
  }

  // Thêm các trang xung quanh trang hiện tại
  for (let i = Math.max(2, current - range); i <= Math.min(total - 1, current + range); i++) {
    pages.push(i);
  }

  // Thêm dấu ... nếu cần
  if (current + range < total - 1) {
    pages.push("...");
  }

  // Luôn hiển thị trang cuối cùng nếu có nhiều hơn 1 trang
  if (total > 1) {
    pages.push(total);
  }

  return pages;
});

// Các hàm hỗ trợ
const getProjectYear = projectName => {
  const yearMatch = projectName.match(/\((\d{4})\)/);
  return yearMatch ? yearMatch[1] : null;
};

const getProjectLocation = projectName => {
  const locationMatch = projectName.match(/(TP|Thành phố|huyện|xã|phường|tỉnh) [\w\s]+/);
  return locationMatch ? locationMatch[0] : "Thái Nguyên";
};

const shortenProjectName = name => {
  if (name.length > 50) {
    return name.substring(0, 50) + "...";
  }
  return name;
};

// Các hàm xử lý modal
const openModal = project => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedProject.value = null;
    document.body.style.overflow = "auto";
  }, 300);
};

const filterProjects = category => {
  activeCategory.value = category;
  currentPage.value = 1;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToPage = page => {
  currentPage.value = page;
};

onMounted(() => {
  projects.value = [
    {
      TT: 1,
      project: "Cải tạo, nâng cấp đường Hương Sơn, TP Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND P.Hương Sơn",
    },
    {
      TT: 2,
      project: "Xử lý đất thừa, kè ốp mái ta luy dương và bổ sung rãnh thoát nước nút giao Tân Lập trên QL3 mới tỉnh Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Quang Vinh – TPTN.",
    },
    {
      TT: 3,
      project: "Xây dựng, nâng cấp doanh trại Ban CHQS huyện Phú Lương, Hạng mục: Đường vào đơn vị, cổng chính, sân, cải tạo nhà bếp ăn",
      consulting_work: "Tư vấn thiết kế",
      investor: "Ban CHQS huyện Phú Lương",
    },
    {
      TT: 4,
      project: "Cải tạo, nâng cấp đường Lưu Nhân Chú (đoạn từ đường Hương Sơn đến giao đường sắt) và trục đường vào phường Hương Sơn TPTN",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Hương Sơn",
    },
    {
      TT: 5,
      project: "Một số công trình tư vấn thiết kế: Cải tạo đường GTNT, Cầu bê tông cốt thép ..... trên địa các tỉnh Thái Nguyên, Bắc Kạn..",
      consulting_work: "Tư vấn thiết kế",
      investor: "Thành phố Thái Nguyên - Bắc Kạn",
    },
  ];
});
</script>
