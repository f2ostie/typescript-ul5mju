import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AddPersonPageRoutingModule } from "./add-person-routing.module";
import { AddPersonPage } from "./add-person.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AddPersonPageRoutingModule],
  entryComponents: [AddPersonPage],
  declarations: [AddPersonPage]
})
export class AddPersonPageModule {}
