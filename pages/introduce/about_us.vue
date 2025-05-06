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
    <About_Section/>
    <About_Activity/>
    <!-- Experience Section -->
    <div class="container mx-auto px-4 py-12 md:py-16">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">Dự án tiêu biểu</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          @click="openModal(project)"
        >
          <NuxtImg 
            placeholder="/placeholder.png" 
            :src="project.image" 
            :alt="project.name" 
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
            <p class="text-gray-600 mb-3">{{ project.location }}</p>
            <p class="text-gray-700">{{ project.description }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <NuxtLink 
          to="/project" 
          class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Xem thêm dự án
        </NuxtLink>
      </div>
    </div>

    <!-- Project Modal -->
    <Transition name="modal">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="closeModal"
      >
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Background overlay -->
          <Transition name="fade">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </Transition>
          <!-- Modal content -->
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <div class="flex justify-between items-start">
                    <h3 class="text-2xl leading-6 font-bold text-gray-900 mb-4">
                      {{ selectedProject.name }}
                    </h3>
                    <button 
                      @click="closeModal"
                      class="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div class="mt-2">
                    <NuxtImg 
                      placeholder="/placeholder.png" 
                      :src="selectedProject.image" 
                      :alt="selectedProject.name" 
                      class="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
                    />
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p class="text-sm text-gray-500">Địa điểm</p>
                        <p class="font-medium">{{ selectedProject.location }}</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500">Năm thực hiện</p>
                        <p class="font-medium">{{ selectedProject.year }}</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500">Chủ đầu tư</p>
                        <p class="font-medium">{{ selectedProject.investor }}</p>
                      </div>
                    </div>
                    
                    <div class="mb-4">
                      <p class="text-sm text-gray-500">Dịch vụ cung cấp</p>
                      <p class="font-medium">{{ selectedProject.services }}</p>
                    </div>
                    
                    <p class="text-gray-700">{{ selectedProject.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button 
                type="button" 
                @click="closeModal"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <About_Team/>
    <About_Working/>
    <About_Contact/>
  </div>
</template>
<script setup>
const isModalOpen = ref(false);
const selectedProject = ref(null);
const projects = ref([
  {
    id: 1,
    name: "Cải tạo, nâng cấp đường Hương Sơn, TP Thái Nguyên",
    location: "Thành phố Thái Nguyên",
    description: "Tư vấn thiết kế hệ thống đường giao thông nông thôn",
    year: "2020",
    image: "/product/1.jpg",
    investor: "UBND P.Hương Sơn",
    services: "Tư vấn thiết kế kỹ thuật, lập dự toán, giám sát thi công hệ thống đường giao thông nông thôn",
  },
  {
    id: 2,
    name: " Xử lý đất thừa, kè ốp mái ta luy dương và bổ sung rãnh thoát nước nút giao Tân Lập trên QL3 mới tỉnh Thái Nguyên",
    location: "Thành phố Thái Nguyên",
    description: "Tư vấn thiết kế hệ thống đường giao thông",
    year: "2019",
    image: "/product/2.jpg",
    investor: "UBND phường Quang Vinh – TPTN.",
    services: "Xử lý đất thừa, kè ốp mái ta luy dương và bổ sung rãnh thoát nước nút giao Tân Lập trên QL3 mới tỉnh Thái Nguyên",
  },
  {
    id: 3,
    name: "Xây dựng, nâng cấp doanh trại Ban CHQS huyện Phú Lương, Hạng mục: Đường vào đơn vị, cổng chính, sân, cải tạo nhà bếp ăn",
    location: "Thành phố Thái Nguyên",
    description: "Tư vấn thiết kế",
    year: "2021",
    image: "/product/3.jpg",
    investor: "Ban CHQS huyện Phú Lương",
    services: "Xây dựng, nâng cấp doanh trại Ban CHQS huyện Phú Lương, Hạng mục: Đường vào đơn vị, cổng chính, sân, cải tạo nhà bếp ăn",
  },
]);
const openModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<style>
</style>