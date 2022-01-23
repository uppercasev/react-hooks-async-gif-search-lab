export default function GifList({ gifList }) {
  return (
    <div>
      <ul style={{listStyleType: "none"}} >
        {gifList.map((gif, index) => {
          return (
            <li key={index}>
              <img src={gif.images.original.url} alt="Random gif" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
