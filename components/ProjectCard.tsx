import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  title: string;
  id: string;
  image: string;
  projectLink: string;
}

const ProjectCard = ({ title, id, image, projectLink }: Props) => {
  return (
    <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]'>
      <Link href={projectLink} target='_blank'>
        <CardHeader className='flex-center flex-col gap-2.5 !p-0'>
          <div className='´h-fit w-full'>
            <Image
              className='h-full rounded-md object-cover'
              src={image}
              alt={title}
              width={384}
              height={440}
            />
          </div>
          <CardTitle className='text-white paragraph-semibold line-clamp-1 w-full text-left'>
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className='flex-between mt-4 p-0'>
        <div className='flex gap-1'>
        <h1 className='text-gradient_purple-blue body-semibold'>Go to website</h1>
        <Link href={projectLink} target='_blank'>
        <Image
              className='h-full rounded-md object-cover'
              src={"/externalBlue.svg"}
              alt="link"
              width={20}
              height={20}
            />
            </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
