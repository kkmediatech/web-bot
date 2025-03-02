<template>
    <div>
      <h1>รายละเอียดงาน</h1>
      <p><strong>Code:</strong> {{ rowData.code }}</p>
      <p><strong>Type:</strong> {{ rowData.type }}</p>
      <p><strong>Category:</strong> {{ rowData.category }}</p>
      <p><strong>Number:</strong> {{ rowData.number }}</p>
      <p><strong>Start Time:</strong> {{ rowData.startTime }}</p>
      <p><strong>Duration:</strong> {{ rowData.duration }}</p>
      <p><strong>End Time:</strong> {{ rowData.endTime }}</p>
      <p><strong>Price:</strong> {{ rowData.price }}</p>
      <el-button type="primary" @click="$router.push('/')">กลับ</el-button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add custom styles here */
  </style>