<template>
  <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
          <h2 class="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Giới thiệu công ty</h2>
          <p class="text-gray-700 mb-4">
            Công ty cổ phần tư vấn xây dựng 929 là đơn vị hoạt động đa chức năng trong lĩnh vực tư vấn, thiết kế, giám sát và thi công xây dựng công trình.
          </p>
          <p class="text-gray-700 mb-4">
            Với đội ngũ cán bộ công nhân viên giàu kinh nghiệm, năng động, không ngừng học hỏi trau dồi kiến thức, chúng tôi luôn tiếp cận các công nghệ mới để mang đến giải pháp tối ưu cho khách hàng.
          </p>
          <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">Thông tin công ty</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span>Tổ 7 đường 3-2, phường Tân Lập, TP Thái Nguyên</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>Điện thoại: 0986108999</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>Email: congty929@gmail.com.vn</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span>Tài khoản: 8500201002857 tại Ngân hàng Nông nghiệp và PTNT tỉnh Thái Nguyên</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:w-1/2">
          <NuxtImg placeholder="/placeholder.png" src="/home.jpg" alt="Trụ sở công ty" class="rounded-lg shadow-lg w-full h-auto object-cover"/>
        </div>
      </div>
    </div>
</template>