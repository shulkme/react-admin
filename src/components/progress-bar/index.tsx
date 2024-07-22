import NProgress from 'nprogress';
import React, { useEffect } from 'react';
import './index.css';

const NProgressBar: React.FC = () => {
  // url转换
  const toAbsoluteURL = (url: string): string => {
    return new URL(url, window.location.href).href;
  };

  // 判断是否为锚点链接
  const isAnchorOfCurrentUrl = (
    currentUrl: string,
    newUrl: string,
  ): boolean => {
    const currentUrlObj = new URL(currentUrl);
    const newUrlObj = new URL(newUrl);
    if (
      currentUrlObj.hostname === newUrlObj.hostname &&
      currentUrlObj.pathname === newUrlObj.pathname &&
      currentUrlObj.search === newUrlObj.search
    ) {
      const currentHash = currentUrlObj.hash;
      const newHash = newUrlObj.hash;
      return (
        currentHash !== newHash &&
        currentUrlObj.href.replace(currentHash, '') ===
          newUrlObj.href.replace(newHash, '')
      );
    }
    return false;
  };

  // 查找最近的链接
  const findClosestAnchor = (
    element: HTMLElement | null,
  ): HTMLAnchorElement | null => {
    while (element && element.tagName.toLowerCase() !== 'a') {
      element = element.parentElement;
    }
    return element as HTMLAnchorElement;
  };

  useEffect(() => {
    // 判断是否为哈希模式
    const isHashAnchor = (currentUrl: string, newUrl: string): boolean => {
      const current = new URL(toAbsoluteURL(currentUrl));
      const next = new URL(toAbsoluteURL(newUrl));
      return current.href.split('#')[0] === next.href.split('#')[0];
    };

    // 判断是否是同一个域名
    const isSameHostName = (currentUrl: string, newUrl: string): boolean => {
      const current = new URL(toAbsoluteURL(currentUrl));
      const next = new URL(toAbsoluteURL(newUrl));
      return (
        current.hostname.replace(/^www\./, '') ===
        next.hostname.replace(/^www\./, '')
      );
    };
    // 进度条初始化配置
    NProgress.configure({
      showSpinner: false,
    });

    // 文档点击事件
    const handleClick = (event: MouseEvent): void => {
      try {
        const target = event.target as HTMLElement;
        const anchor = findClosestAnchor(target);
        const newUrl = anchor?.href;
        if (newUrl) {
          const currentUrl = window.location.href;
          const isExternalLink =
            (anchor as HTMLAnchorElement).target === '_blank';

          const isSpecialScheme = [
            'tel:',
            'mailto:',
            'sms:',
            'blob:',
            'download:',
          ].some((scheme) => newUrl.startsWith(scheme));
          const isAnchor: boolean = isAnchorOfCurrentUrl(currentUrl, newUrl);
          const notSameHost = !isSameHostName(
            window.location.href,
            anchor.href,
          );
          if (notSameHost) {
            return;
          }
          if (
            newUrl === currentUrl ||
            isAnchor ||
            isExternalLink ||
            isSpecialScheme ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey ||
            isHashAnchor(window.location.href, anchor.href) ||
            !toAbsoluteURL(anchor.href).startsWith('http')
          ) {
            NProgress.start();
            NProgress.done();
          } else {
            NProgress.start();
          }
        }
      } catch (err) {
        NProgress.start();
        NProgress.done();
      }
    };

    // 隐藏进度条事件
    const handleHide = () => NProgress.done();

    // 页面变化事件
    ((history: History): void => {
      const pushState = history.pushState;
      history.pushState = (...args) => {
        NProgress.done();
        return pushState.apply(history, args);
      };
    })((window as Window).history);

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handleHide);
    window.addEventListener('pagehide', handleHide);

    return (): void => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('pagehide', handleHide);
      window.removeEventListener('popstate', handleHide);
    };
  }, []);

  return null;
};

export default NProgressBar;
