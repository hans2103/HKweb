import Image from '@/components/molecules/Image';

const HeaderImage = () => {
    return (
        <div className="width:page header-image">
            <figure>
                <div className="ratio:16:9">
                    <Image src={'/HansKuijpers.png'} alt={''} className="header-img"  fill={true} />
                </div>
            </figure>

            <h1 className="header-title">Welkom!</h1>
        </div>
    );
};

export default HeaderImage;
