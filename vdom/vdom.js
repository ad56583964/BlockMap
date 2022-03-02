// 构造虚拟DOM对象类
function Element(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
}
// 创建虚拟DOM
function createElement(tagName, props, children) {
    return new Element(tagName, props, children)
}
//  <ul class="ul-wrap">
//         <li class="li-item">1</li>
//         <li class="li-item">2</li>
//         <li class="li-item">3</li>
//     </ul>
// 假设我们有如上的DOM结构, 那我我们就可以利用虚拟DOM模拟出一个类似的DOM树结构
  let VDOM = createElement("ul", {
      class: "ul-wrap",
  }, [
      createElement("li", {
          class: "li-item"
      }, ["1"]),
      createElement("li", {
          class: "li-item"
      }, ["2"]),
      createElement("li", {
          class: "li-item"
      }, ["3"]),
  ]);
// console.dir(JSON.stringify(VDOM,null,2));

