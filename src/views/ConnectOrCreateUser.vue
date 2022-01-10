<template>
  <v-row justify="center">
   
      <v-card 
       :loading="loading"
      class="mx-auto my-12"
      max-width="374">

       
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            to="/login/false"
          >
            se connecter
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            to="/login/true"
          >
            s'enregistrer
          </v-btn>
                    <v-btn
            color="green darken-1"
            text
            to="/todo"
          >
            annuler
          </v-btn>
        </v-card-actions>
      </v-card>

  </v-row>
</template>

<script>
  export default {
    data () {
      return {
       
      }
    },
  }
</script>