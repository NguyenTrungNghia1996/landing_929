<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-blue-800 text-white py-20 md:py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Dự án tiêu biểu</h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto">Hơn 100 dự án đã thực hiện tại Thái Nguyên và các tỉnh lân cận</p>
      </div>
    </div>

    <!-- Projects Filter -->
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button class="px-4 py-2 bg-blue-600 text-white rounded-full font-medium">Tất cả</button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Tư vấn thiết kế</button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Giám sát thi công</button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Hạ tầng giao thông</button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Công trình dân dụng</button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Hệ thống kỹ thuật</button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-64 overflow-hidden">
            <NuxtImg placeholder="/placeholder.png" src="/images/projects/duong-phuc-triu.jpg" alt="Đường bê tông xã Phúc Trìu" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-white font-medium">2020</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Đường bê tông xã Phúc Trìu</h3>
            <p class="text-gray-600 mb-4">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Tư vấn thiết kế hệ thống đường giao thông nông thôn với tổng chiều dài 5km</p>
            <div class="flex justify-between items-center">
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Tư vấn thiết kế</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Chi tiết
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-64 overflow-hidden">
            <NuxtImg placeholder="/placeholder.png" src="/images/projects/truong-mam-non.jpg" alt="Trường mầm non 19-5" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-white font-medium">2019</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Trường mầm non 19-5</h3>
            <p class="text-gray-600 mb-4">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Tư vấn giám sát thi công công trình giáo dục với 12 phòng học và các hạng mục phụ trợ</p>
            <div class="flex justify-between items-center">
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Giám sát thi công</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Chi tiết
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-64 overflow-hidden">
            <NuxtImg placeholder="/placeholder.png" src="/images/projects/thoat-nuoc.jpg" alt="Hệ thống thoát nước" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-white font-medium">2021</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Hệ thống thoát nước phường Túc Duyên</h3>
            <p class="text-gray-600 mb-4">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Thiết kế hệ thống thoát nước đô thị với tổng chiều dài 3.5km</p>
            <div class="flex justify-between items-center">
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Thiết kế kỹ thuật</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Chi tiết
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-64 overflow-hidden">
            <NuxtImg placeholder="/placeholder.png" src="/images/projects/nha-may-gach.jpg" alt="Nhà máy gạch liên hoàn" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-white font-medium">2018</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Nhà máy gạch liên hoàn</h3>
            <p class="text-gray-600 mb-4">Xóm Ao Sen, xã Thành Công, huyện Phổ Yên</p>
            <p class="text-gray-700 mb-4">Khảo sát địa hình và lập báo cáo kinh tế kỹ thuật cho dự án</p>
            <div class="flex justify-between items-center">
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Khảo sát địa hình</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Chi tiết
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-64 overflow-hidden">
            <NuxtImg placeholder="/placeholder.png" src="/images/projects/benh-vien.jpg" alt="Bệnh viện đa khoa TW" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-white font-medium">2022</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Bệnh viện đa khoa TW Thái Nguyên</h3>
            <p class="text-gray-600 mb-4">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Rải thảm đường bê tông áp phan từ khoa dinh dưỡng tới nhà chứa rác thải</p>
            <div class="flex justify-between items-center">
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Thi công xây dựng</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Chi tiết
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-64 overflow-hidden">
            <NuxtImg placeholder="/placeholder.png" src="/images/projects/truong-hoc.jpg" alt="Trường THPT Ngô Quyền" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span class="text-white font-medium">2021</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Trường THPT Ngô Quyền</h3>
            <p class="text-gray-600 mb-4">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Tư vấn thiết kế cổng và nhà thường trực</p>
            <div class="flex justify-between items-center">
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Tư vấn thiết kế</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Chi tiết
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-12">
        <nav class="flex items-center space-x-2">
          <button class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <button class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">1</button>
          <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">2</button>
          <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">3</button>
          <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">4</button>
          <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </nav>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">100+</div>
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

    <!-- Client Logos -->
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">Đối tác & Khách hàng</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div class="flex items-center justify-center p-4 border border-gray-200 rounded-lg">
          <NuxtImg placeholder="/placeholder.png" src="/images/clients/ubnd.png" alt="UBND Tỉnh" class="h-12 object-contain"/>
        </div>
        <div class="flex items-center justify-center p-4 border border-gray-200 rounded-lg">
          <NuxtImg placeholder="/placeholder.png" src="/images/clients/bv-tw.png" alt="Bệnh viện TW" class="h-12 object-contain"/>
        </div>
        <div class="flex items-center justify-center p-4 border border-gray-200 rounded-lg">
          <NuxtImg placeholder="/placeholder.png" src="/images/clients/gang-thep.png" alt="Gang thép Thái Nguyên" class="h-12 object-contain"/>
        </div>
        <div class="flex items-center justify-center p-4 border border-gray-200 rounded-lg">
          <NuxtImg placeholder="/placeholder.png" src="/images/clients/so-gtvt.png" alt="Sở GTVT" class="h-12 object-contain"/>
        </div>
        <div class="flex items-center justify-center p-4 border border-gray-200 rounded-lg">
          <NuxtImg placeholder="/placeholder.png" src="/images/clients/dai-hoc.png" alt="Đại học Thái Nguyên" class="h-12 object-contain"/>
        </div>
        <div class="flex items-center justify-center p-4 border border-gray-200 rounded-lg">
          <NuxtImg placeholder="/placeholder.png" src="/images/clients/xi-mang.png" alt="Xi măng Quang Sơn" class="h-12 object-contain"/>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Bạn có dự án cần tư vấn?</h2>
        <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Liên hệ với chúng tôi để được hỗ trợ và báo giá tốt nhất</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Gửi yêu cầu
          </button>
          <button class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            0986 108 999
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Có thể thêm các logic JavaScript nếu cần
</script>

<style scoped>
/* Thêm các style tùy chỉnh nếu cần */
</style>