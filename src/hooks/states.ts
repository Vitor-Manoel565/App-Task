import { atom } from "jotai";
import { userDataTypes } from "../types";
import { TaskTypes } from "../types/task";

export const tasksAtom = atom<TaskTypes[] | null>(null);
export const tokenAtom = atom<string | null>(null);
export const userAtom = atom<string | null>(null);
export const id = atom<string | null>(null);
export const userDataAtom = atom<userDataTypes | null>(null);
export const taskAtom = atom<string | null>(null);
