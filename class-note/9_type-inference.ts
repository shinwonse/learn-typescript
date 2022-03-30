interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "a",
};

// Best Common Type
let arr = [1, 2, true, true, "a"];
