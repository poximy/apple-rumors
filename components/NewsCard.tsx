import type { FC } from "react";

interface Props {
  news: newsGroup[];
  websites: string[];
}

const NewsGroup: FC<{ websiteName: string }> = (props) => {
  return (
    <ul className="flex flex-col gap-2">
      <p className="capitalize font-bold text-4xl text-white p-2">
        {props.websiteName}
      </p>
      {props.children}
    </ul>
  );
};

const NewsItem: FC<newsInterface> = ({ href, title }) => {
  return (
    <li
      className="text-2xl md:text-xl p-2 max-w-max bg-teal-400 hover:bg-cyan-400
      rounded hover:rounded-xl transition-all duration-500 ease-linear hover:scale-[1.025]"
    >
      <a href={href} target="_blank" rel="noreferrer">
        {title}
      </a>
    </li>
  );
};

const NewsCard: FC<Props> = ({ news, websites }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Loops over group */}
      {news.length > 0 ? (
        news.map((group, groupIndex) => (
          <NewsGroup key={groupIndex} websiteName={websites[groupIndex]}>
            {group.map((data, ItemIndex) => (
              <NewsItem key={ItemIndex} {...data} />
            ))}
          </NewsGroup>
        ))
      ) : (
        <p className="capitalize text-center text-xl">No News Available</p>
      )}
    </div>
  );
};

export default NewsCard;
