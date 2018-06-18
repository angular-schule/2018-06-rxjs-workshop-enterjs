import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FromeventComponent } from './1_fromevent/fromevent.component';
import { GameScoreComponent } from './2_game-score/game-score.component';
import { MulticastComponent } from './3_multicast/multicast.component';
import { ErrorHandlingComponent } from './4_error-handling/error-handling.component';
import { UnsubscribeComponent } from './5_unsubscribe/unsubscribe.component';
import { ChatComponent } from './6_chat/chat.component';
import { HigherorderComponent } from './7_higherorder/higherorder.component';
import { TypeaheadComponent } from './8_typeahead/typeahead.component';

/*const exercisesRoutes = exercisesList
  .map((e, i) => ({ ...e, id: i + 1 }))
  .filter(e => !!e.component)
  .map(e => (
    { path: `exercises/${e.id}`, component: e.component }
  )
);*/

const routes: Routes = [
  { path: 'exercises', component: OverviewComponent },
  { path: 'exercises/8', component: FromeventComponent },
  { path: 'exercises/9', component: GameScoreComponent },
  { path: 'exercises/10', component: MulticastComponent },
  { path: 'exercises/11', component: ErrorHandlingComponent },
  { path: 'exercises/12', component: UnsubscribeComponent },
  { path: 'exercises/13', component: ChatComponent },
  { path: 'exercises/14', component: HigherorderComponent },
  { path: 'exercises/15', component: TypeaheadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
