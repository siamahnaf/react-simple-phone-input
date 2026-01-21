import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-8 text-center">
            <h4 className="text-3xl font-semibold mb-1.5">Created By</h4>
            <Link href="https://siamahnaf.com" className="text-[#62A92B] font-semibold mt-2">
                Siam Ahnaf
            </Link>
            <div className="w-full h-3 bg-[#62A92B] rounded-sm mt-3" />
        </div>
    );
};

export default Footer;