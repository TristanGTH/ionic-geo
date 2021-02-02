<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Communes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-title class="ion-margin">Code postal ou ville</ion-title>

      <ion-input id="inputBar"></ion-input>
      <div style="display: flex; justify-content: center; width: 100%">
        <ion-button class="ion-margin-vertical" id="btn">Rechercher</ion-button>
      </div>
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
    width: 40%;
  }

</style>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonButton }
}
</script>

