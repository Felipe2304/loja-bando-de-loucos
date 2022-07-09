const setChildren = ($element, children) => {
  children.forEach((children) => {
    $element.appendChild(children);
  });
};

const setAttribute = ($element, attribute) => {
  $element.setAttribute(attribute[0], attribute[1]);
};

export const createElement = (props) => {
  const $element = document.createElement(props.tagName);

  props.className &&
    props.className.forEach((className) => {
      $element.classList.add(className);
    });

  if (props.textContent) $element.textContent = props.textContent;

  if (props.children) setChildren($element, props.children);

  if (props.setAttribute) setAttribute($element, props.setAttribute);

  return $element;
};
