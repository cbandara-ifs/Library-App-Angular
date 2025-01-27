export interface IBook {
  id: number;
  title: string;
  category: string;
  slug?: string | null;
  authorId: number;
  authorName?: string | null;
}
