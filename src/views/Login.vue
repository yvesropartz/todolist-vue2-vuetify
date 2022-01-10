<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field 
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field v-if="vraiOuFaux === 'true'"
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
      Envoyer
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
      Annuler
    </v-btn>
  </v-form>
</template>

<script>
  import userService from '../services/userService';
  import storage from '../plugins/storage.js';

  export default {
    name: 'Inscription',

    components: {

  },

      data(){
          return{
          name: '',
          email: '',
          pwd: '',

          valid: true,

          nameRules: [
                v => !!v || 'Le nom est obligatoire',
                v => (v && v.length <= 4) || 'il doit avoir au moins 10 caracteres',
          ],

        emailRules: [
          v => !!v || 'l E-mail est obligatoire',
          v => /.+@.+\..+/.test(v) || 'E-mail non valide',
        ],

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
      async validate () {
        this.$refs.form.validate()
        // si creation user 
        if(this.vraiOuFaux === 'false') {
        let result = await userService.inscription(
                  this.name,
                  this.email,
                  this.pwd
              );
                     console.log(result);

              if(result.success == true) {
                this.$router.push({name: 'Home'})
              }
              } 
              // authentification
              else
              {

        let userData = await userService.login(
                  this.name, 
                  this.pwd
              );

            if(userData){
                storage.set('userData', userData);
                this.$router.push({name: 'home'});
            } else {
                this.loginFailed = true;
            }
              }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
        this.$router.push({name: 'Home'})

      },
    },
    created (){
      this.vraiOuFaux = this.$route.params.create;
    }
  }
</script>