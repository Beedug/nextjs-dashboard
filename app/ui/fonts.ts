//Import Fonts From google
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
//Specify the font Subset
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400","700"] });
