<script setup></script>

<template>
  <!-- Header -->
  <div id="header-wrapper">
    <div class="container">
      <!-- Header -->
      <header id="header">
        <div class="inner">
          <!-- Logo -->
          <h1><a href="index.html" id="logo">Magic</a></h1>

          <!-- Nav -->
          <nav id="nav">
            <ul>
              <li class="current_page_item"><router-link to="/">Home</router-link></li>
              <li><router-link to="/collection">Collection</router-link></li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Banner -->
      <div id="banner">
        <h2>Magic the gathering</h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
