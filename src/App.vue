<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="/"> Home </b-navbar-item>
      <b-navbar-dropdown label="Map Games">
        <b-navbar-item href="/statesGame"> State Capital Guessing Game </b-navbar-item>
        <b-navbar-item href="/europeGame"> European Capital Guessing Game</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
  <RouterView />
</template>

<style scoped></style>
