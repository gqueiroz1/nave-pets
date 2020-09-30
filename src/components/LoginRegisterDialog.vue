<template>
  <q-dialog v-model="getShowDialog" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">{{ getDialogType }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          v-if="getDialogType === 'REGISTRAR'"
          dense
          v-model="userFormData.name"
          autofocus
          label="Nome Completo"
          class="q-mb-lg"
        />
        <q-input
          dense
          v-model="userFormData.email"
          autofocus
          label="Email"
          class="q-mb-lg"
        />
        <q-input
          dense
          v-model="userFormData.password"
          type="password"
          label="Password"
          @keyup.enter="authAction"
        />
        <q-file
          v-if="getDialogType === 'REGISTRAR'"
          filled
          bottom-slots
          v-model="userFormData.userImageFile"
          accept=".png, .jpg, image/*"
          label="Imagem do perfil"
          counter
          class="col-12 q-mt-md"
        >
          <template v-slot:prepend>
            <q-icon name="camera_alt" @click.stop />
          </template>
          <template v-slot:append>
            <q-icon
            name="close"
            @click.prevent="resetUserImageFile"
            class="cursor-pointer"
            />
          </template>
        </q-file>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" @click="closeLoginRegisterDialog" />
        <q-btn flat :label="getDialogType" @click="authAction" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
/* eslint-disable no-tabs */

export default {
  data () {
    return {
      userFormData: {
        name: '',
        email: '',
        password: '',
        userImageFile: ''
      }
    }
  },

  computed: {
    ...mapGetters('loginStore', ['getShowDialog', 'getDialogType'])
  },

  methods: {
    ...mapActions('loginStore', ['toggleShowDialog']),

    closeLoginRegisterDialog () {
      this.userFormData = {}
      this.toggleShowDialog()
    },

    authAction () {
      this.getDialogType === 'LOGIN' ? this.login() : this.register()
      this.toggleShowDialog()
    },

    login () {},

    register () {},

    resetUserImageFile () {
      this.userFormData.userImageFile = null
    }
  }
}
</script>

<style></style>
