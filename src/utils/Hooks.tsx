import ObjImage from './Image.json';

export const ImageMap = () => {
 const Array = ObjImage.map((item) => {
  return {
    id: item.id,
    src: item.src,
    alt: item.alt,
    title: item.title,
    description: item.description
  }
 });
  return Array;
}