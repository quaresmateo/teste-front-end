import { User } from './user.model';

export interface Users {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
