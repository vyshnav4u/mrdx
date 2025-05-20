import { useSelector } from 'react-redux';
import { TRootState } from '../../store';

export const usePost = () => useSelector((state: TRootState) => state.posts);
