<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header Section -->
    <header class="mb-10 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Lịch sử hình thành</h1>
      <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
    </header>

    <!-- Timeline Section -->
    <div class="relative">
      <!-- Timeline line -->
      <div class="hidden md:block absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

      <!-- Timeline items -->
      <div class="space-y-8 md:space-y-16">
        <!-- 2010 - Thành lập -->
        <div class="relative flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
            <!-- <div class="md:hidden absolute left-0 top-4 w-4 h-4 rounded-full bg-blue-600 -ml-2"></div> -->
            <h2 class="text-2xl font-bold text-blue-700">2010</h2>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Thành lập công ty</h3>
            <p class="text-gray-600">
              Công ty Cổ Phần Tư vấn Xây dựng 929 được thành lập ngày 27/02/2010 với giấy chứng nhận kinh doanh số 4600796888 do Sở Kế hoạch và Đầu tư tỉnh Thái Nguyên cấp.
            </p>
          </div>
          
          <!-- <div class="hidden md:block w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-4 flex-shrink-0">
            2010
          </div> -->
          
          <div class="md:w-1/2 md:pl-8">
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h4 class="font-bold text-gray-800 mb-2">Thông tin ban đầu:</h4>
              <ul class="list-disc pl-5 text-gray-600 space-y-1">
                <!-- <li>Vốn điều lệ: 1.966 tỷ đồng</li> -->
                <li>Trụ sở: Tổ 7 phường Tân Lập, TP Thái Nguyên</li>
                <li>Ngành nghề chính: Tư vấn xây dựng, khảo sát, thiết kế</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 2015 - Phát triển -->
        <div class="relative flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 mb-4 md:mb-0">
            <!-- <div class="md:hidden absolute left-0 top-4 w-4 h-4 rounded-full bg-orange-500 -ml-2"></div> -->
            <h2 class="text-2xl font-bold text-orange-600">2015</h2>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Giai đoạn phát triển</h3>
            <p class="text-gray-600">
              Công ty mở rộng hoạt động ra các tỉnh lân cận, thực hiện nhiều dự án lớn về hạ tầng giao thông và xây dựng dân dụng.
            </p>
          </div>
          
          <!-- <div class="hidden md:block w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mx-4 flex-shrink-0 order-1">
            2015
          </div> -->
          
          <div class="md:w-1/2 md:pl-8 order-3">
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h4 class="font-bold text-gray-800 mb-2">Dự án tiêu biểu:</h4>
              <ul class="list-disc pl-5 text-gray-600 space-y-1">
                <li>Các công trình GTNT trên địa bàn tỉnh Thái Nguyên và Bắc Kạn</li>
                <li>Một số công trình Trung tâm văn hóa thể thao, trường Mầm non trên địa bàn tỉnh Thái Nguyên</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 2020 - Mở rộng -->
        <div class="relative flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
            <!-- <div class="md:hidden absolute left-0 top-4 w-4 h-4 rounded-full bg-green-600 -ml-2"></div> -->
            <h2 class="text-2xl font-bold text-green-700">2020</h2>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Mở rộng quy mô</h3>
            <p class="text-gray-600">
              Công ty mở rộng sang lĩnh vực giám sát thi công, quản lý dự án và thực hiện các dự án tại nhiều tỉnh thành khác như Hà Nội, Bắc Kạn.
            </p>
          </div>
          
          <!-- <div class="hidden md:block w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mx-4 flex-shrink-0">
            2020
          </div> -->
          
          <div class="md:w-1/2 md:pl-8">
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h4 class="font-bold text-gray-800 mb-2">Thành tựu:</h4>
              <ul class="list-disc pl-5 text-gray-600 space-y-1">
                <li>Thực hiện hơn 100 dự án các loại</li>
                <li>Mở rộng đội ngũ lên 30+ kỹ sư, kiến trúc sư</li>
                <li>Đầu tư trang thiết bị hiện đại</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 2025 - Hiện tại -->
        <div class="relative flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 mb-4 md:mb-0">
            <!-- <div class="md:hidden absolute left-0 top-4 w-4 h-4 rounded-full bg-purple-600 -ml-2"></div> -->
            <h2 class="text-2xl font-bold text-purple-700">2025</h2>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Hiện tại</h3>
            <p class="text-gray-600">
              Công ty tiếp tục phát triển với phương châm "Uy tín - Chất lượng - Tiến độ - Giá thành và hiệu quả", không ngừng cải tiến và nâng cao năng lực.
            </p>
          </div>
          
          <!-- <div class="hidden md:block w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mx-4 flex-shrink-0 order-1">
            2025
          </div> -->
          
          <div class="md:w-1/2 md:pl-8 order-3">
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h4 class="font-bold text-gray-800 mb-2">Thông tin hiện tại:</h4>
              <ul class="list-disc pl-5 text-gray-600 space-y-1">
                <li>Đăng ký thay đổi lần 5 ngày 12/3/2025</li>
                <li>Đội ngũ nhân sự chủ chốt: 30+ người</li>
                <li>Máy móc thiết bị hiện đại phục vụ công tác khảo sát, thiết kế</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Values Section -->
    <div class="mt-20">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">Phương châm hoạt động</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
          <div class="text-blue-500 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Chất lượng</h3>
          <p class="text-gray-600">
            Luôn đặt chất lượng sản phẩm tư vấn lên hàng đầu, tuân thủ quy trình kỹ thuật và tiêu chuẩn xây dựng.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
          <div class="text-orange-500 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Tiến độ</h3>
          <p class="text-gray-600">
            Cam kết hoàn thành đúng tiến độ theo hợp đồng, đảm bảo kế hoạch triển khai dự án của khách hàng.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
          <div class="text-green-500 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Chuyên nghiệp</h3>
          <p class="text-gray-600">
            Đội ngũ nhân sự giàu kinh nghiệm, không ngừng học hỏi và ứng dụng công nghệ mới trong công tác tư vấn.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Bạn có thể thêm các logic cần thiết ở đây
</script>

<style scoped>
/* Thêm các style tùy chỉnh nếu cần */
</style>