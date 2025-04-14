<script setup>
import { ref, onBeforeMount } from "vue"

const cards = ref([]);

onBeforeMount(async () => {
  const response = await fetch("https://api.magicthegathering.io/v1/cards?pageSize=100")
  
  const data = await response.json()

  const filtered = data.cards.filter((card) => card.imageUrl)

  cards.value = filtered.sort(() => 0.5 - Math.random()).slice(0, 3)
});
</script>

<template>
  <div id="main-wrapper">
    <div class="wrapper style1">
      <div class="inner">
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
                <h2>Mes 3 Dernières Cartes</h2>
              </header>
            </div>

            <div
              v-for="(card, index) in cards"
              :key="card.id"
              class="col-4 col-12-medium"
            >
              <section>
                <a href="#" 
                class="image featured">
                  <img 
                  :src="card.imageUrl" 
                  :alt="card.name" />
                </a>
                <header class="second icon solid fa-dragon">
                  <h3>{{ card.name }}</h3>
                  
                  <p>{{ card.type }}</p>
                  
                </header>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
