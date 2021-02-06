<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Régions</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item class="ion-margin ion-justify-content-between">
        <ion-label>Région</ion-label>
        <ion-select placeholder="Sélectionnez" id="selected">
          <ion-select-option v-for="item in allRegion" :key="item" :value="item.code">{{item.code}} {{item.nom}} </ion-select-option>
        </ion-select>
      </ion-item>

      <div style="display: flex; justify-content: center">
        <ion-button class="ion-margin-vertical" id="btn" @click="showDepartment">Rechercher</ion-button>
      </div>

      <ion-card v-for="department in allDepartment" :key="department">
        <ion-card-header style="display: flex; flex-direction: column; align-items: center">
          <ion-card-subtitle>Code INSEE: {{department.code}}</ion-card-subtitle>
          <ion-card-title>{{department.nom}}</ion-card-title>
        </ion-card-header>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import axios from 'axios'

export default  {
  name: 'Tab3',
  data(){
    return{
      allRegion:null,
      allDepartment:null
    }
  },
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  methods :{
    showDepartment(){
      let selectValue = document.getElementById('selected').value
      axios.get('https://geo.api.gouv.fr/regions/'+selectValue+'/departements')
              .then((response) =>{
                console.log(response.data)
                this.allDepartment = response.data
              })
              .catch(function (error) {
                console.log(error)
              })
    }
  },
  mounted(){
    axios.get('https://geo.api.gouv.fr/regions')
            .then((response) =>{
              console.log(response.data)
              this.allRegion = response.data
            })
            .catch(function (error) {
              console.log(error)
            })
  }
}
</script>