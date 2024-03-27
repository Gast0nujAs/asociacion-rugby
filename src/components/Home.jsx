import React from 'react';
import { MainArticle } from './MainArticle';
import { NewContainer } from './NewContainer';
import { ContainerArticleFoot } from './ContainerArticleFoot';

export const Home = () => {
  return (
    <>
        <div className="sm:flex sm:gap-10">
            <MainArticle />
            <NewContainer />
          </div>
          <ContainerArticleFoot />
    </>
  )
}

