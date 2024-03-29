import { levelParams, levels } from '../../model/levels';
import { toolTipHandler } from './html';
import { node2Something } from '../../model/levels';
import { levelable } from '../../model/state';

export const node2Elements: node2Something = function (root, parentElem) {
    const treeRoot = document.createElement(root.tag);
    if (root.isTarget) treeRoot.classList.add('target');
    if (root.attributes?.unique) treeRoot.setAttribute('data-unique', `${root.attributes.unique}`);
    if (root.attributes?.class) treeRoot.classList.add(`${root.attributes.class}`);
    if (root.attributes?.id) treeRoot.id = root.attributes.id;
    if (root.attributes?.data) {
        toolTipHandler(root, treeRoot);
    }
    parentElem.append(treeRoot);
    if (root.children) {
        root.children.forEach((child) => node2Elements(child, treeRoot));
    }
};

export const tableChange = function (i: levels, tableArea: HTMLElement | null) {
    if (tableArea) {
        tableArea?.replaceChildren();
        if (tableArea) node2Elements(levelParams[i].node, tableArea);
        tableArea?.classList.add('entrance');
        setTimeout(() => {
            tableArea?.classList.remove('entrance');
        }, 1000);
    }
};

export const taskChange: levelable = function (i) {
    const task = document.querySelector('.task');
    if (task) task.textContent = levelParams[i].description;
};
