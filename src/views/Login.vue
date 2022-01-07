<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field v-if="vraiOuFaux === 'false'"
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

  <v-text-field
      v-model="pwd"
      :counter="8"
      :rules="pwdRules"
      label="pwd"
      required
  ></v-text-field>

   

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
  export default {

      data(){
          return{
          valid: true,
          name: '',
          nameRules: [
                v => !!v || 'Le nom est obligatoire',
                v => (v && v.length <= 10) || 'il doit avoir au moins 10 caracteres',
          ],
        email: '',
        emailRules: [
          v => !!v || 'l E-mail est obligatoire',
          v => /.+@.+\..+/.test(v) || 'E-mail non valide',
        ],
        pwd: '',
        pwdRules: [
          v => (v && v.length <= 8) || 'il doit avoir au moins 8 caracteres',
          ],
         vraiOuFaux: null, 
          };
      },
      
   
    // data: () => ({
    //   valid: true,
    //   name: '',
    //   nameRules: [
    //     v => !!v || 'Le nom est obligatoire',
    //     v => (v && v.length <= 10) || 'il doit avoir au moins 10 caracteres',
    //   ],
    //   email: '',
    //   emailRules: [
    //     v => !!v || 'l E-mail est obligatoire',
    //     v => /.+@.+\..+/.test(v) || 'E-mail non valide',
    //   ],
    //   pwd: '',
    //   pwdRules: [
    //     v => (v && v.length <= 8) || 'il doit avoir au moins 8 caracteres',
    //   ],
    //   vraiOuFaux: null, // pour récupérer la partie dynamique de l'URL
   
    // }),
    
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    created (){
      this.vraiOuFaux = this.$route.params.create;
    }
  }
</script>