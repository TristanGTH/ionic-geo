<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Communes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-title class="ion-margin">Code postal ou ville</ion-title>


      <ion-input id="inputBar"></ion-input>
      <div style="display: flex; justify-content: center; width: 100%">
        <ion-button class="ion-margin-vertical" id="btn" @click="showCity">Rechercher</ion-button>
      </div>

      <ion-card v-for="item in city" :key="item">
        <ion-card-header style="display: flex; flex-direction: column; align-items: center">
          <ion-card-subtitle>{{item.code}}</ion-card-subtitle>
          <ion-card-title>{{item.nom}}</ion-card-title>
        </ion-card-header>

        <ion-list>
          <ion-item>
            <ion-label>Département</ion-label>
            <ion-label class="ion-text-end">{{item.codeDepartement}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Région</ion-label>
            <ion-label class="ion-text-end">{{item.codeRegion}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Code Postal</ion-label>
            <ion-label style="color: white" class="ion-text-end">{{item.codesPostaux.join(',')}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Population</ion-label>
            <ion-label class="ion-text-end">{{item.population}}</ion-label>
          </ion-item>
        </ion-list>
      </ion-card>

    </ion-content>
  </ion-page>
</template>



<style scoped>

  #inputBar{
    background-color: white;
    width: 80%;
    margin: auto;
    border-radius: 5px;
    color: black;
  }

  #btn{
    width: 90%;
  }

</style>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
import axios from 'axios'


export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle },
  data(){
    return{
      city: null,
    }
  },
  methods:{

    showCity(){
      let buttonValue = document.getElementById('inputBar').value
      let transformed = parseInt(buttonValue)
      let queryName
      if (Number.isInteger(transformed)){
        queryName = 'codePostal'
      }
      else {
        queryName = 'nom'
      }
      axios.get('https://geo.api.gouv.fr/communes?'+queryName+'='+buttonValue)
              .then((response) =>{
                console.log(response.data)
                this.city = response.data
              })
              .catch(function (error) {
                console.log(error)
              })
    }
  }
}
</script>

