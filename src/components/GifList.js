export default function GifList({ gifList }) {
  return (
    <div>
      <ul style={{listStyleType: "none"}} >
        {gifList.map((gif) => {
          return (
            <li key={gif.id}>
              <img src={gif.images.original.url} alt="Random gif" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
