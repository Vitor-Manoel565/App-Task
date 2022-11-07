import {atom} from 'jotai'
import {TaskTypes} from '../types/task'


export const tasksAtom  = atom<TaskTypes[]| null>(null)