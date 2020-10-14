
import authentication from './template/authentication';

export class AuthorizeService {
  mode = 'authentication';
  modes = [
    { name: 'authentication', label: '验证码', template: authentication }
  ];

  constructor() {
  }

  open({}) {
    return new Promise(resolve => {
      let container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '0';
      container.style.top = '0';
      container.style.right = '0';
      container.style.bottom = '0';
      container.style.zIndex = '9999';
      container.style.background = 'rgba(0,0,0,0.2)';
      let tabsHTML = '';
      let mainsHTML = '';

      for (let mode of this.modes) {
        tabsHTML += `<div class="tab">${mode.label}</div>`;
        mainsHTML += mode.template;
      }

      container.innerHTML = `
        <div class="modal">
          <div class="body">
            ${mainsHTML}
          </div>
          <div class="buttons">
            <button class="cancel">cancel</button>
          </div>
        </div>
        <style>
          div {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .modal {
            background-color: #fff;
            width: 500px;
            height: 500px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .modal .body {
            display: flex;
            height: 450px;
            padding: 15px;
          }
          .modal .tabs {
            width: 100px;
            height: 100%;
            flex: 0 0 100px;
          }
          .modal .tab {
            cursor: pointer;
          }
          .modal .tab:hover {
            background-color: #eee;
          }
          .modal .main {
            height: 100%;
          }
          .modal .buttons {
            height: 50px;
            padding: 15px;
          }
        </style>
      `;

      setTimeout(() => {
        let tabs = container.querySelectorAll('.tab');
        let mains = container.querySelectorAll('.main');
        // let submitBtn = container.querySelector('.submit');
        let cancelBtn = container.querySelector('.cancel');
        tabs.forEach((t, ti) => t.addEventListener('click', e => {
          mains.forEach((m, mi) => {
            (m as any).style.display = ti === mi ? 'block' : 'none';
          });
        }));
        // submitBtn.addEventListener('click', () => {
        //   document.body.removeChild(container);
        //   resolve('a mock code');
        // });
        cancelBtn.addEventListener('click', () => {
          document.body.removeChild(container);
          resolve('');
        });
      });
      document.body.appendChild(container);
    });
  }

}
