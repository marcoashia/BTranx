import path from 'path';
import * as fs from 'fs';
import { NextPage } from 'next';

import { AppLayout } from '@/layout/AppLayout';
import { Hero } from '@/components/HomepageSections/Hero';
import { GettingStarted } from '@/components/HomepageSections/GettingStarted';
import { OpenSourceProps } from '@/components/HomepageSections/OpenSource';

import { SEO } from '@/components/SEO';

import { ExploreTemplates } from '@/components/HomepageSections/ExploreTemplates';

type PageProps = OpenSourceProps & {};

const Home: NextPage<PageProps> = ({
  categoriesCount,
  templatesCount,
}: PageProps) => {
  return (
    <AppLayout>
      <SEO />
      <Hero categoriesCount={categoriesCount} templatesCount={templatesCount} />
      <GettingStarted />

      <ExploreTemplates templatesCount={3} />
    </AppLayout>
  );
};

export default Home;
