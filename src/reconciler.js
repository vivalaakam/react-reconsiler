import ReactReconciler from 'react-reconciler';

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
  now: Date.now,
  supportsMutation: true,

  createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress) {
    console.log('createInstance', type, newProps, rootContainerInstance, workInProgress);
    const domElement = document.createElement(type);
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          domElement.textContent = propValue;
        }
      } else if (propName === 'onClick') {
        domElement.addEventListener('click', propValue);
      } else if (propName === 'className') {
        domElement.setAttribute('class', propValue);
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
    return domElement;
  },
  createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log('createTextInstance', text, rootContainerInstance, hostContext, internalInstanceHandle)
    return document.createTextNode(text);
  },
  appendChildToContainer(container, child) {
    console.log('appendChildToContainer', container, child);
    container.appendChild(child)
  },
  appendInitialChild(parent, child) {
    console.log('appendInitialChild', parent, child);
    parent.appendChild(child)
  },
  finalizeInitialChildren(...args) {
    console.log('finalizeInitialChildren', ...args)
  },
  getChildHostContext(...args) {
    console.log('getChildHostContext', ...args);
    return childHostContext;
  },
  getPublicInstance(...args) {
    console.log('getPublicInstance', ...args);
  },
  getRootHostContext(...args) {
    console.log('getRootHostContext', ...args);
    return rootHostContext;
  },
  prepareForCommit(...args) {
    console.log('prepareForCommit', ...args);
  },
  resetAfterCommit(...args) {
    console.log('resetAfterCommit', ...args);
  },
  shouldSetTextContent(...args) {
    console.log('shouldSetTextContent', ...args);
    return false
  },
  removeChildFromContainer(container, child) {
    console.log('removeChildFromContainer', container, child)
    container.removeChild(child)
  },
  removeChild(parent, child) {
    console.log('removeChild', parent, child);
    parent.removeChild(child)
  },
  insertInContainerBefore(container, child, before) {
    console.log('insertInContainerBefore', container, child, before)
    container.insertBefore(child, before)
  },
  insertBefore(parent, child, before) {
    console.log('insertBefore', parent, child, before);
    parent.insertBefore(child, before)
  },
  prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContainer) {
    console.log('prepareUpdate', instance, newProps, rootContainerInstance, currentHostContainer);
    return newProps;
  },
  commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork) {
    console.log('commitUpdate', instance, updatePayload, type, oldProps, newProps, finishedWork)
    Object.keys(updatePayload).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          instance.textContent = propValue;
        }
      } else if (propName === 'onClick') {
        instance.addEventListener('click', propValue);
      } else if (propName === 'className') {
        instance.setAttribute('class', propValue);
      } else {
        const propValue = newProps[propName];
        instance.setAttribute(propName, propValue);
      }
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    console.log('commitTextUpdate', textInstance, oldText, newText);
    textInstance.text = newText;
  },
};
const ReactReconcilerInst = ReactReconciler(hostConfig);

export function render(reactElement, domElement, callback) {
  if (!domElement._rootContainer) {
    domElement._rootContainer = ReactReconcilerInst.createContainer(domElement, false);
  }

  return ReactReconcilerInst.updateContainer(reactElement, domElement._rootContainer, null, callback);
}