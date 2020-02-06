import { Component, OnInit } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { AddPersonPage } from "./../add-person/add-person.page";
import { OrderPersonActionsComponent } from "./order-person-actions/order-person-actions.component";

@Component({
  selector: "app-order-create",
  templateUrl: "./order-create.page.html",
  styleUrls: ["./order-create.page.scss"]
})
export class OrderCreatePage implements OnInit {
  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddPersonPage
    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OrderPersonActionsComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
