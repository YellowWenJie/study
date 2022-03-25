export default function QueryListItems(props: { items: any }): JSX.Element {
  const { items } = props;
  let url = new URL(`${window.location.href}${items}`);
  const searchParams = url.searchParams;

  let params = [];
  // @ts-ignore
  for (const [key, value] of searchParams) {
    params.push(key + ' : ' + value);
  }
  return (
    <>
      {params.map((param, index) => {
        return (
          <li key={index + Math.floor(Math.random() * 100)}>
            {param.charAt(0).toUpperCase() + param.slice(1)}
          </li>
        );
      })}
    </>
  );
}
