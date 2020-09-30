<template>
  <q-page class="flex items-start justify-center row q-pt-xl">
    <q-form
      @submit="registerPet"
      @reset="resetForm"
      class="q-col-gutter-md col-12 col-sm-8 row"
    >
      <q-input
        v-model="petFormData.petName"
        label="Nome do Pet"
        class="col-12 col-md-6"
      />

      <q-input
        v-model="petFormData.petBreed"
        label="Raça do Pet"
        class="col-12 col-md-6 col-lg-4"
      />

      <q-input
        type="number"
        v-model="petFormData.petAge"
        label="Idade do Pet"
        class="col-12 col-md-4 col-lg-2"
      />

      <q-file filled bottom-slots v-model="petFormData.petImageFile" accept=".png, .jpg, image/*" label="Insira uma imagem do seu pet" counter class="col-12 q-mt-md">
        <template v-slot:prepend>
          <q-icon name="camera_alt" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.prevent="resetPetImageFile" class="cursor-pointer" />
        </template>
      </q-file>

      <div class="col-12 q-mt-xl">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      petFormData: {
        petName: '',
        petAge: '',
        petBreed: '',
        petImageFile: ''
      }
    }
  },

  methods: {
    registerPet () {
      alert('register pet')
    },

    resetForm () {
      this.petFormData = {}
    },

    resetPetImageFile () {
      this.petFormData.petImageFile = null
    }
  }
}
</script>
