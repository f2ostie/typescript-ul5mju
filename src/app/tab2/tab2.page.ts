import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  constructor(private alertController: AlertController) {}

  async addPerson() {
    const alert = await this.alertController.create({
      header: "Persoon toevoegen!",
      message: "Voeg een persoon toe aan de hand van zijn AMEI nummer",
      inputs: [
        {
          name: "amei",
          type: "text",
          placeholder: "AMEI"
        }
      ],
      buttons: [
        {
          text: "Annuleer",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: async () => {
            await this.presentAlert();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Persoon toegevoegd",
      subHeader: "AMEI 85435",
      message: "Darth Vader is toegevoegd als een persoon",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
