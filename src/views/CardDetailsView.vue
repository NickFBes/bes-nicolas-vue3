
<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const card = ref(null);

onBeforeMount(async () => {
  const response = await fetch(
    `https://api.magicthegathering.io/v1/cards/${route.params.id}`
  );
  const data = await response.json();
  card.value = data.card;
});
</script>




<template>
  <!-- Main Wrapper -->
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-8 col-12-medium">
              <div id="content">
                <article>
                  <header class="major">
                    <h2>{{ card.name  }}</h2>
                    <p><b>{{ card.type  }}</b></p>
                    <p>Artist: {{ card.artist }}</p>
                  </header>

                  <div class="image featured centered">
                    <div v-if="!card" id="spinner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="62"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </path>
                      </svg>
                    </div>
                    <img
                      v-else-if="card.imageUrl"
                      :src="card.imageUrl"
                      :alt="card.name"
                    />
                    <p v-else>No Image</p>
                  </div>
                  <p><b>{{ card.flavor }}</b></p>
                  <p><b><i>{{ card.text }}</i></b></p>
                </article>
              </div>
            </div>

            <div class="col-4 col-12-medium">
              <div id="sidebar">
                <section>
                  <header class="major">
                    <h2>Infos</h2>
                  </header>
                  <p>Rarity: <b>{{ card.rarity }}</b></p>
                  <p>Set name: <b>{{ card.setName }}</b></p>
                  <p>Subtype: <b>{{ card.subtypes  }}</b></p>
                  <p>Colors: <b>{{ card.colors  }}</b></p>
                  <p>Mana Cost: <b>{{ card.manaCost  }}</b></p>
                  
                  
                  
                  <p>Toughness: <b>{{ card.toughness  }}</b></p>

                  <span class="button alt icon">
                    Card power:
                    <template v-if="card?.power">
                      <i
                        class="fa-solid fa-fire-flame-curved"
                        v-for="n in parseInt(card.power)"
                        :key="n"
                      ></i>
                    </template>
                    <template v-else>
                      <i>Unknown</i>
                    </template>
                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
