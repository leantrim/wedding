import Image from 'next/image';
import { useState } from 'react';

type Props = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

function FadeInImage(props: Props) {
	const { src, alt, width, height } = props;
	const [loaded, setLoaded] = useState(false);

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			onLoad={() => setLoaded(true)}
			style={{
				opacity: loaded ? 1 : 0,
				transition: 'opacity 0.5s ease-in-out',
			}}
		/>
	);
}

export default FadeInImage;
