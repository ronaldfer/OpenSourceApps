import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { TreeViewComponent } from "@syncfusion/ej2-angular-navigations";

@NgModule({
  declarations: [AppComponent, HomeComponent, TreeViewComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
