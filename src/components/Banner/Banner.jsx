import React, { useState } from 'react'
import { BannerContainer, Image, ButtonPrev, ButtonNext } from './BannerStyles'


const Banner = () => {
  const images = ['banner_1.jpg', 'banner_2.jpg', 'banner_3.jpg'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (selectedIndex, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : images.length -1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }, 500)
  }

  const prev = () => {
    selectNewImage(selectedIndex, images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, images);
  }

  console.log(loaded);

  return (
    <BannerContainer>
      <Image
        src={require(`../../assets/images/${selectedImage}`)}
        alt="banner-images"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <ButtonPrev onClick={prev}>{'<'}</ButtonPrev>
      <ButtonNext onClick={next}>{'>'}</ButtonNext>
    </BannerContainer>
  );
}

export default Banner