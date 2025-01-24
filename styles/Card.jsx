export default function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="w-80 border border-black ">
      <a href={href}>
        <img src={imgSrc} alt={imgAlt} />
      </a>
      <div>{children}</div>
    </div>
  );
}
