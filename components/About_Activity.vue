<template>
   <div class="bg-blue-50 py-12 md:py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">Lĩnh vực hoạt động</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-blue-600 mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Đo đạc & Quy hoạch</h3>
            <p class="text-gray-700">Đo vẽ bản đồ địa hình, lập quy hoạch chung đô thị, quy hoạch chi tiết các khu dân cư, khu chức năng đô thị, khu công nghiệp.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-blue-600 mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Thiết kế xây dựng</h3>
            <p class="text-gray-700">Lập dự án đầu tư, khảo sát, thiết kế xây dựng các công trình giao thông, nông nghiệp, dân dụng - công nghiệp và hạ tầng kỹ thuật.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-blue-600 mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Giám sát thi công</h3>
            <p class="text-gray-700">Tư vấn giám sát thi công xây dựng, đảm bảo chất lượng công trình theo đúng thiết kế và tiêu chuẩn kỹ thuật.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-blue-600 mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.17 3.5c.63-.24 1.29-.16 1.8.19.7.51 1.03 1.36.83 2.15-.2.8-.89 1.42-1.7 1.56-.8.14-1.62-.2-2.03-.9-.4-.7-.32-1.58.22-2.18.5-.57 1.3-.7 1.88-.42zm-4.85 2.03c.2-.8.89-1.42 1.7-1.56.8-.13 1.62.2 2.03.9.4.7.32 1.58-.22 2.18-.5.57-1.3.7-1.88.42-.63-.24-1.29-.16-1.8.19-.7.51-1.03 1.36-.83 2.15.2.8.89 1.42 1.7 1.56.8.14 1.62-.2 2.03-.9.4-.7.32-1.58-.22-2.18-.5-.57-1.3-.7-1.88-.42-.63.24-1.29.16-1.8-.19-.7-.51-1.03-1.36-.83-2.15zM15.85 8.62c.2-.8.89-1.42 1.7-1.56.8-.13 1.62.2 2.03.9.4.7.32 1.58-.22 2.18-.5.57-1.3.7-1.88.42-.63-.24-1.29-.16-1.8.19-.7.51-1.03 1.36-.83 2.15.2.8.89 1.42 1.7 1.56.8.14 1.62-.2 2.03-.9.4-.7.32-1.58-.22-2.18-.5-.57-1.3-.7-1.88-.42-.63.24-1.29.16-1.8-.19-.7-.51-1.03-1.36-.83-2.15z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Hệ thống kỹ thuật</h3>
            <p class="text-gray-700">Thiết kế hệ thống cứu hỏa, PCCC, tín hiệu giao thông, hệ thống điện ngoại thất & nội thất công trình.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-blue-600 mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Thẩm định & Thẩm tra</h3>
            <p class="text-gray-700">Tư vấn thẩm định, thẩm tra thiết kế, tổng dự toán, dự toán các công trình xây dựng.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-blue-600 mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Quản lý dự án</h3>
            <p class="text-gray-700">Tư vấn quản lý và điều hành dự án, thẩm định kết quả đấu thầu, lập hồ sơ mời thầu.</p>
          </div>
        </div>
      </div>
    </div>
</template>