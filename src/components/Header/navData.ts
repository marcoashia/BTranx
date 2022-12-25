import {
  CONTRIBUTE_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
} from '../../constants';
import { data } from '../../data';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: 'Templates',
  //   children: data.map((category) => ({
  //     label: category.name,
  //     subLabel: category.subLabel,
  //     href: `/${category.id}/${category.children?.[0].id}`,
  //   })),
  // },
  {
    label: 'Book Now',
    href: '',
  },
  {
    label: 'Link 1',
    href: '',
  },
  // {
  //   label: 'Discord',
  //   href: DISCORD_INVITE_LINK,
  // },
];
