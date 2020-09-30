<template>
  <q-page class="flex item-start q-pa-lg row q-col-gutter-lg">
    <pet-card v-for="n in 6" :key="n" />
  </q-page>
</template>

<script>
import PetCard from 'components/PetCard.vue'

export default {
  name: 'PageIndex',

  components: {
    PetCard
  }
}
</script>
