<template>
  <v-app>
    <v-container>
       <v-row class="grey lighten-3">
        <v-col cols="6" sm="4" md="3" lg="2" xl="2" style="background-color: #FFCDD2">
         <Test/>
        </v-col>
        <v-col cols="18" sm="12" md="9" lg="6" xl="4" style="background-color: #F8BBD0">
          <HelloWorld/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Test from './components/Test';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
  },

  data: () => ({
    //
  }),
};
</script>
