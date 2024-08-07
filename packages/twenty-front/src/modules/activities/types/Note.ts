import { Activity } from '@/activities/types/Activity';
import { NoteTarget } from '@/activities/types/NoteTarget';

export type Note = Activity & {
  noteTargets?: NoteTarget[];
  __typename: 'Note';
};
