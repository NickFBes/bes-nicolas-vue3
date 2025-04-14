<script setup>
import { ref, onBeforeMount } from "vue"

const cards = ref([])
const page = ref(1)
const loading = ref(false)

const loadCards = async () => {
  
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards?page=${page.value}&pageSize=10`
  );
  const data = await response.json()
  const filtered = data.cards.filter(card => card.name)
  cards.value.push(...filtered)
  page.value++
  
};

onBeforeMount(() => {
  loadCards();
});
</script>

<template>
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div id="content">
            <article>
              <header class="major">
                <h2>Ma Collection</h2>
              </header>

              <div
                class="card-list"
                v-for="card in cards"
                :key="card.id"
              >
                <div class="card-title">
                    
                  <strong>{{ card.name }}</strong>
                </div>
                <div class="card-action">
                  <router-link :to="`/card/${card.id}`"><button>👀 Card Details</button></router-link>
                </div>
              </div>

              <div class="load-more">
                <button @click="loadCards">
                  PLUS
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>