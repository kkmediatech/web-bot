<template>
  <div>
    <!-- Table -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="code" label="Code" width="150"></el-table-column>
      <el-table-column prop="type" label="Type" width="100"></el-table-column>
      <el-table-column prop="category" label="Category" width="100"></el-table-column>
      <el-table-column prop="number" label="Number" width="100"></el-table-column>
      <el-table-column prop="startTime" label="Start Time" width="180"></el-table-column>
      <el-table-column prop="duration" label="Duration" width="120"></el-table-column>
      <el-table-column prop="endTime" label="End Time" width="180"></el-table-column>
      <el-table-column prop="price" label="Price" width="120"></el-table-column>

      <!-- New Column for Action -->
      <el-table-column label="Action" width="150">
        <template slot-scope="scope">
          <span class="grab-single" @click="openDialog(scope.row)">แข่งขันรับงาน</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- Dialog with Cloudflare Turnstile -->
    <el-dialog title="ยืนยันตัวตน" :visible.sync="dialogVisible" width="30%" @open="initTurnstile" @close="destroyTurnstile">
      <p><strong>Code:</strong> {{ selectedRow.code }}</p>
      <p><strong>Type:</strong> {{ selectedRow.type }}</p>
      <p><strong>Category:</strong> {{ selectedRow.category }}</p>
      <p><strong>Number:</strong> {{ selectedRow.number }}</p>
      <p><strong>Start Time:</strong> {{ selectedRow.startTime }}</p>
      <p><strong>Duration:</strong> {{ selectedRow.duration }}</p>
      <p><strong>End Time:</strong> {{ selectedRow.endTime }}</p>
      <p><strong>Price:</strong> {{ selectedRow.price }}</p>

      <!-- Cloudflare Turnstile Widget -->
      <div id="turnstile-container"></div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">ยกเลิก</el-button>
        <el-button type="primary" :disabled="!isCaptchaSolved" @click="submitTurnstile">ยืนยัน</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ],
      dialogVisible: false, // State to control dialog visibility
      selectedRow: {}, // Store the selected row data
      turnstileWidgetId: null, // Store the Turnstile widget ID
      isCaptchaSolved: false // Track if CAPTCHA is solved
    };
  },
  methods: {
    openDialog(row) {
      this.selectedRow = row; // Set the selected row data
      this.dialogVisible = true; // Open the dialog
    },
    initTurnstile() {
      // Load Cloudflare Turnstile script dynamically
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Initialize Turnstile widget after script is loaded
      script.onload = () => {
        if (window.turnstile) {
          this.turnstileWidgetId = window.turnstile.render('#turnstile-container', {
            sitekey: '0x4AAAAAAA7SN9BgICU6k8R5', // Your Cloudflare Turnstile site key
            callback: (token) => {
              this.isCaptchaSolved = true; // Enable the confirm button when CAPTCHA is solved
            }
          });
        }
      };
    },
    destroyTurnstile() {
      // Destroy the Turnstile widget when dialog is closed
      if (this.turnstileWidgetId && window.turnstile) {
        window.turnstile.remove(this.turnstileWidgetId);
        this.turnstileWidgetId = null;
        this.isCaptchaSolved = false; // Reset CAPTCHA state
      }
    },
    closeDialog() {
      this.dialogVisible = false; // Close the dialog
    },
    submitTurnstile() {
      // Get the Turnstile response token
      if (window.turnstile) {
        const token = window.turnstile.getResponse(this.turnstileWidgetId);
        if (token) {
          alert(`Turnstile Token: ${token}`); // You can send this token to your server for verification
          this.dialogVisible = false; // Close the dialog after submission
        } else {
          alert('Please complete the Turnstile challenge.');
        }
      }
    }
  }
};
</script>

<style scoped>
.grab-single {
  color: #409eff;
  cursor: pointer;
  text-decoration: underline;
}

.grab-single:hover {
  color: #66b1ff;
}
</style>