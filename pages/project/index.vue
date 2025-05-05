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
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button v-for="(category, index) in categories" :key="index" @click="filterProjects(category)" :class="['px-4 py-2 rounded-full font-medium transition-colors duration-200', activeCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-white border border-gray-300 hover:bg-gray-100']">
          {{ category }}
        </button>
      </div>

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
                      <p class="text-gray-700"><span class="font-medium">Năm thực hiện:</span> {{ getProjectYear(selectedProject.project) || "Đang thực hiện" }}</p>
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
    <div class="bg-blue-800 text-white py-16">
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
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Bạn có dự án cần tư vấn?</h2>
        <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Liên hệ với chúng tôi để được hỗ trợ và báo giá tốt nhất</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md hover:shadow-lg">Gửi yêu cầu</button>
          <button class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold">0986 108 999</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const projects = ref([]);
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

// Tính toán các trang hiển thị (có dấu ...)
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

// Lấy dữ liệu khi component được mount
onMounted(() => {
  // Bạn có thể thêm dữ liệu dự án ở đây hoặc gọi API
  projects.value = [
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
    {
      TT: 3,
      project: "Đường bê tông xi măng xã Phúc Trìu thành phố Thái Nguyên (2010)",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Trìu - TPTN",
    },
    {
      TT: 4,
      project: "Đường giao thông liên tổ 5 – tổ 12 P.Tân Lập, TP Thái Nguyên",
      consulting_work: "Giám sát TCXD công  trình",
      investor: "UBND P. Tân Lập - TPTN",
    },
    {
      TT: 5,
      project: "Đường bê tông xi măng giai đoạn 2010 xã Phúc Xuân  thành phố Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Xuân - TPTN",
    },
    {
      TT: 6,
      project: "Cải tạo, nâng cấp trạm cai nghiện phường Trung Thành – TP Thái Nguyên",
      consulting_work: "Giám sát TCXD công  trình",
      investor: "UBND Phường Trung Thành -  TPTN",
    },
    {
      TT: 7,
      project: "Đường bê tông xi măng xã Cao Ngạn thành phố Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Cao Ngạn - TPTN",
    },
    {
      TT: 8,
      project: "Đường bê tông xi măng phường Hoàng Văn Thụ thành phố Thái Nguyên (2010)",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND P. Hoàng Văn Thụ - TPTN",
    },
    {
      TT: 9,
      project: "Đường BTXM tổ 3; 4; 15; 34; 39 phường Hương Sơn - TP Thái Nguyên.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND P.  Hương Sơn",
    },
    {
      TT: 10,
      project: "Đường bê tông xi măng phường Trung Thành TP Thái Nguyên. (2010)",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND Phường Trung Thành",
    },
    {
      TT: 11,
      project: "Đường bê tông xi măng tổ 17 phường Hoàng Văn Thụ - TP Thái Nguyên.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Hoàng Văn Thụ -  TPTN",
    },
    {
      TT: 12,
      project: "Cải tạo sân trụ sở HĐND và UBND thành phố Thái Nguyên.",
      consulting_work: "Tư vấn thẩm tra & Tư vấn giám sát  TCXD",
      investor: "Văn phòng HĐND & UBND  - TPTN",
    },
    {
      TT: 13,
      project: "Nhà đa năng bệnh viện đa khoa huyện Phú Lương",
      consulting_work: "Tư vấn thiết kế",
      investor: "BV đa khoa huyện Phú Lương",
    },
    {
      TT: 14,
      project: "Cải tạo, nâng cấp đường Phủ Liễn ( đoạn từ ngã ba đường Minh Cầu kéo dài đến",
      consulting_work: "Tư vấn thiết kế  + Tư vấn",
      investor: "UBND phường Hoàng Văn Thụ -",
    },
    {
      TT: 15,
      project: "Đường BTXM liên tổ 14 – 16 – 21 phường Quang Trung - TP Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND P.Quang Trung - TPTN",
    },
    {
      TT: 16,
      project: "Đường BTXM  tổ dân phố 29-32 P.Quang Trung -  TP TN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND Phường  Quang Trung - TPTN",
    },
    {
      TT: 17,
      project: "Doanh nghiệp may Tháng tám phường Quang Vinh  Hạng mục: San nền giai đoạn 1+2",
      consulting_work: "Tư vấn thẩm tra",
      investor: "DN may tháng tám phường Quang Vinh -  TPTN",
    },
    {
      TT: 18,
      project: "Cải tạo sửa chữa nhà làm việc 5 gian,Trung tâm kiểm định chất lượng giống và vật tư hàng hoá Nông nghiệp.",
      consulting_work: "Tư vấn thiết kế",
      investor: "TT kiểm định chất lượng giống và vật tư hàng hoá Nông Nghiệp -  TPTN",
    },
    {
      TT: 19,
      project: "Xây dựng hạ tầng khu dân cư số 5 thị trấn Sóc Sơn huyện Sóc Sơn – Thành phố Hà Nội.",
      consulting_work: "Tư vấn thiết kế",
      investor: "BQLCDA ĐTXD  H.Sóc Sơn – TP Hà Nội",
    },
    {
      TT: 20,
      project: "Xây dựng hạ tầng khu tái định cư số 3 Xuân Giang huyện Sóc Sơn – TP Hà  Nội.",
      consulting_work: "Tư vấn thiết kế",
      investor: "BQLCDA ĐTXD  H.Sóc Sơn – HN",
    },
    {
      TT: 21,
      project: "Đường Liên xã từ ngã ba Mai Đình đi Đông Xuân huyện Sóc Sơn – Thành phố  Hà Nội.",
      consulting_work: "Giám sát TCXD công  trình",
      investor: "BQLCDA ĐTXD  huyện Sóc Sơn – TP Hà Nội",
    },
    {
      TT: 22,
      project: "Nhà lớp học 3 tầng 21 phòng trường trung học cơ sở Phù Linh huyện Sóc Sơn – Thành phố Hà Nội.",
      consulting_work: "Giám sát TCXD công trình",
      investor: "BQLCDA ĐTXD  H.Sóc Sơn – HN",
    },
    {
      TT: 23,
      project: "Cải tạo kênh mương nội đồng xã Phù Linh huyện Sóc Sơn – Thành phố Hà Nội",
      consulting_work: "Tư vấn thiết kế",
      investor: "BQLCDA ĐTXD  huyện Sóc Sơn – TP Hà Nội",
    },
    {
      TT: 24,
      project: "Đường BTXM phường Tân Long - TP TN",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND P.Tân  Long",
    },
    {
      TT: 25,
      project: "Đường giao thông liên xã Phúc Hà - An  Khánh",
      consulting_work: "Tư vấn thẩm  tra",
      investor: "UBND xã Phúc  Hà",
    },
    {
      TT: 26,
      project: "San nền khu đất DN Đức Thành – TPTN.",
      consulting_work: "Tư vấn thiết  kế",
      investor: "DN Đức Thành",
    },
    {
      TT: 27,
      project: "Đường bê tông xi măng tổ 5; 14 phường Tân Thịnh – TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường  Tân Thịnh - TPTN",
    },
    {
      TT: 28,
      project: "Đường bê tông xi măng giai đoạn 2010 phường Tân Lập – TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Tân Lập - TPTN",
    },
    {
      TT: 29,
      project: "Cải tạo kênh chính xóm Cây Xi xã Phúc Xuân TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Xuân - TPTN",
    },
    {
      TT: 30,
      project: "Đường bê tông xóm Hào Thọ xã Tích Lương TPTN.",
      consulting_work: "Tư vấn thẩm tra",
      investor: "UBND xã Tích Lương - TPTN",
    },
    {
      TT: 31,
      project: "Đường vào mỏ quặng sắt thôn Nà Cà xã Sỹ Bình huyện Bạch Thông – Tỉnh Bắc  Kạn.",
      consulting_work: "Tư vấn thiết kế",
      investor: "Công ty CP KS&LK Vạn Lợi  Bắc Kạn",
    },
    {
      TT: 32,
      project: "Cải tạo, sửa chữa nhà làm việc 2 tầng UBND xã Quyết Thắng – TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Quyết Thắng - TPTN",
    },
    {
      TT: 33,
      project: "Trường tiểu học Hoà Bình – Huyện Đồng Hỷ – Tỉnh Thái Nguyên.",
      consulting_work: "Tư vấn thiết kế",
      investor: "Trường tiểu học Hà Bình",
    },
    {
      TT: 34,
      project: "Kênh tưới HTX Tiến Ninh và HTX Đại Đồng phường Túc Duyên – TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Túc Duyên -  TPTN",
    },
    {
      TT: 35,
      project: "Trạm bơm Túc Tiến, trạm  bơm  Dân Tiến phường Túc Duyên – TPTN.",
      consulting_work: "Tư vấn Thiết kế",
      investor: "UBND phường  Túc Duyên - TPTN",
    },
    {
      TT: 36,
      project: "Đường bê tông xã Lương Sơn – TPTN. (2010)",
      consulting_work: "Tư vấn thẩm tra",
      investor: "UBND xã Lương Sơn - TPTN",
    },
    {
      TT: 37,
      project: "Trạm cai nghiện xã Quyết Thắng – TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Quyết Thắng - TPTN",
    },
    {
      TT: 38,
      project: "Nhà thư viện, trường tiểu học Quyết Thắng",
      consulting_work: "Tư vấn thiết kế",
      investor: "Trường Tiểu học Quyết Thắng",
    },
    {
      TT: 39,
      project: "Cải tạo, sửa chữa trạm y tế xã Phúc Trìu – TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Trìu- TPTN",
    },
    {
      TT: 40,
      project: "Vường thuốc nam phường Quang Trung",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND  P. Quang Trung - TP TN",
    },
    {
      TT: 41,
      project: "Cải tạo, sửa chữa cầu thép qua kênh Đồng Nội xã Phúc Trìu – TPTN.",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Trìu- TPTN",
    },
    {
      TT: 42,
      project: "Đường BTXM giai đoạn 2010 xã Quyết",
      consulting_work: "Tư vấn thiết",
      investor: "UBND xã Quyết",
    },
    {
      TT: 43,
      project: "Đường BTXM xóm Trung Lương xã Tích Lương – TP TN. (2010)",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Tích Lương – TPTN.",
    },
    {
      TT: 44,
      project: "Đường bê tông xi măng xóm Kè,  xã Lương Sơn – TP TN.",
      consulting_work: "Tư vấn TT",
      investor: "UBND xã Lương Sơn – TPTN.",
    },
    {
      TT: 45,
      project: "Mở rộng đường từ QL3 đến khu dân cư số 1 phường Quang Vinh – TP TN.",
      consulting_work: "Tư vấn thẩm tra",
      investor: "UBND phường Quang Vinh – TPTN.",
    },
    {
      TT: 46,
      project: "Trụ sở làm việc UBND xã Cao Ngạn - TPTN  Hạng mục: Cổng, hàng rào, kè chắn đất, nhà bảo vệ, nhà để xe, hệ thống thoát  nước",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Cao Ngạn – TPTN",
    },
    {
      TT: 47,
      project: "Nâng cấp hồ môi sinh phục vụ duy trì đàn giống Quốc gia – Thị xã Sông Công",
      consulting_work: "Tư vấn thẩm tra",
      investor: "Trung tâm nghiên cứu và phát triển chăn nuôi miền  núi",
    },
    {
      TT: 48,
      project: "Đường bê tông xi măng xóm Kè xã Lương Sơn, thành phố Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Lương Sơn,TP Thái  Nguyên",
    },
    {
      TT: 49,
      project: "Nhà lớp học 2 tầng 6 phòng trường tiểu  học xã Đào Xá - Huyện Phú Bình - Tỉnh Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Đào Xá  - Huyện Phú Bình  - Thái Nguyên",
    },
    {
      TT: 50,
      project: "Đường BT xóm Thanh Thế xã Yên Đổ – Huyện Phú Lương",
      consulting_work: "Tư vấn giám sát",
      investor: "UBND xã Yên Đổ  - Huyện Phú Lương - Thái  Nguyên",
    },
    {
      TT: 51,
      project: "Cải tạo nâng cấp sân giảng đường - Phân hiệu Cao đằng giao thông miền núi",
      consulting_work: "Tư vấn thẩm tra",
      investor: "Phân hiệu cao đẳng giao thông",
    },
    {
      TT: 52,
      project: "Nâng cấp hệ thống điện sinh hoạt trường  THCS Trưng Vương",
      consulting_work: "Tư vấn thiết  kế",
      investor: "Trường THCS  Trưng Vương",
    },
    {
      TT: 53,
      project: "Đường từ nga ba kho đồi đến kênh thoát nước xã Đồng Tiến, huyện Phổ yên Hạng mục: - Đường giao thông  - Cống thoát nước  - Điện chiếu sáng",
      consulting_work: "Tư vấn thẩm tra",
      investor: "Cty TNHH MTV  cơ điện và vật liệu nổ 31",
    },
    {
      TT: 54,
      project: "Đường bê tông xóm Tân Thành I xã",
      consulting_work: "Tư vấn thẩm",
      investor: "UBND xã Đồng",
    },
    {
      TT: 55,
      project: "Hạ tầng kỹ thuật khu tái định cư  Hạng mục: Hệ thống cấp điện 0,4KV và chiếu sáng công cộng",
      consulting_work: "Tư vấn thẩm tra",
      investor: "Cty xây dựng và san nền Thái Nguyên",
    },
    {
      TT: 56,
      project: "Công ty TNHH MTV cơ điện và vật liệu nổ 31  Hạng mục: Sửa chữa sân trước 13 kho -  khu kho vật liệu nổ 52,3ha",
      consulting_work: "Tư vấn thiết kế",
      investor: "Công ty TNHH MTV cơ điện và vật liệu nổ 31",
    },
    {
      TT: 57,
      project: "Cổng làng nghề truyền thống bún bánh xóm Gò chè xã Cao Ngạn",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Cao Ngạn - TPTN",
    },
    {
      TT: 58,
      project: "Rải thảm đường bê tông áp phan từ khoa dinh dưỡng tới nhà chữa rác thải bệnh  viện đa khoa trung ương Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "BV Đa khoa TW Thái Nguyên",
    },
    {
      TT: 59,
      project: "Sân cổng nhà văn hoá thể thao đa năng phường Quang Trung - TP Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Quang Trung",
    },
    {
      TT: 60,
      project: "Mở họng đường khu dân cư số 2 phường  Đồng Quang -TPTN",
      consulting_work: "Tư vấn thiết  kế",
      investor: "UBND phường  Đồng Quang",
    },
    {
      TT: 61,
      project: "Đường giao thông liên xã Phúc Hà - Quán Triều",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Hà",
    },
    {
      TT: 62,
      project: "Nâng cấp đập ngăn bãi thải bùn mỏ sắt  Ngườm Cháng huyện Hoà An tỉnh Cao Bằng",
      consulting_work: "Tư vấn thẩm tra",
      investor: "Cty CP Gang thép Thái Nguyên",
    },
    {
      TT: 63,
      project: "Trường tiểu học Vô Tranh I  Hạng mục: Nhà hiệu bộ - Nhà để xe giáo viên",
      consulting_work: "Tư vấn thẩm tra",
      investor: "Trường tiểu học Vô Tranh I",
    },
    {
      TT: 64,
      project: "Trung tâm sát hạch lái xe loại 3 Hạng mục: Sân sát hạch lái xe loại 3",
      consulting_work: "Tư vấn giám sát + Tư vấn lập HSYC và đánh giá  HSĐX",
      investor: "Công ty Cổ phần vận tải Thái Nguyên",
    },
    {
      TT: 65,
      project: "Xây dựng khuôn viên nhà văn hoá xóm Tiến Thành xã La Bằng huyện Đại Từ tỉnh Thái Nguyên  Hạng mục: San nền, kè đá",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã La Bằng H. Đại Từ",
    },
    {
      TT: 66,
      project: "Cải tạo, sửa chữa nhà lớp học 02 phòng số 1; 2; 3 trường tiểu học Sa Lung",
      consulting_work: "Tư vấn thẩm  tra + tư vấn giám sát",
      investor: "Trường tiểu học  Sa Lung – H. Đồng Hỷ",
    },
    {
      TT: 67,
      project: "Trưởng tiểu học Gia Sàng  Hạng mục: Nhà để xe + Nhà vệ sinh",
      consulting_work: "Tư vấn thiết  kế",
      investor: "Trường tiểu học  Gia Sàng - TPTN",
    },
    {
      TT: 68,
      project: "Trường mầm non Gia Sàng Hạng mục: Hàng rào + Sân khấu",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Gia Sàng - TPTN",
    },
    {
      TT: 69,
      project: "Trường mầm non Trưng Vương  Hạng mục: Hàng rào",
      consulting_work: "Tư vấn thiết  kế",
      investor: "Trường mầm non  Trưng Vương",
    },
    {
      TT: 70,
      project: "Bệnh viện điều dưỡng phục hồi chức năng Thái Nguyên",
      consulting_work: "Tư vấn LDT",
      investor: "BV điều dưỡng phục hồi chức năng Thái  Nguyên",
    },
    {
      TT: 71,
      project: "Nhà ở học viên, lớp học nghề may, nhà trực giảng và phòng giao dịch DN may  tháng tám",
      consulting_work: "Tư vấn thiết kế",
      investor: "DN May tháng tám - TPTN",
    },
    {
      TT: 72,
      project: "Nhà để xe, nhà  vệ sinh UBND xã Tân Cương",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Tân Cương",
    },
    {
      TT: 73,
      project: "Đường vào UBND phường Tân Thịnh",
      consulting_work: "Tư vấn thẩm tra",
      investor: "UBND phường Tân Thịnh -  TPTN",
    },
    {
      TT: 74,
      project: "Công ty TNHH MTV cơ điện và vật liệu nổ 31  Hạng mục: Đường giao thông nội bộ -  khu kho vật liệu nổ 52,3ha",
      consulting_work: "Tư vấn thiết kế",
      investor: "Công ty TNHH MTV cơ điện và vật liệu nổ 31",
    },
    {
      TT: 75,
      project: "Trung tâm sát hạch lái xe loại 3  Công trình: Bãi đỗ xe",
      consulting_work: "Tư vấn giám  sát",
      investor: "Công ty CP vận  tải Thái Nguyên",
    },
    {
      TT: 76,
      project: "Kè đá đường giao thông UBND xã Phúc Trìu",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Trìu - TPTN",
    },
    {
      TT: 77,
      project: "Đường BTXM xóm Na Hoàng xã Lương  Sơn",
      consulting_work: "Tư vấn thiết  kế",
      investor: "UBND xã Lương  Sơn - TPTN",
    },
    {
      TT: 78,
      project: "Đường BTXM giai đoạn 2011 phường Tích Lương - TP Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường  Tích Lương - TPTN",
    },
    {
      TT: 79,
      project: "Đường BTXM giai đoạn 2011 phường Tân Lập - TP Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Tân Lập - TPTN",
    },
    {
      TT: 80,
      project: "Cải tạo, nâng cấp đường vào UBND phường Tân Thịnh",
      consulting_work: "Tư vấn thẩm tra",
      investor: "UBND phường Tân Thịnh -  TPTN",
    },
    {
      TT: 82,
      project: "Đường bê tông liên xã Quyết Thắng – Phúc Trìu – Thịnh Đức",
      consulting_work: "Tư vấn thẩm tra",
      investor: "UBND xã Quyết Thắng - TPTN",
    },
    {
      TT: 83,
      project: "Cải tạo, sửa chữa cầu bê tông xóm Nhân Hòa, cống bê tông xóm Phúc Hòa xã  Thịnh Đức - TPTN",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Thịnh Đức - TPTN",
    },
    {
      TT: 84,
      project: "Đường BTXM liên xóm 4; 7; 8 xã Phúc Hà",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Phúc Hà - TPTN",
    },
    {
      TT: 85,
      project: "Nhà cai nghiện phường Quang Trung",
      consulting_work: "Tư vấn thiết  kế",
      investor: "UBND p. Quang  Trung - TPTN",
    },
    {
      TT: 86,
      project: "Trường THPT Ngô Quyền, HM: Cổng, nhà thường trực",
      consulting_work: "Tư vấn thiết kế",
      investor: "Trường THPT Ngô Quyền",
    },
    {
      TT: 87,
      project: "Trạm y tế phường Đồng Quang: HM: Cổng, hàng rào, sân bê tông …..",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Đồng Quang -  TPTN",
    },
    {
      TT: 88,
      project: "Nhà hiệu bộ và phòng học 2 tầng 4 phòng trường mầm non bán công Hoa  Mai",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Phú Xá - TPTN",
    },
    {
      TT: 89,
      project: "Cải tạo, nâng cấp tuyến đường 19/8 phường Trưng Vương",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Trưng Vương",
    },
    {
      TT: 90,
      project: "Đường Giao thông xóm Pha, xóm 3 Ninh Hương, xóm Đông, xóm Nha Làng xã Lương Sơn",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND xã Lương Sơn - TPTN",
    },
    {
      TT: 91,
      project: "Đường BTXM  phường Phú Xá - TPTN;  HM: Tổ 1, 2, 9, 12, 20, 21, 28, 29",
      consulting_work: "Tư vấn thiết  kế",
      investor: "UBND phường  Phú Xá",
    },
    {
      TT: 92,
      project: "Cải tạo, nâng cấp đường nội bộ từ khoa  dinh dưỡng tới khoa Da Liễu bệnh viện đa khoa TW Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "Bệnh viện đa  khoa TW Thái Nguyên",
    },
    {
      TT: 93,
      project: "Nâng cấp đường vào trường tiểu học Phú Xá",
      consulting_work: "Tư vấn thiết kế",
      investor: "Trường tiểu học Phú Xá - TPTN",
    },
    {
      TT: 94,
      project: "Bãi đỗ xe ô tô",
      consulting_work: "Tư vấn giám sát",
      investor: "Công ty cổ phần vận tải TN",
    },
    {
      TT: 95,
      project: "Đường BTXM tổ 16c, 18, 24, 38 phường Hương Sơn",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Hương Sơn",
    },
    {
      TT: 96,
      project: "Cải tạo nhà làm việc trại lợn Tân Thái",
      consulting_work: "Tư vấn thiết kế",
      investor: "Trung tâm giống vật nuôi tỉnh TN",
    },
    {
      TT: 97,
      project: "Cải tạo hệ thống thoát nước khu trung",
      consulting_work: "Thi công",
      investor: "Công ty CPQL &",
    },
    {
      TT: 98,
      project: "Đường GTNT xã Đông Xuân huyện Sóc Sơn – TP Hà Nội",
      consulting_work: "Thi công xây  dựng công trình",
      investor: "UBND xã Đông  Xuân – huyện Sóc Sơn - TPHN",
    },
    {
      TT: 99,
      project: "Nâng cấp đường dân sinh xóm Hiệp Hoà  xã Phủ Lý huyện Phú Lương - Thái Nguyên",
      consulting_work: "Tư vấn thiết kế",
      investor: "Công ty cổ phần Ban Tích",
    },
    {
      TT: 100,
      project: "Hệ thống mương thoát nước tổ 5;6 phường Trưng Vương và tổ 7 phường  Túc Duyên - TPTN",
      consulting_work: "Tư vấn thiết kế",
      investor: "UBND phường Trưng Vương -  TPTN",
    },
  ];
});
</script>
