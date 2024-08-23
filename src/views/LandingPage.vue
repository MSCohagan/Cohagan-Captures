<template lang="html">
  <section class="section is-medium header">
    <h1 class="is-size-2">Welcome to Cohagan Creates!</h1>
  </section>
  <section class="section featured-box">
    <h2 class="is-size-3">Featured Games</h2>
  </section>
  <section class="section featured-box">
    <b-carousel>
      <b-carousel-item>
        <h3>State Capital Guessing Game</h3>
        <b-tooltip label="State Capital Guessing Game" position="is-bottom">
          <div>
            <a class="states-link" href="/statesGame">
              <img src="../assets/us.png" class="states-png" />
            </a>
          </div>
        </b-tooltip>
      </b-carousel-item>
      <b-carousel-item>
        <h3>European Capital Guessing Game</h3>
        <b-tooltip label="State Capital Guessing Game" position="is-bottom">
          <div>
            <a class="states-link" href="/statesGame">
              <img src="./assets/europe.svg" class="europe-svg" />
            </a>
          </div>
        </b-tooltip>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="css">
.header {
  display: flex;
  justify-content: center;
  text-align: center;
}

.featured-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.states-link {
  display: flex;
  justify-content: center;
}

.states-png {
  max-width: 50%;
}

.europe-svg {
  max-width: 65%;
}
</style>
