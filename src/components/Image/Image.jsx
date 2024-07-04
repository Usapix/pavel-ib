function Image({ componentClass, image, componentAlt }) {
  return <img className={componentClass} src={image} alt={componentAlt} />;
}

export default Image;
