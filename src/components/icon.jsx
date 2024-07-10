const icon = {
  "icon-users": <>&#xe806;</>,
  "icon-magic": <>&#xf0d0;</>,
  "icon-chat": <>&#xe802;</>,
  "icon-emo-coffee": <>&#xe804;</>,
  "icon-steam": <>&#xe805;</>,
  "icon-github": <>&#xf113;</>,
  "icon-terminal": <>&#xf120;</>,
  "icon-code": <>&#xf121;</>,
  "icon-bug": <>&#xf188;</>,
  "icon-linkedin-squared": <>&#xf30c;</>,
  "icon-react": <>&#xe803;</>,
  "icon-spin1": <>&#xe830;</>,
};

const Icon = ({ name, style, className = "" }) => {
  return (
    <div className={className} style={style}>
      <i className={`icon ${name}`}>{icon[name]}</i>
    </div>
  );
};

export default Icon;
