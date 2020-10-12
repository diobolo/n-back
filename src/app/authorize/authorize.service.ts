import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  constructor() {
  }

  open(options = {}) {

    return new Promise(resolve => {
      let container =  document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '0';
      container.style.top = '0';
      container.style.right = '0';
      container.style.bottom = '0';
      container.style.zIndex = '9999';
      container.style.background = 'rgba(0,0,0,0.2)';

      container.innerHTML = `
        <div class="modal">
          <div class="body">
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
          <div class="buttons">
            <button class="submit">submit</button>
            <button class="cancel">cancel</button>
          </div>
        </div>
        <style>
          .modal {
            background-color: #fff;
            width: 500px;
            height: 500px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        </style>
      `;

      let submitBtn = container.querySelector('.submit');
      let cancelBtn = container.querySelector('.cancel');
      submitBtn.addEventListener('click', () => {
        document.body.removeChild(container);
        resolve(true);
      });
      cancelBtn.addEventListener('click', () => {
        document.body.removeChild(container);
        resolve();
      });
      document.body.appendChild(container);
    })
  }

}
