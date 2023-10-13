function FooterOptions({ heading, list }) {
  return (
    <div>
      <p className="font-semibold">{heading}</p>
      <ul>
        {list.map((item, key) => (
          <li className="text-sm" key={key}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterOptions;
