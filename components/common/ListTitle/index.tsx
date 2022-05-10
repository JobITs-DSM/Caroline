import s from "./ListTitle.module.css";

const ListTitle = ({ content }: { content: string }) => {
  return <h1 className={s.title}>{content}</h1>;
};

export default ListTitle;
