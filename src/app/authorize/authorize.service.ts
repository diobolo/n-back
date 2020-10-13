import { Injectable } from '@angular/core';
import { main } from '@angular/compiler-cli/src/main';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  constructor() {
  }

  open({zIndex = '9999', modes = ['phone', 'face', 'password', 'card']}) {

    return new Promise(resolve => {
      let container =  document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '0';
      container.style.top = '0';
      container.style.right = '0';
      container.style.bottom = '0';
      container.style.zIndex = zIndex;
      container.style.background = 'rgba(0,0,0,0.2)';

      container.innerHTML = `
        <div class="modal">
          <div class="body">
            <div class="tabs">
              <div class="tab">手机号</div>
              <div class="tab">人脸识别</div>
              <div class="tab">账号密码</div>
              <div class="tab">身份证</div>
              <div class="tab">微信扫码</div>
              <div class="tab">支付宝扫码</div>
            </div>
            <div class="main phone" style="display: block;">
              <div>
                <span>手机号：</span>
                <input type="number" placeholder="输入手机号" />
                <button class="send-code">send code</button>
              </div>
              <div>
                <span>验证码：</span>
                <input type="number" placeholder="输入验证码" />
              </div>
            </div>
            <div class="main face">
              <div>人脸识别模拟</div>
            </div>
            <div class="main password">
              <div>账号密码模拟</div>
            </div>
            <div class="main card">
              <div>身份证识别模拟</div>
            </div>
            <div class="main wx">
              <div>微信扫码模拟</div>
            </div>
            <div class="main ali">
              <div>支付宝扫码模拟</div>
            </div>
          </div>
          <div class="buttons">
            <button class="submit">submit</button>
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
            display: none;
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
        let submitBtn = container.querySelector('.submit');
        let cancelBtn = container.querySelector('.cancel');
        tabs.forEach((t, ti) => t.addEventListener('click', e => {
          mains.forEach((m, mi) => {
            (m as any).style.display = ti === mi ? 'block' : 'none';
          });
        }));
        submitBtn.addEventListener('click', () => {
          document.body.removeChild(container);
          resolve('a mock code');
        });
        cancelBtn.addEventListener('click', () => {
          document.body.removeChild(container);
          resolve('');
        });
      });
      document.body.appendChild(container);
    })
  }

}
