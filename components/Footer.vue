<template>
<footer class="bg-[url('/bgfooter.png')] bg-center bg-cover bg-no-repeat w-screen">
    <div class="container mx-auto px-4 sm:px-[50px] py-6 sm:py-10 text-white">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
        <div>
          <h3 class="font-roboto font-bold text-base sm:text-lg mb-2 sm:mb-4">DỊCH VỤ CHÍNH</h3>
          <ul class="space-y-1 sm:space-y-2">
            <li class="font-roboto flex items-start text-sm sm:text-base">
              <nuxt-link to="/">
                <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white mt-0.5 mr-1 flex-shrink-0" size="14" />
                <span>Tư vấn thiết kế xây dựng</span>
              </nuxt-link>
            </li>
            <li class="font-roboto flex items-start text-sm sm:text-base">
              <nuxt-link to="/">
                <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white mt-0.5 mr-1 flex-shrink-0" size="14" />
                <span>Giám sát thi công</span>
              </nuxt-link>
            </li>
            <li class="font-roboto flex items-start text-sm sm:text-base">
              <nuxt-link to="/">
                <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white mt-0.5 mr-1 flex-shrink-0" size="14" />
                <span>Thi công xây dựng</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-roboto font-bold text-base sm:text-lg mb-2 sm:mb-4">LĨNH VỰC HOẠT ĐỘNG</h3>
          <ul class="space-y-1 sm:space-y-2">
            <li class="font-roboto flex items-start text-sm sm:text-base">
              <nuxt-link to="/">
                <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white mt-0.5 mr-1 flex-shrink-0" size="14" />
                <span>Quy hoạch đô thị</span>
              </nuxt-link>
            </li>
            <li class="font-roboto flex items-start text-sm sm:text-base">
              <nuxt-link to="/">
                <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white mt-0.5 mr-1 flex-shrink-0" size="14" />
                <span>Công trình giao thông</span>
              </nuxt-link>
            </li>
            <li class="font-roboto flex items-start text-sm sm:text-base">
              <nuxt-link to="/">
                <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white mt-0.5 mr-1 flex-shrink-0" size="14" />
                <span>Hệ thống điện</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-span-1 md:col-span-2">
          <h3 class="font-roboto font-bold text-base sm:text-lg mb-2 sm:mb-4">CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG 929</h3>
          <ul class="space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li class="font-roboto flex flex-col sm:flex-row sm:items-start gap-1">
              <div class="flex items-start">
                <Icon name="mdi:map-marker" class="text-base mt-0.5 mr-1 flex-shrink-0" />
                <span class="font-bold">Trụ sở chính: </span>
              </div>
              <span>Tổ 7 đường 3-2 phường Tân Lập, TP Thái Nguyên, Tỉnh Thái Nguyên</span>
            </li>
            <li class="flex-col grid grid-cols-1 md:grid-cols-2 sm:flex-row sm:items-center gap-1 sm:gap-2">
              <div class="">
                <Icon name="mdi:phone" class="text-base mr-1 flex-shrink-0" />
                <span>Điện thoại: 0986108999</span>
              </div>
              <div class="">
                <Icon name="mdi:email" class="text-base mr-1 flex-shrink-0" />
                <span>Email: congty929@gmail.com</span>
              </div>
            </li>
            <li class="flex items-center">
              <Icon name="mdi:web" class="text-base mr-1 flex-shrink-0" />
              <span>Mã số thuế: 4600796888</span>
            </li>
            <li class="flex items-center">
              <Icon name="mdi:bank" class="text-base mr-1 flex-shrink-0" />
              <span>Tài khoản: 8500201002857 tại Ngân hàng Nông nghiệp và PTNT tỉnh Thái Nguyên</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>