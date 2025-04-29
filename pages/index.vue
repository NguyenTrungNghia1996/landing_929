<template>
  <div class="">
    <div class="bg-blue-800 text-white overflow-hidden">
      <div class="container mx-auto px-4 py-20 md:py-32">
        <div class="z-10 max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Giải pháp xây dựng toàn diện</h1>
          <p class="text-xl md:text-2xl mb-8">Với hơn 15 năm kinh nghiệm trong lĩnh vực tư vấn, thiết kế và giám sát xây dựng</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold">Dịch vụ của chúng tôi</button>
            <button class="px-6 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">Liên hệ ngay</button>
          </div>
        </div>
        <div class="right-0 top-0 h-full w-1/2 bg-blue-700 transform skew-x-12 origin-top-right hidden lg:block"></div>
      </div>
    </div>
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
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <NuxtImg placeholder="/placeholder.png" src="/images/about-company.jpg" alt="Về công ty" class="rounded-lg shadow-lg w-full" />
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
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Vốn điều lệ: 1.966.000.000 đồng</span>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Đội ngũ hơn 20 kỹ sư, kiến trúc sư giàu kinh nghiệm</span>
              </div>
            </div>
            <button class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">Tìm hiểu thêm về chúng tôi</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">Dự án tiêu biểu</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Chúng tôi đã thực hiện hơn 100 dự án từ quy mô nhỏ đến lớn tại Thái Nguyên và các tỉnh lân cận</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <NuxtImg placeholder="/placeholder.png" alt="Dự án đường bê tông" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Đường bê tông xã Phúc Trìu</h3>
            <p class="text-gray-600 mb-3">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Tư vấn thiết kế hệ thống đường giao thông nông thôn</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-blue-600">2020</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết →</a>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <NuxtImg placeholder="/placeholder.png" src="/images/project-2.jpg" alt="Trường mầm non" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Trường mầm non 19-5</h3>
            <p class="text-gray-600 mb-3">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Tư vấn giám sát thi công công trình giáo dục</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-blue-600">2019</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết →</a>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <NuxtImg placeholder="/placeholder.png" src="/images/project-3.jpg" alt="Hệ thống thoát nước" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Hệ thống thoát nước phường Túc Duyên</h3>
            <p class="text-gray-600 mb-3">Thành phố Thái Nguyên</p>
            <p class="text-gray-700 mb-4">Thiết kế hệ thống thoát nước đô thị</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-blue-600">2021</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Xem chi tiết →</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <button class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">Xem tất cả dự án</button>
      </div>
    </div>
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
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">Khách hàng nói về chúng tôi</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Những phản hồi từ đối tác và khách hàng đã hợp tác với Công ty 929</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
              <NuxtImg placeholder="/placeholder.png" src="/images/client-1.jpg" alt="Khách hàng" class="w-full h-full object-cover"/>
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
              <NuxtImg placeholder="/placeholder.png" src="/images/client-2.jpg" alt="Khách hàng" class="w-full h-full object-cover"/>
            </div>
            <div>
              <h4 class="font-semibold">Bà Trần Thị B</h4>
              <p class="text-gray-600 text-sm">Trường MN 19-5 TP Thái Nguyên</p>
            </div>
          </div>
          <p class="text-gray-700 italic">"Chúng tôi rất hài lòng với dịch vụ giám sát thi công của Công ty 929. Các kỹ sư giám sát luôn có mặt tại công trình và phát hiện kịp thời các vấn đề phát sinh."</p>
        </div>
      </div>
    </div>
    <!-- <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">Tin tức & Cập nhật</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Các thông tin mới nhất về hoạt động của công ty và ngành xây dựng</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <NuxtImg placeholder="/placeholder.png" src="/images/news-1.jpg" alt="Tin tức" class="w-full h-48 object-cover"/>
            <div class="p-6">
              <span class="text-sm text-blue-600">15/06/2023</span>
              <h3 class="text-xl font-semibold my-2">Công ty 929 nhận giải thưởng Doanh nghiệp tiêu biểu</h3>
              <p class="text-gray-700 mb-4">Vinh dự nhận giải thưởng Doanh nghiệp tiêu biểu tỉnh Thái Nguyên năm 2023</p>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Đọc tiếp →</a>
            </div>
          </div>
          
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <NuxtImg placeholder="/placeholder.png" src="/images/news-2.jpg" alt="Tin tức" class="w-full h-48 object-cover"/>
            <div class="p-6">
              <span class="text-sm text-blue-600">02/06/2023</span>
              <h3 class="text-xl font-semibold my-2">Hội thảo công nghệ xây dựng 2023</h3>
              <p class="text-gray-700 mb-4">Tham gia hội thảo về các công nghệ xây dựng hiện đại tại Hà Nội</p>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Đọc tiếp →</a>
            </div>
          </div>
          
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <NuxtImg placeholder="/placeholder.png" src="/images/news-3.jpg" alt="Tin tức" class="w-full h-48 object-cover"/>
            <div class="p-6">
              <span class="text-sm text-blue-600">20/05/2023</span>
              <h3 class="text-xl font-semibold my-2">Ký kết hợp tác với đối tác mới</h3>
              <p class="text-gray-700 mb-4">Ký kết hợp tác chiến lược với Công ty CP Vật liệu xây dựng Thái Nguyên</p>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Đọc tiếp →</a>
            </div>
          </div>
        </div>
        <div class="text-center mt-10">
          <button class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            Xem tất cả tin tức
          </button>
        </div>
      </div>
    </div> -->
    <div class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Bạn cần tư vấn về dự án xây dựng?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Liên hệ ngay với chúng tôi để được hỗ trợ và tư vấn miễn phí</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Gửi yêu cầu
          </button>
          <div class="flex items-center justify-center px-6 py-3 border border-white rounded-lg">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>0986 108 999</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
