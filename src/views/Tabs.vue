<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/communes">
          <ion-icon :icon="triangle" />
          <ion-label>Commune</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/departements">
          <ion-icon :icon="ellipse" />
          <ion-label>Département</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/regions">
          <ion-icon :icon="square" />
          <ion-label>Région</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>