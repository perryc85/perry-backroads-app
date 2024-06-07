import { pageLinks } from "../data";

const PageLinks = ({ parentClass, idClass, itemClass }) => {
  return (
    <ul className={parentClass} id={idClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
