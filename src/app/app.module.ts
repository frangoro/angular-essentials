import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StartWarsService } from './star-wars.sevice';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserDetailsComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StartWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
