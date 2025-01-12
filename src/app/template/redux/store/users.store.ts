import { signalStore, type, withState } from '@ngrx/signals';


type EquipeState = {
    equipe: [],
    isLoading: false
}

const initial: EquipeState = {
    equipe: [],
    isLoading: false
};    

export const EquipeStore = signalStore(withState(initial))