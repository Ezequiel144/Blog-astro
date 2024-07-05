export interface Cardpost {
  tag: {
    [x: string]: any;
    icon: string;
    name: string;
  };
  date?: string;
  title: string;
  description: string;
  slug?: string;
  image?:{
    url: string;
    alt: string;
  }
}
