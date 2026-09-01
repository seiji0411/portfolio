import Conditional from '@/components/Conditional';
import {H1, H2, H3} from '@/components/Form';
import DeploymentList from '@/components/list/DeploymentList';
import StackList from '@/components/list/StackList';
import {PageSEO} from '@/components/SEO';
import config from 'config';
import type {Project, SubProject} from 'config/projects';
import {defaultDimensions} from 'config/projects';
import {GetStaticProps, InferGetStaticPropsType} from 'next';
import Image from 'next/image';
import React, {ReactChild, ReactNode, useCallback} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {Maybe} from "../../types";
import {IoLogoGithub as GithubIcon, IoIosLink as LinkIcon} from "react-icons/io";
import {IconBaseProps} from "react-icons";
import {Colors} from "../../config/colors";

const {projects} = config;

export async function getStaticPaths() {
    return {
        paths: projects.map(({slug}) => ({params: {slug}})),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps<{
    project: Project;
}> = async ({params}) => {
    const project = projects.find(project => project.slug === params.slug);

    return {
        props: {
            project,
        },
    };
};

export default function Project({
                                    project,
                                }: InferGetStaticPropsType<typeof getStaticProps>) {
    const {
        title,
        description,
        shortDescription,
        repository,
        banner,
        dimensions,
        stack,
        deployment,
        development,
        screenshots,
        subProjects,
        website,
    } = project;

    const [height, width] = dimensions ?? defaultDimensions;

    const renderScreenShotList = useCallback(
        (screenshot: string, i: number) => {
            return (
                <Image
                    key={i}
                    loading='eager'
                    src={screenshot}
                    height={height}
                    width={width}
                    objectFit='contain'
                    alt=''
                />
            );
        },
        [height, width],
    );

    const renderThumbList = useCallback(
        (screenshot: string, i: number) => {
            return (
                <Image
                    key={i + "thumb"}
                    loading='eager'
                    src={screenshot}
                    height={height}
                    width={width}
                    objectFit='contain'
                    alt=''
                />
            );
        },
        [height / 8, width / 8],
    );

    const renderSubProjectList = useCallback(
        ({title, deployment, description, repository}: SubProject) => (
            <>
                <H3>{title} {repository && renderLink({
                    link: repository,
                    type: 'github',
                    size: 22
                })}</H3>
                <Conditional condition={!!deployment}>
                    <DeploymentList deployment={deployment}/>
                </Conditional>
                <p className='mt-2 mb-4 font-light'>{description}</p>
            </>
        ),
        [],
    );

    const renderLink = useCallback(({link, type, size}) => {
        const props: IconBaseProps = {
            className: 'icon cursor-pointer text-2xl',
            size: size,
            color: Colors[type],
        };
        let icon: Maybe<React.ReactNode> = null;

        switch (type) {
            case 'github':
                icon = <GithubIcon {...props} />;
                break;

            case 'site':
                icon = <LinkIcon {...props} />;
                break;

            default:
                break;
        }

        return (
        <a target='_blank' className='inline-block ml-4' href={link} rel="noreferrer">
            {icon}
        </a>
    )}, []);
    const hasDeployments = !!deployment;
    const hasScreenshots = !!screenshots.length;
    const hasSubProjects = !!subProjects.length;

    // @ts-ignore
    const renderScreenshots: ReactChild[] & ReactNode = React.Children.toArray(screenshots.map(renderScreenShotList));

    return (
        <>
            <PageSEO
                title={title}
                description={shortDescription || description}
                imageUrl={banner}
            />
            <H1 className='lg:text-5x mt-12 mb-4 text-3xl font-bold dark:text-white'>
                {title}
                {repository && renderLink({link: repository, type: 'github', size: 28})}
                {website && renderLink({link: website, type: 'site', size: 28})}
            </H1>
            <p className='mb-4 font-light whitespace-pre-line'>{description}</p>

            <H2>Stack</H2>
            <StackList stack={stack}/>

            <Conditional condition={hasDeployments}>
                <H2>Deployments</H2>
                <DeploymentList deployment={deployment}/>
            </Conditional>

            <Conditional condition={hasScreenshots}>
                <H2 className='my-4'>Screenshots</H2>
                <div className='text-center'>
                    <Carousel
                        swipeable={true}
                        showArrows={true}
                        showThumbs={true}
                        infiniteLoop={true}
                        autoPlay={true}
                        renderThumbs={() => screenshots.map(renderThumbList)}
                    >
                        {renderScreenshots}
                    </Carousel>
                </div>
            </Conditional>

            <H2 className='my-4'>Development</H2>
            <p className='mb-4 font-light whitespace-pre-line'>{development}</p>

            <Conditional condition={hasSubProjects}>
                <H2 className='mt-4'>More Products</H2>
                <p className='mt-1 mb-4 font-light'>Some additional products</p>
                {React.Children.toArray(subProjects.map(renderSubProjectList))}
            </Conditional>
        </>
    );
}
