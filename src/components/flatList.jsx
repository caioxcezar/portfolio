const FlatList = ({ className, items, renderItem, keyExtractor }) => (
  <div className={className}>
    {items.map((item, idx) => (
      <div key={keyExtractor(item, idx)}>{renderItem(item)}</div>
    ))}
  </div>
);

export default FlatList;
