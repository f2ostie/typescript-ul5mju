import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-order-confirm",
  templateUrl: "./order-confirm.page.html",
  styleUrls: ["./order-confirm.page.scss"]
})
export class OrderConfirmPage implements OnInit {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Verzonden",
      message: "De personen zijn toegewezen aan bestelling 1",
      buttons: ["OK"]
    });

    alert.onDidDismiss().then(x => this.router.navigate(["/tabs/tab1"]));

    await alert.present();
  }
}
