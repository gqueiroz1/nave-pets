<template>
  <div class="col-12 col-sm-6 col-md-4">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        illo quidem et ullam. Ipsa hic mollitia ducimus suscipit, veniam magni!
      </q-card-section>

      <q-card-section class="q-pt-md">
        <q-btn
          color="primary"
          class="q-mr-lg"
          :label="petCardButtonLabel"
          @click="adoptPet()"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'dog-card',

  computed: {
    petCardButtonLabel () {
      return 'Adotar esse pet'
    }
  },

  methods: {
    adoptPet () {

    }
  }
}
</script>

<style lang="sass" scoped>
.q-card
  min-height: 400px
</style>
