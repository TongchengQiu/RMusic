import * as constants from '../constants';

export function getAllList() {
  return dispatch => {
    dispatch({
      type: constants.GET_ALL_LIST_ING
    });
    window.setTimeout(() => {
      // todo
      const results = [
        {
          name: '张敬轩,孙耀威 - 爱的故事上集(Live)',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E5%BC%A0%E6%95%AC%E8%BD%A9,%E5%AD%99%E8%80%80%E5%A8%81%20-%20%E7%88%B1%E7%9A%84%E6%95%85%E4%BA%8B%E4%B8%8A%E9%9B%86%28Live%29%20-%20live.mp3'
        },
        {
          name: '陈奕迅 - 失忆蝴蝶',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%A4%B1%E5%BF%86%E8%9D%B4%E8%9D%B6.mp3'
        },
        {
          name: '谢安琪 - 钟无艳',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E8%B0%A2%E5%AE%89%E7%90%AA%20-%20%E9%92%9F%E6%97%A0%E8%89%B3.mp3'
        },
        {
          name: '刘德华 - 一起走过的日子(Live) ',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E5%88%98%E5%BE%B7%E5%8D%8E%20-%20%E4%B8%80%E8%B5%B7%E8%B5%B0%E8%BF%87%E7%9A%84%E6%97%A5%E5%AD%90%28Live%29%20-%20live.mp3'
        },
        {
          name: '陈奕迅 - 斯德哥尔摩情人',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%96%AF%E5%BE%B7%E5%93%A5%E5%B0%94%E6%91%A9%E6%83%85%E4%BA%BA.mp3'
        }
      ];
      dispatch({
        type: constants.GET_ALL_LIST_SUCCESS,
        results
      });
    }, 2000);
    // error
    // dispatch({
    //   type: constants.GET_ALL_LIST_FAILED,
    //   error: err.message
    // });
  };
}

export function getMyList() {
  return dispatch => {
    dispatch({
      type: constants.GET_MY_LIST_ING
    });
    window.setTimeout(() => {
      // todo
      const results = [
        {
          name: '张敬轩,孙耀威 - 爱的故事上集(Live)',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E5%BC%A0%E6%95%AC%E8%BD%A9,%E5%AD%99%E8%80%80%E5%A8%81%20-%20%E7%88%B1%E7%9A%84%E6%95%85%E4%BA%8B%E4%B8%8A%E9%9B%86%28Live%29%20-%20live.mp3'
        },
        {
          name: '陈奕迅 - 失忆蝴蝶',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%A4%B1%E5%BF%86%E8%9D%B4%E8%9D%B6.mp3'
        },
        {
          name: '谢安琪 - 钟无艳',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E8%B0%A2%E5%AE%89%E7%90%AA%20-%20%E9%92%9F%E6%97%A0%E8%89%B3.mp3'
        },
        {
          name: '刘德华 - 一起走过的日子(Live) ',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E5%88%98%E5%BE%B7%E5%8D%8E%20-%20%E4%B8%80%E8%B5%B7%E8%B5%B0%E8%BF%87%E7%9A%84%E6%97%A5%E5%AD%90%28Live%29%20-%20live.mp3'
        },
        {
          name: '陈奕迅 - 斯德哥尔摩情人',
          src: 'http://o6i6rf3vj.bkt.clouddn.com/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E6%96%AF%E5%BE%B7%E5%93%A5%E5%B0%94%E6%91%A9%E6%83%85%E4%BA%BA.mp3'
        }
      ];
      dispatch({
        type: constants.GET_MY_LIST_SUCCESS,
        results
      });
    }, 2000);
    // error
    // dispatch({
    //   type: constants.GET_MY_LIST_FAILED,
    //   error: err.message
    // });
  };
}

export function selectMusic(form, index) {
  return dispatch => {
    dispatch({
      type: constants.SET_LIST_FORM,
      form
    });
    dispatch({
      type: constants.SET_LIST_INDEX,
      index
    });
  };
}
