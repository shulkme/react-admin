import authMock from '@/mocks/resources/auth';
import postMock from '@/mocks/resources/post';
import userMock from '@/mocks/resources/user';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// 封装模拟器，便于注册
export class Mocker extends MockAdapter {
  mock(setupFunction: (mocker: this) => void): this {
    setupFunction(this);
    return this;
  }
}

// 初始化模拟器
const mocker = new Mocker(axios, {
  delayResponse: 1000, // 延时
});

// 仅在开发模式注册
//if (process.env.NODE_ENV === 'development') {
  // 注册模拟器
  mocker.mock(authMock).mock(userMock).mock(postMock);
//}

export default mocker;
