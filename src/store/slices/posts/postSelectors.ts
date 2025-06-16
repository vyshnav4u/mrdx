import { createSelector } from '@reduxjs/toolkit';
import { TRootState } from '../../store';
import { TPosts } from './postTypes';

export const selectPostState = (state: TRootState) => {
  console.log('selectPostState runs');
  return state.posts;
};

export const selectPost = (state: TRootState) => state.posts;

export const selectAllPosts = createSelector([selectPostState], (state) => state.posts);

export const selectMostViewedPosts = createSelector([selectPostState], (state) => {
  console.log('1k posts');
  return state.posts.filter((post) => {
    console.log('filtering');
    return post.views > 1000;
  });
});
