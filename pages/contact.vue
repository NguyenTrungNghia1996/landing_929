<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-7xl overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- Thông tin công ty -->
        <div class="bg-blue-600 text-white p-6 md:p-10 flex flex-col justify-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
          <p class="mb-2 text-base md:text-lg"><strong>Tên công ty:</strong> Công ty Cổ Phần Tư vấn Xây dựng 929</p>
          <p class="mb-2 text-base md:text-lg"><strong>Địa chỉ:</strong> Tổ 7, đường 3-2, phường Tân Lập, TP Thái Nguyên</p>
          <p class="mb-2 text-base md:text-lg"><strong>Điện thoại:</strong> 0986 108 999</p>
          <p class="mb-2 text-base md:text-lg"><strong>Email:</strong> congty929@gmail.com.vn</p>
        </div>

        <!-- Form liên hệ -->
        <div class="p-6 md:p-10">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label class="block text-sm md:text-base font-medium text-gray-700">Họ và tên</label>
              <input v-model="form.name" type="text" class="mt-1 w-full px-4 py-2 md:px-5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập họ và tên">
            </div>

            <div>
              <label class="block text-sm md:text-base font-medium text-gray-700">Email</label>
              <input v-model="form.email" type="email" class="mt-1 w-full px-4 py-2 md:px-5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập email">
            </div>

            <div>
              <label class="block text-sm md:text-base font-medium text-gray-700">Số điện thoại</label>
              <input v-model="form.phone" type="text" class="mt-1 w-full px-4 py-2 md:px-5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập số điện thoại">
            </div>

            <div>
              <label class="block text-sm md:text-base font-medium text-gray-700">Nội dung</label>
              <textarea v-model="form.message" rows="5" class="mt-1 w-full px-4 py-2 md:px-5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập nội dung cần liên hệ"></textarea>
            </div>

            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold py-2 md:py-3 rounded-lg transition">Gửi liên hệ</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = async () => {
  try {
    // Giả sử gửi đến API ở đây, ví dụ:
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: form.value
    // })
    console.log('Dữ liệu gửi:', form.value)
    alert('Gửi liên hệ thành công!')
    form.value = { name: '', email: '', phone: '', message: '' }
  } catch (err) {
    console.error('Gửi thất bại:', err)
    alert('Đã xảy ra lỗi, vui lòng thử lại.')
  }
}
</script>

<style scoped>
/* Responsive điều chỉnh thêm nếu cần */
</style>
