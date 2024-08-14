'use client';

import { projectsEn } from '@/data/en.index'
import { projectsFr } from '@/data/fr.index'
import { projectsAl } from '@/data/al.index'
import { useLocale } from 'next-intl'

import React, { useEffect, useState } from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  } from "@nextui-org/card";
  import { IoClose } from 'react-icons/io5';

const RecentProjects = ({
        displayNumber, title, spanTitle, buttonShowMore, checkLiveSite, button, question
    }: {
        displayNumber: number,
        title: string,
        spanTitle: string,
        buttonShowMore: boolean,
        checkLiveSite: string,
        button: string,
        question: string
    }) => {
    const locale = useLocale();
    const projects = locale === 'en' ? projectsEn : locale === 'fr' ? projectsFr : projectsAl;
    const [mounted, setMounted] = useState(false);
    const [openModal, setOpenModal] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            {title} {' '} 
            <span className='text-sky-300'> {spanTitle} </span>
        </h1>
        <div className='flex flex-wrap justify-center gap-8 md:gap-12 p-4 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link, showLink, des1, des2, des3 }, index) => (
                    index < displayNumber && (
                        <div key={id} className="flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)]">
                            <Card
                                isPressable
                                onPress={() => setOpenModal(id)}
                                className="cursor-pointer border border-gray-200 dark:border-gray-700 rounded-lg hover:text-sky-300 focus:ring-0 focus:border-sky-300"
                                radius="lg"
                                shadow="md"
                            >
                                <CardHeader className="p-0">
                                    <img src={img} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
                                </CardHeader>
                                <CardBody className="p-4">
                                    <h1 className='font-bold text-base lg:text-2xl md:text-xl line-clamp-1'>
                                        {title}
                                    </h1>
                                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                        {des}
                                    </p>
                                </CardBody>
                                <CardFooter className="flex items-center justify-between p-4">
                                    <div className='flex items-center'>
                                        {iconLists.map((icon, index) => (
                                            <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                                style={{
                                                    transform: `translateX(-${5 * index * 2}px)`
                                                }}>
                                                <img src={icon} alt={icon} className='p-2' />
                                            </div>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                            {openModal === id && (
                                <Modal
                                    isOpen={openModal === id}
                                    onOpenChange={(isOpen) => setOpenModal(isOpen ? id : null)}
                                    backdrop="blur"
                                    scrollBehavior="inside"
                                    hideCloseButton={true}
                                    className={`bg-black/80 ${openModal === id ? 'md:max-w-4xl md:rounded-lg h-full' : ''}`}
                                    size={openModal === id ? 'lg' : 'full'}
                                    style={{ padding: 0, margin: 0 }}
                                >
                                    <ModalContent className="rounded-lg shadow-lg relative">
                                        <button
                                            className="absolute top-4 right-4 focus:outline-none text-white"
                                            onClick={() => setOpenModal(null)}
                                        >
                                            <IoClose size={24} />
                                        </button>
                                        <ModalHeader className="bg-gray-800 text-white p-4 rounded-t-lg">
                                            <h2 className="text-xl font-bold mr-4">{title}</h2>
                                        </ModalHeader>
                                        <ModalBody className="bg-white dark:bg-gray-900 p-4 overflow-auto max-h-[calc(100vh-10rem)]">
                                            <img src={img} alt={title} className="mb-4 w-full h-auto rounded" />
                                            <p className='my-2'>{des1}</p>
                                            <p className='my-2'>{des2}</p>
                                            <p className='my-2'>{des3}</p>
                                        </ModalBody>
                                        { showLink && (
                                            <ModalFooter className="bg-gray-100 dark:bg-gray-800 p-4 rounded-b-lg flex flex-col">
                                                <a href={link}>
                                                    <div className='flex items-center justify-center'>
                                                        <p className='lg:text-xl mf:text-xs text-sm text-sky-300'>{checkLiveSite}</p>
                                                        <FaLocationArrow className='ms-3' color='#CBACF9' />
                                                    </div>
                                                </a>
                                            </ModalFooter>
                                        )}
                                    </ModalContent>
                                </Modal>
                            )}
                        </div>
                    )
                ))}
            </div>
            {buttonShowMore && (
                    <div className='w-full text-center items-center justify-center text-base sm:text-sm'>
                        <h3 className='heading'>{question}</h3>
                        <a href="/projects">
                            <MagicButton
                                title={button}
                                icon={<FaLocationArrow />}
                            />
                        </a>
                    </div>
                )}
    </div>
  )
}

export default RecentProjects

function setMounted(arg0: boolean) {
    throw new Error('Function not implemented.')
}
