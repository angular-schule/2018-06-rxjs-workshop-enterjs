import { Exercises } from '../shared/types';
import { FromeventComponent } from './1_fromevent/fromevent.component';
import { TypeaheadComponent } from './8_typeahead/typeahead.component';
import { MulticastComponent } from './3_multicast/multicast.component';
import { HigherorderComponent } from './7_higherorder/higherorder.component';
import { GameScoreComponent } from './2_game-score/game-score.component';
import { ErrorHandlingComponent } from './4_error-handling/error-handling.component';
import { ChatComponent } from './6_chat/chat.component';
import { UnsubscribeComponent } from './5_unsubscribe/unsubscribe.component';


export const exercisesList: Exercises = [
    { name: 'Callbacks', folder: '0_callbacks.ts' },
    { name: 'Promises', folder: '1_promises.ts' },
    { name: 'Subscribe to Observables', folder: '2_subscribe.ts' },
    { name: 'Unsubscribe from Observables', folder: '3_unsubscribe.ts' },
    { name: 'Using Observable constructor', folder: '4_new-observable.ts' },
    { name: 'Observable Creation Functions', folder: '5_creation-functions.ts' },
    { name: 'Operators', folder: '6_operators.ts' },
    /***********************************/
    
    { name: 'Window resize: Observables from events', folder: '1_fromevent', component: FromeventComponent },
    { name: 'Game Score: scan and reduce', folder: '2_game-score', component: GameScoreComponent },
    { name: 'Multicasting with Subjects', folder: '3_multicast', component: MulticastComponent },
    { name: 'Error handling', folder: '4_error-handling', component: ErrorHandlingComponent },
    { name: 'How to unsubscribe and avoid memory leaks', folder: '5_unsubscribe', component: UnsubscribeComponent },
    { name: 'Chat: Merging Observables', folder: '6_chat', component: ChatComponent },
    { name: 'Higher Order Observables with concatMap, mergeMap, switchMap, exhaustMap', folder: '7_higherorder', component: HigherorderComponent },
    { name: '🏁 Typeahead search', folder: '8_typeahead', component: TypeaheadComponent }
];
