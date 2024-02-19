import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  title: string;
  id: string;
  image: string;
  projectLink: string;
  slug: string;
}

const ProjectCard = ({ title, id, image, projectLink, slug }: Props) => {
  return (
    <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
