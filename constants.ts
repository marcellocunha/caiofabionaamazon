import {
  BookOpen,
  Youtube,
  Instagram,
  Facebook,
  Globe,
  Mail
} from 'lucide-react';
import { TikTok } from './components/Icons';
import { LinkGroup, LinkItem, SocialItem } from './types';

// REPLACE THIS URL WITH THE URL OF YOUR UPLOADED BANNER IMAGE
export const BANNER_IMAGE_URL = "images/banner_livros_caio_nephilim.jpg";
// Note: Since I cannot see the local file, I am using a generic high-quality book/spiritual background as a placeholder. 
// Ideally, you should host your specific image and paste the link above.

export const PROFILE_INFO = {
  name: "Caio Fábio",
  bio: "Jesus é a minha Chave Interpretativa.\nO Verbo encarnado.",
  avatar: "images/caio fabio.jpg" // Placeholder avatar
};

export const LINK_GROUPS: LinkGroup[] = [
  {
    title: "Livros disponíveis:",
    items: [
      {
        id: 'book-1',
        title: 'Um só Caminho',
        subtitle: 'Portuguese Edition',
        url: 'https://amzn.to/4pZrDZi',
        icon: BookOpen,
        variant: 'book'
      },
      {
        id: 'book-2',
        title: 'O Enigma da Graça',
        subtitle: 'Um comentário existencial do Livro de Job',
        url: 'https://amzn.to/4q1iRtU',
        icon: BookOpen,
        variant: 'book'
      },
      {
        id: 'book-3',
        title: 'Sem Barganhas com Deus',
        subtitle: 'Portuguese Edition',
        url: 'https://amzn.to/44tyHFn',
        icon: BookOpen,
        variant: 'book'
      },
      {
        id: 'book-4',
        title: 'Seguir Jesus',
        subtitle: 'O mais fascinante projeto de vida',
        url: 'https://amzn.to/48SMVB5',
        icon: BookOpen,
        variant: 'book'
      },
      {
        id: 'book-5',
        title: 'Nephilim',
        subtitle: 'Portuguese Edition',
        url: 'https://a.co/d/6cZRKVU',
        icon: BookOpen,
        variant: 'book'
      },
    ]
  },
  {
    title: "Lojas da Amazon disponíveis:",
    items: [
      {
        id: 'store-us',
        title: 'Amazon.com',
        subtitle: 'Estados Unidos (Loja Global)',
        url: 'https://amazon.com',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-ca',
        title: 'Amazon.ca',
        subtitle: 'Canadá',
        url: 'https://amazon.ca',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-uk',
        title: 'Amazon.co.uk',
        subtitle: 'Reino Unido',
        url: 'https://amazon.co.uk',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-de',
        title: 'Amazon.de',
        subtitle: 'Alemanha',
        url: 'https://amazon.de',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-fr',
        title: 'Amazon.fr',
        subtitle: 'França',
        url: 'https://amazon.fr',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-es',
        title: 'Amazon.es',
        subtitle: 'Espanha',
        url: 'https://amazon.es',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-it',
        title: 'Amazon.it',
        subtitle: 'Itália',
        url: 'https://amazon.it',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-nl',
        title: 'Amazon.nl',
        subtitle: 'Países Baixos (Holanda)',
        url: 'https://amazon.nl',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-pl',
        title: 'Amazon.pl',
        subtitle: 'Polônia',
        url: 'https://amazon.pl',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-se',
        title: 'Amazon.se',
        subtitle: 'Suécia',
        url: 'https://amazon.se',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-be',
        title: 'Amazon.com.be',
        subtitle: 'Bélgica',
        url: 'https://amazon.com.be',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-ie',
        title: 'Amazon.ie',
        subtitle: 'Irlanda',
        url: 'https://amazon.ie',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-jp',
        title: 'Amazon.co.jp',
        subtitle: 'Japão',
        url: 'https://amazon.co.jp',
        icon: Globe,
        variant: 'store'
      },
      {
        id: 'store-au',
        title: 'Amazon.com.au',
        subtitle: 'Austrália',
        url: 'https://amazon.com.au',
        icon: Globe,
        variant: 'store'
      },
    ]
  }
];

export const SOCIALS: SocialItem[] = [
  { platform: 'Website', url: 'https://www.caiofabio.com.br', icon: Globe },
  { platform: 'YouTube', url: 'https://www.youtube.com/@canalcaiofabio', icon: Youtube },
  { platform: 'Instagram', url: 'https://www.instagram.com/caiofabiodaraujofilho/', icon: Instagram },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@caiofabiooficial', icon: TikTok },
  { platform: 'Facebook', url: 'https://www.facebook.com/caiofabio.vvtv', icon: Facebook },
];
