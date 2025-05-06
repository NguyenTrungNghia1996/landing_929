<template>
  <div class="">
    <!-- Hero Section -->
    <div class="bg-blue-800 text-white overflow-hidden relative">
      <div class="container mx-auto px-4 py-20 md:py-32">
        <div class="z-10 max-w-2xl relative">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Giải pháp xây dựng toàn diện</h1>
          <p class="text-xl md:text-2xl mb-8">Với hơn 15 năm kinh nghiệm trong lĩnh vực tư vấn, thiết kế và giám sát xây dựng</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <!-- <button class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold">Dịch vụ của chúng tôi</button>
            <button class="px-6 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">Liên hệ ngay</button> -->
            <NuxtLink to="/introduce/about_us" class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center">
              Dịch vụ của chúng tôi
            </NuxtLink>
            <NuxtLink to="/contact" class="px-6 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center">
              Liên hệ ngay
            </NuxtLink>
          </div>
        </div>
        <div class="absolute right-0 top-0 h-full w-1/2 bg-blue-700 transform skew-x-12 origin-top-right hidden lg:block"></div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">Dịch vụ chính</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Cung cấp các giải pháp toàn diện từ khảo sát, thiết kế đến thi công và giám sát công trình</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-blue-600 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-center mb-3">Tư vấn thiết kế</h3>
          <p class="text-gray-700 text-center">Lập dự án, khảo sát, thiết kế các công trình giao thông, dân dụng, công nghiệp và hạ tầng kỹ thuật</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-blue-600 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-center mb-3">Giám sát thi công</h3>
          <p class="text-gray-700 text-center">Đảm bảo chất lượng công trình theo đúng thiết kế và tiêu chuẩn kỹ thuật</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-blue-600 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.17 3.5c.63-.24 1.29-.16 1.8.19.7.51 1.03 1.36.83 2.15-.2.8-.89 1.42-1.7 1.56-.8.14-1.62-.2-2.03-.9-.4-.7-.32-1.58.22-2.18.5-.57 1.3-.7 1.88-.42zm-4.85 2.03c.2-.8.89-1.42 1.7-1.56.8-.13 1.62.2 2.03.9.4.7.32 1.58-.22 2.18-.5.57-1.3.7-1.88.42-.63-.24-1.29-.16-1.8.19-.7.51-1.03 1.36-.83 2.15.2.8.89 1.42 1.7 1.56.8.14 1.62-.2 2.03-.9.4-.7.32-1.58-.22-2.18-.5-.57-1.3-.7-1.88-.42-.63.24-1.29.16-1.8-.19-.7-.51-1.03-1.36-.83-2.15zM15.85 8.62c.2-.8.89-1.42 1.7-1.56.8-.13 1.62.2 2.03.9.4.7.32 1.58-.22 2.18-.5.57-1.3.7-1.88.42-.63-.24-1.29-.16-1.8.19-.7.51-1.03 1.36-.83 2.15.2.8.89 1.42 1.7 1.56.8.14 1.62-.2 2.03-.9.4-.7.32-1.58-.22-2.18-.5-.57-1.3-.7-1.88-.42-.63.24-1.29.16-1.8-.19-.7-.51-1.03-1.36-.83-2.15z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-center mb-3">Hệ thống kỹ thuật</h3>
          <p class="text-gray-700 text-center">Thiết kế hệ thống PCCC, tín hiệu giao thông, điện nội ngoại thất công trình</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="text-blue-600 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-center mb-3">Thẩm định dự án</h3>
          <p class="text-gray-700 text-center">Thẩm tra, thẩm định thiết kế, tổng dự toán, dự toán các công trình xây dựng</p>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <NuxtImg placeholder="/placeholder.png" src="/home.jpg" alt="Về công ty" class="rounded-lg shadow-lg w-full" />
          </div>
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold text-blue-800 mb-4">Công Ty CP Tư Vấn Xây Dựng 929</h2>
            <p class="text-gray-700 mb-6">Với giấy chứng nhận kinh doanh số 4600796888 do Sở kế hoạch và đầu tư tỉnh Thái Nguyên cấp, chúng tôi tự hào là đơn vị tư vấn xây dựng uy tín tại Thái Nguyên và các tỉnh lân cận.</p>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Đăng ký lần đầu ngày 27/02/2010, đăng ký thay đổi lần 5 ngày 12/3/2025</span>
              </div>
              <!-- <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Vốn điều lệ: 1.966.000.000 đồng</span>
              </div> -->
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Đội ngũ hơn 20 kỹ sư, kiến trúc sư giàu kinh nghiệm</span>
              </div>
            </div>
            <!-- <button class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">Tìm hiểu thêm về chúng tôi</button> -->
            <NuxtLink to="/introduce/about_us" class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block">
            Tìm hiểu thêm về chúng tôi
          </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">Dự án tiêu biểu</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Chúng tôi đã thực hiện hơn 100 dự án từ quy mô nhỏ đến lớn tại Thái Nguyên và các tỉnh lân cận</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in projects" :key="index" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" @click="openModal(project)">
          <NuxtImg placeholder="/placeholder.png" :src="project.image" :alt="project.name" class="w-full h-48 object-cover" />
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
        <!-- <button class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">Xem tất cả dự án</button> -->
        <NuxtLink to="/project" class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-block">
          Xem tất cả dự án
        </NuxtLink>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Tại sao chọn chúng tôi?</h2>
          <p class="text-xl max-w-2xl mx-auto">Những giá trị khác biệt mà Công ty CP Tư vấn Xây dựng 929 mang lại</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Chuyên môn cao</h3>
            <p>Đội ngũ kỹ sư, kiến trúc sư có hơn 15 năm kinh nghiệm trong ngành xây dựng</p>
          </div>

          <div class="text-center">
            <div class="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Quy trình chuyên nghiệp</h3>
            <p>Áp dụng quy trình làm việc khoa học, đảm bảo tiến độ và chất lượng công trình</p>
          </div>

          <div class="text-center">
            <div class="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Cam kết chất lượng</h3>
            <p>Chất lượng là nhiệm vụ hàng đầu trong mọi hoạt động sản xuất kinh doanh</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <!-- <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">Khách hàng nói về chúng tôi</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Những phản hồi từ đối tác và khách hàng đã hợp tác với Công ty 929</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
              <NuxtImg placeholder="/placeholder.png" src="https://baitap.mobiedu.vn/img/feedback-1.jpg" alt="Khách hàng" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-semibold">Ông Nguyễn Văn A</h4>
              <p class="text-gray-600 text-sm">UBND phường Quang Trung</p>
            </div>
          </div>
          <p class="text-gray-700 italic">"Công ty 929 đã hỗ trợ chúng tôi trong dự án đường bê tông liên tổ với chất lượng thiết kế tốt và tiến độ đảm bảo. Đội ngũ kỹ sư rất chuyên nghiệp và tận tâm."</p>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
              <NuxtImg placeholder="/placeholder.png" src="https://baitap.mobiedu.vn/img/feedback-4.jpg" alt="Khách hàng" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-semibold">Bà Trần Thị B</h4>
              <p class="text-gray-600 text-sm">Trường MN 19-5 TP Thái Nguyên</p>
            </div>
          </div>
          <p class="text-gray-700 italic">"Chúng tôi rất hài lòng với dịch vụ giám sát thi công của Công ty 929. Các kỹ sư giám sát luôn có mặt tại công trình và phát hiện kịp thời các vấn đề phát sinh."</p>
        </div>
      </div>
    </div> -->

    <!-- CTA Section -->
    <div class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Bạn cần tư vấn về dự án xây dựng?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Liên hệ ngay với chúng tôi để được hỗ trợ và tư vấn miễn phí</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Gửi yêu cầu
          </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center justify-center px-6 py-3 border border-white rounded-lg hover:bg-blue-500 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>0986 108 999</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <transition name="modal">
      <div v-if="isModalOpen" class="fixed inset-0 z-50 overflow-y-auto" @click.self="closeModal">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Background overlay -->
          <transition name="modal-fade">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </transition>

          <!-- Modal content -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <transition name="modal-slide">
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div class="flex justify-between items-start">
                      <h3 class="text-2xl leading-6 font-bold text-gray-900 mb-4" id="modal-headline">
                        {{ selectedProject.name }}
                      </h3>
                      <button type="button" class="text-gray-400 hover:text-gray-500 focus:outline-none" @click="closeModal">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <NuxtImg placeholder="/placeholder.png" :src="selectedProject.image" :alt="selectedProject.name" class="w-full h-auto rounded-lg" />
                      </div>
                      <div>
                        <div class="mb-6">
                          <h4 class="text-lg font-semibold text-blue-700 mb-2">Thông tin dự án</h4>
                          <div class="space-y-2">
                            <p class="text-gray-700"><span class="font-medium">Địa điểm:</span> {{ selectedProject.location }}</p>
                            <p class="text-gray-700"><span class="font-medium">Năm thực hiện:</span> {{ selectedProject.year }}</p>
                            <p class="text-gray-700"><span class="font-medium">Chủ đầu tư:</span> {{ selectedProject.investor }}</p>
                          </div>
                        </div>

                        <div>
                          <h4 class="text-lg font-semibold text-blue-700 mb-2">Dịch vụ cung cấp</h4>
                          <p class="text-gray-700">{{ selectedProject.services }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeModal">Đóng</button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
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
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-slide-enter-from,
.modal-slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>