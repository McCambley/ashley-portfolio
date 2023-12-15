import Link from 'next/link';
import Image from 'next/image';
import heroImage from '~/case_studies/city_cycles/city_cycle_hero_image.png';

function CityCycles() {
  return (
    <div>
      <Image
        src={heroImage.src}
        height={heroImage.height}
        width={heroImage.width}
      ></Image>
      <h1>City Cycles</h1>
    </div>
  );
}

export default CityCycles;
