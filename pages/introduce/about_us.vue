<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">Công Ty CP Tư Vấn Xây Dựng 929</h1>
        <p class="text-xl md:text-2xl max-w-3xl">Uy tín - Chất lượng - Tiến độ - Giá thành và hiệu quả</p>
      </div>
    </div>

    <!-- About Section -->
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
          <NuxtImg placeholder="/placeholder.png" src="/images/company-building.jpg" alt="Trụ sở công ty" class="rounded-lg shadow-lg w-full h-auto object-cover"/>
        </div>
      </div>
    </div>

    <!-- Services Section -->
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

    <!-- Experience Section -->
    <div class="container mx-auto px-4 py-12 md:py-16">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">Dự án tiêu biểu</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <NuxtImg placeholder="/placeholder.png" src="/images/project-1.jpg" alt="Dự án xây dựng nhà máy gạch" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Nhà máy gạch liên hoàn</h3>
            <p class="text-gray-600 mb-3">Xóm Ao Sen, xã Thành Công, huyện Phổ Yên</p>
            <p class="text-gray-700">Khảo sát địa hình</p>
          </div>
        </div>

        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <NuxtImg placeholder="/placeholder.png"  src="/images/project-2.jpg" alt="Trường mầm non 19-5" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Trường mầm non 19-5</h3>
            <p class="text-gray-600 mb-3">Thành phố Thái Nguyên</p>
            <p class="text-gray-700">Tư vấn giám sát thi công</p>
          </div>
        </div>

        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <NuxtImg placeholder="/placeholder.png"  src="/images/project-3.jpg" alt="Đường bê tông xã Phúc Trìu" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Đường bê tông xã Phúc Trìu</h3>
            <p class="text-gray-600 mb-3">Thành phố Thái Nguyên</p>
            <p class="text-gray-700">Tư vấn thiết kế</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Xem thêm dự án
        </button>
      </div>
    </div>

    <!-- Team Section -->
    <div class="bg-gray-100 py-12 md:py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">Đội ngũ nhân sự</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-100">
              <NuxtImg placeholder="/placeholder.png"  src="/images/team-1.jpg" alt="Đào Đình Dũng" class="w-full h-full object-cover"/>
            </div>
            <h3 class="text-xl font-semibold">Ông. Đào Đình Dũng</h3>
            <p class="text-blue-600 mb-2">Chủ tịch HĐQT - Giám đốc</p>
            <p class="text-gray-600">Kỹ sư cầu đường</p>
            <p class="text-gray-500 text-sm mt-2">Hơn 15 năm kinh nghiệm</p>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-100">
              <NuxtImg placeholder="/placeholder.png"  src="/images/team-2.jpg" alt="Vũ Hồng Phong" class="w-full h-full object-cover"/>
            </div>
            <h3 class="text-xl font-semibold">Ông. Vũ Hồng Phong</h3>
            <p class="text-blue-600 mb-2">Thành viên HĐQT</p>
            <p class="text-gray-600">Kỹ sư cầu đường</p>
            <p class="text-gray-500 text-sm mt-2">Hơn 15 năm kinh nghiệm</p>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-100">
              <NuxtImg placeholder="/placeholder.png" src="/images/team-3.jpg" alt="Trần Thị Thu Hiền" class="w-full h-full object-cover"/>
            </div>
            <h3 class="text-xl font-semibold">Bà. Trần Thị Thu Hiền</h3>
            <p class="text-blue-600 mb-2">Thành viên HĐQT</p>
            <p class="text-gray-600">Kỹ sư cầu đường bộ</p>
            <p class="text-gray-500 text-sm mt-2">Hơn 7 năm kinh nghiệm</p>
          </div>

          <div class="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-100">
              <NuxtImg placeholder="/placeholder.png"  src="/images/team-4.jpg" alt="Nguyễn Thị Thu Hằng" class="w-full h-full object-cover"/>
            </div>
            <h3 class="text-xl font-semibold">Bà. Nguyễn Thị Thu Hằng</h3>
            <p class="text-blue-600 mb-2">Trưởng phòng kế toán</p>
            <p class="text-gray-600">Kế toán trưởng</p>
            <p class="text-gray-500 text-sm mt-2">Hơn 8 năm kinh nghiệm</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Values Section -->
    <div class="container mx-auto px-4 py-12 md:py-16">
      <h2 class="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-12">Phương châm làm việc</h2>
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="md:flex">
            <div class="md:w-1/2 bg-blue-600 p-8 text-white">
              <h3 class="text-xl font-bold mb-4">Cam kết của chúng tôi</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <svg class="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Tìm hiểu kỹ yêu cầu khách hàng để cung cấp dịch vụ và giải pháp tối ưu</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Không ngừng nâng cao năng lực chuyên môn, tích lũy kinh nghiệm thực tế</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Đảm bảo đúng tiến độ theo hợp đồng</span>
                </li>
              </ul>
            </div>
            <div class="md:w-1/2 p-8">
              <h3 class="text-xl font-bold mb-4 text-blue-800">Chất lượng là ưu tiên hàng đầu</h3>
              <p class="text-gray-700 mb-4">
                Chúng tôi coi chất lượng là nhiệm vụ hàng đầu trong lĩnh vực hoạt động sản xuất kinh doanh của mình.
              </p>
              <p class="text-gray-700">
                Sẵn sàng liên danh, hợp tác với các đơn vị tư vấn trong và ngoài nước nhằm nâng cao chất lượng sản phẩm tư vấn, sản phẩm xây dựng có yêu cầu kỹ thuật cao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <!-- <div class="bg-blue-800 text-white py-12 md:py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">Bạn cần tư vấn về dự án xây dựng?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Liên hệ ngay với chúng tôi để được hỗ trợ và tư vấn miễn phí</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-6 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Liên hệ ngay
          </button>
          <button class="px-6 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            0986 108 999
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

<script setup>
// Bạn có thể thêm các logic JavaScript nếu cần
</script>

<style>
/* Thêm các style tùy chỉnh nếu cần */
</style>