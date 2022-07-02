import { FC, Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';
import { CategoryItem } from '../../store/categories/categories.types';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

type DirectoryProps = {
  categories: DirectoryCategory[];
};

const Directory: FC<DirectoryProps> = ({ categories }) => (
  <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </DirectoryContainer>
);

export default Directory;
