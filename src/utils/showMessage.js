import {getComponentRootDom} from './index';
import Icon from '@/components/Icon';
import styles from './showMessage.module.less'
/**
 * 
 * @param {String} content 信息内容
 * @param {String} type 信息类型  info success error warn
 * @param {Number} duration 消息多久后消失
 * @param {HTMLElement} container 消息展示在该容器正中，如果不传则展示在页面正中
 */

export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    // 创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, {
        type,
    });

    console.log(iconDom);
    // console.log('icon图标')
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    if(options.container){
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }
   
    
    // 将信息框添加到容器中
    container.appendChild(div);

    //刘安琪强行渲染
    div.clientHeight; // 重排 reflow 强制刷新页面
    //提示框回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    //等一段时间消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-20px)`;
        div.addEventListener('transitionend', function () {
            //消息提示框展示完成后 删除dom
            div.remove();
            //运行回调函数
            options.callback && options.callback();
        }, {
            once: true
        });
    }, duration);
}