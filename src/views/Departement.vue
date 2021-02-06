<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Départements</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-item class="ion-margin ion-justify-content-between">
        <ion-label>Département</ion-label>
        <ion-select placeholder="Sélectionnez" id="selected">
          <ion-select-option v-for="item in allDepartment" :key="item" :value="item.code">{{item.code}} {{item.nom}} </ion-select-option>
        </ion-select>
      </ion-item>

      <div style="display: flex; justify-content: center">
        <ion-button class="ion-margin-vertical" id="btn" @click="showCity">Rechercher</ion-button>
      </div>

      <ion-card v-for="city in allCity" :key="city">
        <ion-card-header style="display: flex; flex-direction: column; align-items: center">
          <ion-card-subtitle>{{city.code}}</ion-card-subtitle>
          <ion-card-title>{{city.nom}}</ion-card-title>
        </ion-card-header>

        <ion-list>
          <ion-item>
            <ion-label>Département</ion-label>
            <ion-label class="ion-text-end">{{city.codeDepartement}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Région</ion-label>
            <ion-label class="ion-text-end">{{city.codeRegion}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Code Postal</ion-label>
            <ion-label style="color: white" class="ion-text-end">{{city.codesPostaux.join(',')}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Population</ion-label>
            <ion-label class="ion-text-end">{{city.population}}</ion-label>
          </ion-item>
        </ion-list>
      </ion-card>

      

    </ion-content>
  </ion-page>
</template>

<style scoped>

  #btn{
    width: 90%;
  }

</style>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect } from '@ionic/vue';
import axios from 'axios'

export default  {
  name: 'Tab2',
  data(){
    return{
      allDepartment: null,
      allCity: null
    }
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSelect },
  methods: {
    showCity() {

      let selectValue = document.getElementById('selected').value
      axios.get('https://geo.api.gouv.fr/departements/'+selectValue+'/communes')
              .then((response) =>{
                console.log(response.data)
                this.allCity = response.data
              })
              .catch(function (error) {
                console.log(error)
              })
    }
  },
  mounted() {
    axios.get('https://geo.api.gouv.fr/departements')
            .then((response) =>{
              console.log(response.data)
              this.allDepartment = response.data
            })
            .catch(function (error) {
              console.log(error)
            })
  }
}



</script>