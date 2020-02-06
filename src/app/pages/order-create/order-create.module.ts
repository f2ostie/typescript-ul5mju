import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AddPersonPage } from "../add-person/add-person.page";
import { OrderCreatePageRoutingModule } from "./order-create-routing.module";
import { OrderCreatePage } from "./order-create.page";
import { OrderPersonActionsComponent } from "./order-person-actions/order-person-actions.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCreatePageRoutingModule
  ],
  entryComponents: [AddPersonPage, OrderPersonActionsComponent],

  declarations: [OrderCreatePage, AddPersonPage, OrderPersonActionsComponent]
})
export class OrderCreatePageModule {}
