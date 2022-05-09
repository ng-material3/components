import { NgModule } from '@angular/core';
import { BottomAppBarModule } from '../components/bottom-app-bar/bottom-app-bar.module';
import { ButtonModule } from '../components/button/button.module';
import { CardModule } from '../components/card/card.module';
import { CheckboxModule } from '../components/checkbox/checkbox.module';
import { ContentModule } from '../components/content/content.module';
import { CoordinatorLayoutModule } from '../components/coordinator-layout/coordinator-layout.module';
import { FloatingActionButtonModule } from '../components/floating-action-button/floating-action-button.module';
import { GridModule } from '../components/grid/grid.module';
import { IconButtonModule } from '../components/icon-button/icon-button.module';
import { LinearLayoutModule } from '../components/linear-layout/linear-layout.module';
import { NavigationBarModule } from '../components/navigation-bar/navigation-bar.module';
import { NavigationDrawerModule } from '../components/navigation-drawer/navigation-drawer.module';
import { NavigationRailModule } from '../components/navigation-rail/navigation-rail.module';
import { RadioModule } from '../components/radio/radio.module';
import { SwitchModule } from '../components/switch/switch.module';
import { TopAppBarModule } from '../components/top-app-bar/top-app-bar.module';
import { TextFieldModule } from '../components/text-field/text-field.module';

@NgModule({
  exports: [
    BottomAppBarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ContentModule,
    CoordinatorLayoutModule,
    FloatingActionButtonModule,
    GridModule,
    IconButtonModule,
    LinearLayoutModule,
    NavigationBarModule,
    NavigationDrawerModule,
    NavigationRailModule,
    RadioModule,
    SwitchModule,
    TopAppBarModule,
    TextFieldModule
  ],
  imports: [
    BottomAppBarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ContentModule,
    CoordinatorLayoutModule,
    FloatingActionButtonModule,
    GridModule,
    IconButtonModule,
    LinearLayoutModule,
    NavigationBarModule,
    NavigationDrawerModule,
    NavigationRailModule,
    RadioModule,
    SwitchModule,
    TopAppBarModule,
    TextFieldModule
  ]
})
export class ComponentsModule { }
