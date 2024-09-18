<template>

    <div>
      <SideBar />
      <main class="lg:pl-20">
        <div class="xl:pl-96">
          <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            <ActivityView />
          </div>
        </div>
      </main>
  
  
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import SideBar from "../components/SideBar.vue";
  import ActivityView from "../components/ActivityView.vue";
  
  </script>