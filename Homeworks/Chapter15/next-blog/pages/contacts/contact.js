import Image from "next/image";
const Contact = () => {
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
                    <div className="text-2xl font-extrabold text-gray-50 mb-5">
                        <span>Name: Son Dinh</span>
                    </div>
                    <div className="text-2xl font-extrabold text-gray-50 mb-5">
                        <span>Email: Example@gmail.com</span>
                    </div>
                    <div className="text-2xl font-extrabold text-gray-50 mb-5">
                        <span>Phone: 0961119463</span>
                    </div>
                    <div className="text-2xl font-extrabold text-gray-50 mb-5">
                        <span>
                            Address: Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Volupt
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
