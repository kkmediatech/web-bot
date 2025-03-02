<template>
  <div>
    <!-- Modal Component -->
    <el-dialog
      :visible.sync="modalVisible"
      width="30%"
      center
      :show-close="true"
      :close-on-click-modal="true"
      :close-on-press-escape="true"
    >
      <div slot="title">
        <h2>Verify that you are human</h2>
      </div>
      <div class="cf-turnstile" data-sitekey="0x4AAAAAAA7SN9BgICU6k8R5"></div>
    </el-dialog>

    <!-- Table Component -->
    <el-table
      :data="tableData"
      style="width: 1606px"
    >
      <el-table-column type="expand">
        <template>
          <div></div>
        </template>
      </el-table-column>
      <el-table-column prop="code" width="195"></el-table-column>
      <el-table-column prop="type" width="78"></el-table-column>
      <el-table-column prop="category" width="188"></el-table-column>
      <el-table-column prop="number" width="157"></el-table-column>
      <el-table-column prop="startTime" width="188"></el-table-column>
      <el-table-column prop="duration" width="188"></el-table-column>
      <el-table-column prop="endTime" width="188"></el-table-column>
      <el-table-column prop="price" width="188"></el-table-column>
      <el-table-column width="188">
        <template>
          <span class="grab-single" @click="openModal">แข่งขันรับงาน</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      modalVisible: false,
      tableData: [
        {
          code: 'EA1-LAK',
          type: 'C',
          category: '4W',
          number: '226',
          startTime: '10-02-2025 12:30',
          duration: '0h 26m',
          endTime: '10-02-2025 13:30',
          price: '2395'
        },
        {
          code: 'EA1-AYUU',
          type: 'C',
          category: '4W',
          number: '226',
          startTime: '10-02-2025 12:30',
          duration: '0h 26m',
          endTime: '10-02-2025 13:30',
          price: '2395'
        },
        {
          code: 'AYUU-NO3',
          type: 'C',
          category: '4W',
          number: '226',
          startTime: '10-02-2025 12:30',
          duration: '0h 26m',
          endTime: '10-02-2025 13:30',
          price: '2395'
        }
      ]
    };
  },
  mounted() {
    // Load Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Define the callback
    window.onloadTurnstileCallback = (token) => {
      console.log("Turnstile token:", token);
      // Handle the token as needed
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    }
  }
};
</script>

<style>
.grab-single {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>