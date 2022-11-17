import { atom } from "jotai";
import { TaskTypes } from "../types/task";

export const tasksAtom = atom<TaskTypes[] | null>(null);
export const tokenAtom = atom<string | null>(null);
export const userAtom = atom<Array<string> | string>("");
export const id = atom<string | null>(null);
