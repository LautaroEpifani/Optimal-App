import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetProjectsParams {
  query: string;
  technology: string;
  page: string;
}


export const getProjectList = async () => {
  try {
    const projectList = await readClient.fetch(
      groq`*[_type == "list"]{title,
        _id,
        title,
        projects[0...6]->{
        title,
        _id, 
        projectLink,
        "image": poster.asset->url,
        technologies } }`,
    );
    return projectList;
  } catch (error) {
    console.error('Error fetching list:', error);
    throw error;
  }
};


export const getProjects = async (params: GetProjectsParams) => {
  const { query, technology, page } = params;

  try {
    const projects = await readClient.fetch(
      groq`${buildQuery({
        type: 'project',
        query,
        technology,
        page: parseInt(page),
      })}{  title,
        _id,
        projectLink,
        "image": poster.asset->url,
        technologies }`,
    );
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
