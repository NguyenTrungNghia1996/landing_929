<template>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <NuxtImg placeholder="/placeholder.png" src="/home.jpg" alt="Về công ty" class="rounded-lg shadow-lg w-full" />
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">Công Ty Cổ Phần Tư Vấn Xây Dựng 929</h2>
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
              <span>Đội ngũ hơn 20 kỹ sư, kiến trúc sư giàu kinh nghiệm</span>
            </div>
          </div>
          <NuxtLink to="/introduce/about_us" class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"> Tìm hiểu thêm về chúng tôi </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
