export interface Page {
  id: number;
  title: string;
  description: string;
  path: string;
  showOnNavMenu: boolean;
  isHighlighted?: boolean;
}
