// Attach an event listener to an element
// const eventOn = (el, evtName, handler) => {
//   if (el && el.addEventListener) {
//     el.addEventListener(evtName, handler);
//   }
// };

// // Remove an event listener from an element
// const eventOff = (el, evtName, handler) => {
//   if (el && el.removeEventListener) {
//     el.removeEventListener(evtName, handler)
//   }
// }

export default {
    bind() {
    },
    inserted(el, binding, vnode) {
        console.log('directives', el, binding);
        const parentEle = el;
        const node = document.createElement('div');
        const template = `<div class="arrow"></div>
    <div class="tooltip-inner">tetwt</div>`;
        node.className = 'tooltip fade show tooltip-bottom';
        node.style = 'position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(40px, 40px, 0px);';
        node.innerHTML = template;
        parentEle.onmouseover = () =
    >
        {
            console.log('click', vnode.context.$root);
            document.body.appendChild(node);
        }
        ;
        // parentEle.onmouseout = () => {
        //   document.body.removeChild(node);
        // };
        // modifiers
    },
    update() {
    },
    componentUpdated() {
    },
    unbind() {
    },
};
