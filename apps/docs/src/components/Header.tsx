import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Image src="/logo.png" width={800} height={217} alt="Logo" className="w-[220px]" />
            <h6 className="mt-3 text-2xl font-semibold">React Simple Phone Input</h6>
            <p className="mt-1 font-light">A simple react phone input component with calling code dropdown🤷</p>
            <p className="mt-2">
                Create by <Link href="https://siamahnaf.com" className="text-[#62A92B] font-semibold">Siam Ahnaf</Link>
            </p>
        </div>
    );
};

export default Header;