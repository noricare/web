import Link from "next/link";


interface INavItem {
  text:string;
  href:string
}
const NavItem = ({ text, href }:INavItem) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
};

export default NavItem;