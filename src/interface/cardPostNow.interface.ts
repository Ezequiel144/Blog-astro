export interface Cardpost {
  image: string;
  tag: {
    [x: string]: any;
    icon: string;
    name: string;
  };
  date?: string;
  title: string;
  description: string;
  slug?: string;
}
