import Filters from '@/components/Filters';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import SearchForm from '@/components/SearchForm';
import { getProjectList, getProjects } from '@/sanity/actions';
import React from 'react';

interface Props {
  searchParams: { [key: string]: string | undefined };
}



const Page = async ({ searchParams }: Props) => {
  const projects = await getProjects({
    query: searchParams?.query || '',
    technology: searchParams?.technology || '',
    page: '1',
  });

  const projectList = await getProjectList();

  return (
    <main className='w-full flex-center paddings mx-auto  max-w-screen-2xl flex-col'>
      <section className='w-full nav-padding'>
        <h1 className='sm:heading1 heading2 text-center text-white mb-4'>
          Projects
        </h1>
        <div className=' w-full flex  items-start  justify-center relative min-h-[274px] rounded-xl bg-banner bg-cover bg-center text-center'></div>
        <SearchForm />
      </section>
      <Filters />

      {(searchParams?.query || searchParams?.technology) && (
        <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <Header
            type='Projects'
            query={searchParams?.query || ''}
            technology={searchParams?.technology || ''}
          />
          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {projects?.length > 0 ? (
              projects.map((project: any) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  id={project._id}
                  image={project.image}
                  projectLink={project.projectLink}
                />
              ))
            ) : (
              <p className='body-regular text-white-400'>No Projects Found</p>
            )}
          </div>
        </section>
      )}
      {projectList.map((item: any) => (
        <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
            <h1 className='heading3 self-start text-white-800'>{item.title}</h1>
            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
              {
                 item.projects.map((project: any) => (
                  <ProjectCard
                    key={project._id}
                    title={project.title}
                    id={project._id}
                    image={project.image}
                    projectLink={project.projectLink}
                  />
                 ))
              }
            </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
