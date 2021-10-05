import Image from "next/image";
const HeroSection = () => {
    return (
        <div className="bg-indigo-300 w-full h-auto py-16">
            <div className="flex flex-wrap flex-row items-center justify-center content-center">
                <div
                    className="h-auto rounded-full shadow-xl border-4 border-solid"
                    style={{ height: "248px" }}
                >
                    <Image
                        src="https://stickershop.line-scdn.net/stickershop/v1/product/4123752/LINEStorePC/main.png;compress=true"
                        alt=""
                        width={240}
                        height={240}
                        className="rounded-full"
                    ></Image>
                </div>
                <div className="max-w-xl ml-10">
                    <h1 className="text-4xl font-extrabold text-gray-50 mb-5">
                        <span>Son Dinh</span>
                    </h1>
                    <p className="text-xl font-medium italic text-gray-100">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Veniam explicabo facere nesciunt aliquid quibusdam
                        repellat porro doloribus alias corrupti, exercitationem
                        dolores ut eaque voluptate cumque maiores aliquam
                        veritatis accusamus. Nostrum!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
